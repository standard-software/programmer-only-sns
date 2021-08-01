import React, { useEffect, useState } from "react";
import marked from 'marked';
import parts, {
  isUndefined, isNull, stringToDate, dateToString,
  initialValue, sum,
} from "@standard-software/parts"
const { subFirst, isFirst } = parts.string;

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

  const getCommentArray = async () => {
    const userData = await getFetchData('https://versatileapi.herokuapp.com/api/user/all/');
    setUserArray(userData);

    const _blockUserIds = localStorage.getItem('posns_block_user_ids');

    const textAllURL =
      'https://versatileapi.herokuapp.com/api/text/all/?$orderby=_created_at desc&$limit=5000' +
      (
        isNull(_blockUserIds) ? ''
        : `&$filter=_user_id ne ` +
          _blockUserIds.split(',')
          .map(v=>`'${complementUserId(v, userData)}'`)
          .join(' and _user_id ne ')
      )

    const likeData = await getFetchData(
      'https://versatileapi.herokuapp.com/api/like/all/'
    );
    // console.log({likeData})

    const imageData = await getFetchData(
      'https://versatileapi.herokuapp.com/api/image/all/'
    );
    // console.log({imageData})

    let _commentArray = [];
    const commentData = await getFetchData(textAllURL)
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
    const response = await fetch('https://versatileapi.herokuapp.com/api/text', {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "HelloWorld"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(postData)
    });
    return response.json();
  }

  const postUserName = async (name, description) => {
    const response = await fetch('https://versatileapi.herokuapp.com/api/user/create_user', {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "HelloWorld"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ name, description })
    });

    return response.json();
  }

  const reloadComment = () => {
    (async () => {
      setCommentArray(await getCommentArray());
    })();
  }

  // ページロード時のデータ読み込み処理
  useEffect(() => {
    (async () => {
      setCommentArray(await getCommentArray());

      // // ブロックユーザーID指定
      // localStorage.setItem('posns_block_user_ids', '2acaea0d5e,cce8bd6219');

      const myUserItem = {
        name: initialValue(localStorage.getItem('posns_username'), '', [null]),
        description: initialValue(localStorage.getItem('posns_userdesc'), '', [null]),
      }
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
      {`${comment.likeCount !== 0 ? ' 💖' + comment.likeCount : ''}`}
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

  // ルートに表示されるものだけをフィルタしている
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

        <div>
          <input type="text" value={inputUserName}
            onChange={(e) => {
              setInputUserName(e.target.value);
            }}
            placeholder='ユーザー名'
          />
          <input type="text" value={inputUserDescription}
            onChange={(e) => {
              setInputUserDescription(e.target.value);
            }}
            placeholder='自己紹介文'
          />
          <button onClick={async () => {
            await postUserName(inputUserName, inputUserDescription);
            localStorage.setItem('posns_username', inputUserName);
            localStorage.setItem('posns_userdesc', inputUserDescription);
            reloadComment()
          }}>ユーザー名設定</button>
          <br />
          <input type="text" value={inputReplyUserId}
            onChange={(e) => {
              setInputReplyUserId(e.target.value);
            }}
            placeholder='返信ユーザーID'
          />
          <input type="text" value={inputReplyTextId}
            onChange={(e) => {
              setInputReplyTextId(e.target.value);
            }}
            placeholder='返信テキストID'
          />
          <br />
          <textarea value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            placeholder='投稿内容'
          />
          <button onClick={async () => {
            if (inputText !== '') {
              const postTextResult = await postText(
                inputText,
                complementUserId(inputReplyUserId, userArray),
                complementTextId(inputReplyTextId, commentArray)
              );
              // console.log({postTextResult})
              setInputText('');
              setInputReplyUserId('');
              setInputReplyTextId('');
              // console.log('postText', inputText)
            }
            // console.log('onClick before reloadComment', inputText)
            reloadComment()
          }}>書き込み/表示更新</button>
          <br />
        </div>

        <br />

      </div>

      </header>
    </div>
  );
}

export default App;
