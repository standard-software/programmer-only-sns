(this["webpackJsonpprogrammer-only-sns"]=this["webpackJsonpprogrammer-only-sns"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(10),i=n.n(c),o=(n(15),n(9)),s=n(5),u=n(1),l=n.n(u),d=n(4),p=n(7),f=n.n(p),j=n(3),m=n.n(j),b=n(0),h=m.a.string,x=h.subFirst,O=h.isFirst,v=new f.a.Renderer;v.link=function(e,t,n){var r=!/^\//.test(e),a=r?' target="_blank"':"",c=r&&!/^http/.test(n)?'<i class="fa fa-fw fa-external-link"></i> ':"";return t=t?' title="'.concat(t,'"'):"",e=' href="'.concat(e,'"'),"<a".concat(e).concat(a).concat(t,">").concat(c).concat(n,"</a>")},f.a.setOptions({renderer:v});var _=function(e){return Object(j.dateToString)(Object(j.stringToDate)(e,"YYYY-MM-DDTHH:mm:ss.SSSZ"),"MM/DD HH:mm:ss")},g=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()})).then((function(e){n=e}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e,t){var n=t.findIndex((function(t){return O(t.id,e)}));return-1===n?"":t[n].id},T=function(e,t){var n=t.findIndex((function(t){return O(t.commentId,e)}));return-1===n?"":t[n].commentId},I=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),i=Object(s.a)(c,2),u=i[0],p=i[1],m=Object(r.useState)(""),h=Object(s.a)(m,2),O=h[0],v=h[1],I=Object(r.useState)(""),k=Object(s.a)(I,2),S=k[0],w=k[1],C=Object(r.useState)(""),A=Object(s.a)(C,2),F=A[0],N=A[1],U=Object(r.useState)(""),D=Object(s.a)(U,2),P=D[0],H=D[1],L=Object(r.useState)(""),M=Object(s.a)(L,2),Y=M[0],B=M[1],E=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,r,a,c,i,s,u,d,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://versatileapi.herokuapp.com/api/user/all/");case 2:return t=e.sent,p(t),n=localStorage.getItem("posns_block_user_ids"),r="https://versatileapi.herokuapp.com/api/text/all/?$orderby=_created_at desc&$limit=5000"+(Object(j.isNull)(n)?"":"&$filter=_user_id ne "+n.split(",").map((function(e){return"'".concat(y(e,t),"'")})).join(" and _user_id ne ")),e.next=8,g("https://versatileapi.herokuapp.com/api/like/all/");case 8:return a=e.sent,e.next=11,g("https://versatileapi.herokuapp.com/api/image/all/");case 11:return c=e.sent,i=[],e.next=15,g(r);case 15:s=e.sent,u=Object(o.a)(s);try{for(f=function(){var e,n,r,o,s=d.value,u=Object(j.sum)(a.filter((function(e){return e.id===s.id})).map((function(e){return e.like_count}))),l=c.filter((function(e){return e.bind_text_id===s.id})).map((function(e){return e.base64}));i.push({userName:null!==(e=null===(n=t.find((function(e){return e.id===s._user_id})))||void 0===n?void 0:n.name)&&void 0!==e?e:"",replyToUserName:Object(j.isUndefined)(s.in_reply_to_user_id)?"":null!==(r=null===(o=t.find((function(e){return e.id===s.in_reply_to_user_id})))||void 0===o?void 0:o.name)&&void 0!==r?r:"-",replyToTextId:Object(j.isUndefined)(s.in_reply_to_text_id)?"":x(s.in_reply_to_text_id,8),_replyToTextId:s.in_reply_to_text_id,item:s,userId:s._user_id,createdAt:_(s._created_at),updatedAt:_(s._updated_at),commentId:s.id,text:s.text,likeCount:u,childComment:[],imageBase64Array:l})},u.s();!(d=u.n()).done;)f()}catch(l){u.e(l)}finally{u.f()}return i.reverse(),e.abrupt("return",i);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(d.a)(l.a.mark((function e(t,n,r){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={text:t},""!==n&&(a.in_reply_to_user_id=n),""!==r&&(a.in_reply_to_text_id=r),e.next=5,fetch("https://versatileapi.herokuapp.com/api/text",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"HelloWorld"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 5:return c=e.sent,e.abrupt("return",c.json());case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://versatileapi.herokuapp.com/api/user/create_user",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"HelloWorld"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({name:t,description:n})});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=function(){Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()};Object(r.useEffect)((function(){Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1),t={name:Object(j.initialValue)(localStorage.getItem("posns_username"),"",[null]),description:Object(j.initialValue)(localStorage.getItem("posns_userdesc"),"",[null])},w(t.name),N(t.description);case 8:case"end":return e.stop()}}),e)})))()}),[]);var z=function(e){return Object(b.jsxs)(b.Fragment,{children:[e.createdAt===e.updatedAt?"".concat(e.createdAt):"".concat(e.createdAt,"|").concat(e.updatedAt),"[".concat(x(e.commentId,8),"]"),"".concat(0!==e.likeCount?" \ud83d\udc96"+e.likeCount:""),Object(b.jsx)("br",{}),"".concat(e.userName," [").concat(x(e.userId,10),"] "),Object(b.jsx)("br",{}),""===e.replyToUserName&&""===e.replyToTextId?null:""===e.replyToTextId?Object(b.jsxs)(b.Fragment,{children:["TO:".concat(e.replyToUserName),Object(b.jsx)("br",{})]}):""===e.replyToUserName?Object(b.jsxs)(b.Fragment,{children:["REPLY:".concat(e.replyToTextId),Object(b.jsx)("br",{})]}):Object(b.jsxs)(b.Fragment,{children:["TO:".concat(e.replyToUserName," REPLY:").concat(e.replyToTextId),Object(b.jsx)("br",{})]}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:f()(e.text.replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll("\n","  \n"))}}),0===e.imageBase64Array.length?null:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),e.imageBase64Array.map((function(e,t){return Object(b.jsx)("img",{src:e},t)}))]})]})},V=n.filter((function(e){return Object(j.isUndefined)(e._replyToTextId)||Object(j.isUndefined)(n.find((function(t){return t.commentId===e._replyToTextId})))}));!function e(t){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=Object(o.a)(t);try{var i=function(){var t=r.value;t.childComment=n.filter((function(e){return e._replyToTextId===t.commentId})),t.level=a,1<=t.childComment.length&&e(t.childComment,a+1)};for(c.s();!(r=c.n()).done;)i()}catch(s){c.e(s)}finally{c.f()}}(V);return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsxs)("div",{children:[function e(t){return Object(b.jsx)(b.Fragment,{children:t.map((function(t,n){return Object(b.jsxs)("div",{style:{marginLeft:"".concat(30,"px")},children:[z(t),Object(b.jsx)("hr",{}),1<=t.childComment.length?e(t.childComment):null]},t.commentId)}))})}(V),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",value:S,onChange:function(e){w(e.target.value)},placeholder:"\u30e6\u30fc\u30b6\u30fc\u540d"}),Object(b.jsx)("input",{type:"text",value:F,onChange:function(e){N(e.target.value)},placeholder:"\u81ea\u5df1\u7d39\u4ecb\u6587"}),Object(b.jsx)("button",{onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(S,F);case 2:localStorage.setItem("posns_username",S),localStorage.setItem("posns_userdesc",F),$();case 5:case"end":return e.stop()}}),e)}))),children:"\u30e6\u30fc\u30b6\u30fc\u540d\u8a2d\u5b9a"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",value:P,onChange:function(e){H(e.target.value)},placeholder:"\u8fd4\u4fe1\u30e6\u30fc\u30b6\u30fcID"}),Object(b.jsx)("input",{type:"text",value:Y,onChange:function(e){B(e.target.value)},placeholder:"\u8fd4\u4fe1\u30c6\u30ad\u30b9\u30c8ID"}),Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{value:O,onChange:function(e){v(e.target.value)},placeholder:"\u6295\u7a3f\u5185\u5bb9"}),Object(b.jsx)("button",{onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===O){e.next=7;break}return e.next=3,J(O,y(P,u),T(Y,n));case 3:e.sent,v(""),H(""),B("");case 7:$();case 8:case"end":return e.stop()}}),e)}))),children:"\u66f8\u304d\u8fbc\u307f/\u8868\u793a\u66f4\u65b0"}),Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),k()}},[[18,1,2]]]);
//# sourceMappingURL=main.20a6d999.chunk.js.map