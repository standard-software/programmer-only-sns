(this["webpackJsonpprogrammer-only-sns"]=this["webpackJsonpprogrammer-only-sns"]||[]).push([[0],{15:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=r(9),s=r.n(a),o=(r(15),r(10)),u=r(8),i=r(5),l=r(1),p=r.n(l),d=r(3),f=r(4),b=r.n(f),j=r(0),m=b.a.string,x=m.subFirst,h=m.isFirst,O=function(e){return Object(f.dateToString)(Object(f.stringToDate)(e,"YYYY-MM-DDTHH:mm:ss.SSSZ"),"MM/DD HH:mm:ss")},v=function(){var e=Object(d.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()})).then((function(e){r=e}));case 2:return e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),s=Object(i.a)(a,2),l=s[0],b=s[1],m=Object(n.useState)(""),g=Object(i.a)(m,2),y=g[0],_=g[1],I=Object(n.useState)(""),k=Object(i.a)(I,2),S=k[0],T=k[1],w=Object(n.useState)(""),A=Object(i.a)(w,2),N=A[0],C=A[1],U=Object(n.useState)(""),D=Object(i.a)(U,2),F=D[0],P=D[1],H=Object(n.useState)(""),Y=Object(i.a)(H,2),M=Y[0],E=Y[1],J=function(){var e=Object(d.a)(p.a.mark((function e(){var t,r,n,c,a,s,i,l,d,j;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,v("https://versatileapi.herokuapp.com/api/user/all/");case 3:r=e.sent,n=Object(u.a)(r);try{for(n.s();!(c=n.n()).done;)a=c.value,t.push(Object(o.a)({},a))}catch(p){n.e(p)}finally{n.f()}return console.log({_userArray:t}),b(t),s=[],e.next=11,v("https://versatileapi.herokuapp.com/api/text/all/?$orderby=_created_at desc&$limit=1000&$filter=_user_id ne 'd9ecf9245defb6b07cb86fe92a6fde9e735fc9f9'");case 11:i=e.sent,l=Object(u.a)(i);try{for(j=function(){var e,r,n,c,a=d.value;s.push({userName:null!==(e=null===(r=t.find((function(e){return e.id===a._user_id})))||void 0===r?void 0:r.name)&&void 0!==e?e:"",replyToUserName:Object(f.isUndefined)(a.in_reply_to_user_id)?"":null!==(n=null===(c=t.find((function(e){return e.id===a.in_reply_to_user_id})))||void 0===c?void 0:c.name)&&void 0!==n?n:"-",replyToTextId:Object(f.isUndefined)(a.in_reply_to_text_id)?"":x(a.in_reply_to_text_id,8),item:a,userId:a._user_id,createdAt:O(a._created_at),updatedAt:O(a._updated_at),commentId:a.id,text:a.text})},l.s();!(d=l.n()).done;)j()}catch(p){l.e(p)}finally{l.f()}return console.log({_commentArray:s}),s.reverse(),e.abrupt("return",s);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(p.a.mark((function e(t,r,n){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={text:t},""!==r&&(c.in_reply_to_user_id=r),""!==n&&(c.in_reply_to_text_id=n),console.log({postData:c}),e.next=6,fetch("https://versatileapi.herokuapp.com/api/text",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"HelloWorld"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(c)});case 6:return a=e.sent,e.abrupt("return",a.json());case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(p.a.mark((function e(t,r){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://versatileapi.herokuapp.com/api/user/create_user",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"HelloWorld"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({name:t,description:r})});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),$=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))},z=function(){var e=Object(d.a)(p.a.mark((function e(){var t,r,n,c,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("https://versatileapi.herokuapp.com/api/user/all/");case 3:t=e.sent,e.next=14;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log("getUserName userData catch",t),e.next=11,$(5);case 11:return e.next=13,z();case 13:return e.abrupt("return",e.sent);case 14:console.log("getUserName 1",t),n={isSuccess:!1,counter:0};case 16:if(!1!==n.isSuccess){e.next=34;break}return e.prev=17,e.next=20,R("test","test");case 20:r=e.sent,n.isSuccess=!0,e.next=29;break;case 24:return e.prev=24,e.t1=e.catch(17),e.next=28,$(5);case 28:n.counter+=1;case 29:if(!(n.counter>=5)){e.next=31;break}return e.abrupt("return");case 31:console.log("getUserName 2",r),e.next=16;break;case 34:c=r.id,a=t.find((function(e){return e.id===c})),s={isSuccess:!1,counter:0};case 37:if(!1!==s.isSuccess){e.next=53;break}return e.prev=38,e.next=41,R(a.name,a.description);case 41:s.isSuccess=!0,e.next=49;break;case 44:return e.prev=44,e.t2=e.catch(38),e.next=48,$(5);case 48:s.counter+=1;case 49:s.counter>=5&&(s.isSuccess=!0),console.log("getUserName 3",{myUserItem:a}),e.next=37;break;case 53:return e.abrupt("return",a);case 54:case"end":return e.stop()}}),e,null,[[0,6],[17,24],[38,44]])})));return function(){return e.apply(this,arguments)}}(),B=function(e){console.log("complementUserId",{userArray:l,shortId:e});var t=l.findIndex((function(t){return h(t.id,e)}));return console.log({userArray:l,shortId:e,index:t}),-1===t?"":l[t].id},W=function(e){console.log("complementTextId",{commentArray:r,shortId:e});var t=r.findIndex((function(t){return h(t.commentId,e)}));return console.log({commentArray:r,shortId:e,index:t}),-1===t?"":r[t].commentId},Z=function(){Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,J();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()};return Object(n.useEffect)((function(){Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,J();case 3:if(e.t1=e.sent,(0,e.t0)(e.t1),t={name:localStorage.getItem("posns_username"),description:localStorage.getItem("posns_userdesc")},!Object(f.isNull)(t.name)){e.next=14;break}return e.next=9,z();case 9:if(t=e.sent,!Object(f.isUndefined)(t)){e.next=12;break}return e.abrupt("return");case 12:localStorage.setItem("posns_username",t.name),localStorage.setItem("posns_userdesc",t.description);case 14:T(t.name),C(t.description);case 16:case"end":return e.stop()}}),e)})))()}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsxs)("div",{children:[r.map((function(e,t){return Object(j.jsxs)("div",{children:[e.createdAt===e.updatedAt?"".concat(e.createdAt):"".concat(e.createdAt,"|").concat(e.updatedAt),"[".concat(x(e.commentId,8),"]"),Object(j.jsx)("br",{}),"".concat(e.userName," [").concat(x(e.userId,10),"] "),Object(j.jsx)("br",{}),""===e.replyToUserName&&""===e.replyToTextId?null:""===e.replyToTextId?Object(j.jsxs)(j.Fragment,{children:["TO:".concat(e.replyToUserName),Object(j.jsx)("br",{})]}):""===e.replyToUserName?Object(j.jsxs)(j.Fragment,{children:["REPLY:".concat(e.replyToTextId),Object(j.jsx)("br",{})]}):Object(j.jsxs)(j.Fragment,{children:["TO:".concat(e.replyToUserName," REPLY:").concat(e.replyToTextId),Object(j.jsx)("br",{})]}),e.text.split(/(\n)/).map((function(e){return"\n"===e?Object(j.jsx)("br",{}):e})),Object(j.jsx)("hr",{})]},e.commentId)})),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",value:S,onChange:function(e){T(e.target.value)},placeholder:"\u30e6\u30fc\u30b6\u30fc\u540d"}),Object(j.jsx)("input",{type:"text",value:N,onChange:function(e){C(e.target.value)},placeholder:"\u81ea\u5df1\u7d39\u4ecb\u6587"}),Object(j.jsx)("button",{onClick:Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(S,N);case 2:localStorage.setItem("posns_username",S),localStorage.setItem("posns_userdesc",N),Z();case 5:case"end":return e.stop()}}),e)}))),children:"\u30e6\u30fc\u30b6\u30fc\u540d\u8a2d\u5b9a"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:F,onChange:function(e){P(e.target.value)},placeholder:"\u8fd4\u4fe1\u30e6\u30fc\u30b6\u30fcID"}),Object(j.jsx)("input",{type:"text",value:M,onChange:function(e){E(e.target.value)},placeholder:"\u8fd4\u4fe1\u30c6\u30ad\u30b9\u30c8ID"}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{value:y,onChange:function(e){_(e.target.value)},placeholder:"\u6295\u7a3f\u5185\u5bb9"}),Object(j.jsx)("button",{onClick:Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===y){e.next=9;break}return e.next=3,L(y,B(F),W(M));case 3:t=e.sent,console.log({postTextResult:t}),_(""),P(""),E(""),console.log("postText",y);case 9:console.log("onClick before reloadComment",y),Z();case 11:case"end":return e.stop()}}),e)}))),children:"\u66f8\u304d\u8fbc\u307f/\u8868\u793a\u66f4\u65b0"}),Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{})]})})})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.8f1296d1.chunk.js.map