import React, { useEffect, useState } from "react";
import marked from 'marked';
import parts, {
  isUndefined, isNull, stringToDate, dateToString,
  initialValue, sum,
} from "@standard-software/parts"
const { subFirst, isFirst } = parts.string;

// marked.js support target_blank link
const renderer = new marked.Renderer()
renderer.link = (href, title, text) => {
    const external = !/^\//.test(href);
    const usePrefix = external && !/^http/.test(text);
    const target = external ? ' target="_blank"' : '';
    const prefix = usePrefix ? "<i class=\"fa fa-fw fa-external-link\"></i> " : '';
    title = title ? ` title="${title}"` : '';
    href= ` href="${href}"`

    return `<a${href}${target}${title}>${prefix}${text}</a>`
}
marked.setOptions({
  renderer
})

const dateFormat = (dateText) => {
  return dateToString(
    stringToDate(dateText, 'YYYY-MM-DDTHH:mm:ss.SSSZ'),
    'MM/DD HH:mm:ss'
  )
}

const getFetchData = async (url) => {
  let result;
  await fetch(url)
  .then((response) => response.json())
  .then((data) => {
    result = data
  })
  return result;
}

const postFetchData = async (url, postData, authorization) => {
  let result = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(postData)
  });
  return result.json();
}

const putFetchData = async (url, postData, authorization) => {
  let result = await fetch(url, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
    redirect: "follow",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify(postData)
  });
  return result.json();
}

const complementUserId = (shortId, userArray) => {
  // console.log('complementUserId', { userArray, shortId });
  const index = userArray.findIndex(user => isFirst(user.id, shortId))
  // console.log({ userArray, shortId, index });
  if (index === -1) {
    return ''
  } else {
    return userArray[index].id
  }
}

const complementTextId = (shortId, commentArray) => {
  // console.log('complementTextId', { commentArray, shortId });
  const index = commentArray.findIndex(comment => isFirst(comment.commentId, shortId))
  // console.log({ commentArray, shortId, index });
  if (index === -1) {
    return ''
  } else {
    return commentArray[index].commentId
  }
}

const App = () => {

  const [commentArray, setCommentArray] = useState([]);
  const [userArray, setUserArray] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputUserName, setInputUserName] = useState('');
  const [inputUserDescription, setInputUserDescription] = useState('');
  const [inputReplyUserId, setInputReplyUserId] = useState('');
  const [inputReplyTextId, setInputReplyTextId] = useState('');
  const [limit, setLimit] = useState(1000);
  const [skip, setSkip] = useState(0);

  const getCommentArray = async () => {
    const userData = await getFetchData('https://versatileapi.herokuapp.com/api/user/all/');
    setUserArray(userData);

    const _blockUserIds = localStorage.getItem('posns_block_user_ids');

    const textAllURL = (limit=100, skip=0) => {
      return 'https://versatileapi.herokuapp.com/api/text/all/?$orderby=_created_at desc' +
      (limit === 0 ? '' :
        `&$limit=${limit}`
      ) +
      (skip === 0 ? '' :
        `&$skip=${skip}`
      ) +
      (
        isNull(_blockUserIds) ? ''
        : `&$filter=_user_id ne ` +
          _blockUserIds.split(',')
          .map(v=>`'${complementUserId(v, userData)}'`)
          .join(' and _user_id ne ')
      )
    }

    const likeData = await getFetchData(
      'https://versatileapi.herokuapp.com/api/like/all/'
    );
    // console.log({likeData})

    const imageData = await getFetchData(
      'https://versatileapi.herokuapp.com/api/image/all/'
    );
    // console.log({imageData})

    let _commentArray = [];
    const commentData = await getFetchData(textAllURL(limit))
    // console.log({commentData})
    for (const item of commentData) {
      let likeCount = sum(likeData.filter(like => like.id === item.id).map(v => v.like_count))
      let imageBase64Array = imageData.filter(image => image.bind_text_id === item.id).map(v => v.base64)

      _commentArray.push({
        userName:
        userData.find((user) => {
            return user.id === item._user_id;
          })?.name ?? "",
        replyToUserName:
          isUndefined(item.in_reply_to_user_id) ? '' :
          userData.find((user) => {
            return user.id === item.in_reply_to_user_id;
          })?.name ?? "-",
        replyToTextId:
          isUndefined(item.in_reply_to_text_id) ? '' :
          subFirst(item.in_reply_to_text_id, 8),
        _replyToTextId: item.in_reply_to_text_id,
        item: item,
        userId: item._user_id,
        createdAt: dateFormat(item._created_at),
        updatedAt: dateFormat(item._updated_at),
        commentId: item.id,
        text: item.text,
        likeCount,
        childComment: [],
        imageBase64Array,
      });
    }

    _commentArray.reverse();
    // console.log({_commentArray})
    return _commentArray;
  }

  const postText = async (text, replyUserId, replyTextId) => {
    const postData = {
      text
    }
    if (replyUserId !== '') {
      postData.in_reply_to_user_id = replyUserId
    }
    if (replyTextId !== '') {
      postData.in_reply_to_text_id = replyTextId
    }
    // console.log({postData})
    const response = await postFetchData(
      'https://versatileapi.herokuapp.com/api/text',
      postData,
      "HelloWorld",
    );
    return response;
  }

  const postUserName = async (name, description) => {
    const response = postFetchData(
      'https://versatileapi.herokuapp.com/api/user/create_user',
      { name, description },
      "HelloWorld",
    )
    return response;
  }

  // ???????????????????????????????????????????????????
  useEffect(() => {
    (async () => {
      setCommentArray(await getCommentArray());

      // // ????????????????????????ID??????
      // localStorage.setItem('posns_block_user_ids', '2acaea0d5e,cce8bd6219');

      const myUserItem = {
        name: initialValue(localStorage.getItem('posns_username'), '', [null]),
        description: initialValue(localStorage.getItem('posns_userdesc'), '', [null]),
      }

      var element = document.documentElement;
      var bottom = element.scrollHeight - element.clientHeight;
      window.scroll(0, bottom);

      // console.log({myUserItem})
      setInputUserName(myUserItem.name);
      setInputUserDescription(myUserItem.description)
    })();
  }, []);

  const commentOutput = (comment) => {
    return <>
      {comment.createdAt === comment.updatedAt
        ? `${comment.createdAt}`
        : `${comment.createdAt}|${comment.updatedAt}`}
      {`[${subFirst(comment.commentId, 8)}]`}
      <span
        onClick={async () => {
          await putFetchData(
            `https://versatileapi.herokuapp.com/api/like/${comment.commentId}`,
            { like_count: comment.likeCount + 1 },
            'LOVE',
          );
          setCommentArray(await getCommentArray());
        }}
        style={{ cursor: 'pointer' }}
      >
        {`${comment.likeCount !== 0 ? ' ????' : ' ????'}`}
      </span>
      {comment.likeCount === 0 ? '' : `????${comment.likeCount}`}
      <span
        onClick={async () => {
          await putFetchData(
            `https://versatileapi.herokuapp.com/api/like/${comment.commentId}`,
            { like_count: comment.likeCount - 1 },
            'LOVE',
          );
          setCommentArray(await getCommentArray());
        }}
        style={{ cursor: 'pointer' }}
      >
        {`${comment.likeCount !== 0 ? ' ????' : ''}`}
      </span>
      <br />
      {`${comment.userName} [${subFirst(comment.userId, 10)}] `}
      <br />
      {
        comment.replyToUserName === '' && comment.replyToTextId === '' ? null
        : comment.replyToTextId === '' ? <>{`TO:${comment.replyToUserName}`}<br /></>
        : comment.replyToUserName === '' ? <>{`REPLY:${comment.replyToTextId}`}<br /></>
        : <>{`TO:${comment.replyToUserName} REPLY:${comment.replyToTextId}`}<br /></>
      }

      <div dangerouslySetInnerHTML={
        {
          __html: marked(
            comment.text.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('\n', '  \n')
          )
        }
      } />
      {/* {
        comment.text
        .split(/(\n)/).map((v, i) => v === '\n' ? <br key={i} /> : v)
      } */}

      {comment.imageBase64Array.length === 0 ? null :
        <>
          <br />
          {comment.imageBase64Array.map((img, imgIndex) => {
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img key={imgIndex} src={img} />
            );
          })}
        </>
      }

    </>
  }

  // ??????????????????????????????????????????????????????????????????
  const viewCommentArray = commentArray.filter(comment => {
    return (isUndefined(comment._replyToTextId)) ||
      isUndefined(commentArray.find(c => c.commentId === comment._replyToTextId))
  });


  const setChildComment = (targetCommentArray, level = 0) => {
    for (const item of targetCommentArray) {
      item.childComment = commentArray.filter(c => c._replyToTextId === item.commentId);
      item.level = level;
      if (1 <= item.childComment.length) {
        setChildComment(item.childComment, level + 1);
      }
    }
  }
  setChildComment(viewCommentArray)

  const outputChildComment = (targetCommentArray) => {
    const result = (<>
      {
        targetCommentArray.map((comment, i) => {
          return (
            <div key={comment.commentId} style={{ marginLeft: `${30}px` }}>
                {commentOutput(comment)}
                <hr />
                {1 <= comment.childComment.length ? outputChildComment( comment.childComment) : null}
            </div>
          )
        })
      }
    </>)
    return result;
  }

  return (
    <div className="App">
      <header className="App-header">

      <div>
        {outputChildComment(viewCommentArray)}

        <div
          style={{
            minHeight: '130px'
          }}
        >
        </div>

        <div
          style={{
            position: 'fixed',
            bottom: '0',
            backgroundColor: 'white',
            paddingLeft: '30px',
            paddingTop: '30px',
            paddingBottom: '30px',
          }}
        >
          <input type="text" value={inputUserName}
            onChange={(e) => {
              setInputUserName(e.target.value);
            }}
            placeholder='???????????????'
          />
          <input type="text" value={inputUserDescription}
            onChange={(e) => {
              setInputUserDescription(e.target.value);
            }}
            placeholder='???????????????'
          />
          <button onClick={async () => {
            await postUserName(inputUserName, inputUserDescription);
            localStorage.setItem('posns_username', inputUserName);
            localStorage.setItem('posns_userdesc', inputUserDescription);
            setCommentArray(await getCommentArray());
          }}>?????????????????????</button>
          <br />
          <input type="text" value={inputReplyUserId}
            onChange={(e) => {
              setInputReplyUserId(e.target.value);
            }}
            placeholder='??????????????????ID'
          />
          <input type="text" value={inputReplyTextId}
            onChange={(e) => {
              setInputReplyTextId(e.target.value);
            }}
            placeholder='??????????????????ID'
          />
          <br />
          <textarea value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            placeholder='????????????'
          />
          <button onClick={async () => {
            let scrollFlag = false;

            if (inputText !== '') {
              if (inputReplyTextId === '') {
                scrollFlag = true;
              }
            }

            if (inputText !== '') {
              await postText(
                inputText,
                complementUserId(inputReplyUserId, userArray),
                complementTextId(inputReplyTextId, commentArray)
              );
              setInputText('');
              setInputReplyUserId('');
              setInputReplyTextId('');
              // console.log('postText', inputText)
            }

            setCommentArray(await getCommentArray());

            if (scrollFlag) {
              var element = document.documentElement;
              var bottom = element.scrollHeight - element.clientHeight;
              window.scroll(0, bottom);
            }

          }}>????????????/????????????</button>
          <br />
        </div>

        <br />

      </div>

      </header>
    </div>
  );
}

export default App;
