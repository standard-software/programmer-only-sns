(this["webpackJsonpprogrammer-only-sns"]=this["webpackJsonpprogrammer-only-sns"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(10),i=n.n(a),o=(n(15),n(9)),s=n(5),u=n(1),l=n.n(u),p=n(3),d=n(7),f=n.n(d),j=n(4),m=n.n(j),b=n(0),h=m.a.string,x=h.subFirst,O=h.isFirst,v=new f.a.Renderer;v.link=function(e,t,n){var r=!/^\//.test(e),c=r?' target="_blank"':"",a=r&&!/^http/.test(n)?'<i class="fa fa-fw fa-external-link"></i> ':"";return t=t?' title="'.concat(t,'"'):"",e=' href="'.concat(e,'"'),"<a".concat(e).concat(c).concat(t,">").concat(a).concat(n,"</a>")},f.a.setOptions({renderer:v});var g=function(e){return Object(j.dateToString)(Object(j.stringToDate)(e,"YYYY-MM-DDTHH:mm:ss.SSSZ"),"MM/DD HH:mm:ss")},_=function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()})).then((function(e){n=e}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(l.a.mark((function e(t,n,r){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:r},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n)});case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(l.a.mark((function e(t,n,r){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"PUT",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:r},redirect:"follow",referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify(n)});case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),T=function(e,t){var n=t.findIndex((function(t){return O(t.id,e)}));return-1===n?"":t[n].id},w=function(e,t){var n=t.findIndex((function(t){return O(t.commentId,e)}));return-1===n?"":t[n].commentId},I=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),i=Object(s.a)(a,2),u=i[0],d=i[1],m=Object(r.useState)(""),h=Object(s.a)(m,2),O=h[0],v=h[1],I=Object(r.useState)(""),C=Object(s.a)(I,2),S=C[0],A=C[1],F=Object(r.useState)(""),H=Object(s.a)(F,2),N=H[0],U=H[1],L=Object(r.useState)(""),D=Object(s.a)(L,2),E=D[0],P=D[1],B=Object(r.useState)(""),M=Object(s.a)(B,2),Y=M[0],J=M[1],V=Object(r.useState)(1e3),$=Object(s.a)(V,2),R=$[0],z=($[1],Object(r.useState)(0)),W=Object(s.a)(z,2),Z=(W[0],W[1],function(){var e=Object(p.a)(l.a.mark((function e(){var t,n,r,c,a,i,s,u,p,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("https://versatileapi.herokuapp.com/api/user/all/");case 2:return t=e.sent,d(t),n=localStorage.getItem("posns_block_user_ids"),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"https://versatileapi.herokuapp.com/api/text/all/?$orderby=_created_at desc"+(0===e?"":"&$limit=".concat(e))+(0===r?"":"&$skip=".concat(r))+(Object(j.isNull)(n)?"":"&$filter=_user_id ne "+n.split(",").map((function(e){return"'".concat(T(e,t),"'")})).join(" and _user_id ne "))},e.next=8,_("https://versatileapi.herokuapp.com/api/like/all/");case 8:return c=e.sent,e.next=11,_("https://versatileapi.herokuapp.com/api/image/all/");case 11:return a=e.sent,i=[],e.next=15,_(r(R));case 15:s=e.sent,u=Object(o.a)(s);try{for(f=function(){var e,n,r,o,s=p.value,u=Object(j.sum)(c.filter((function(e){return e.id===s.id})).map((function(e){return e.like_count}))),l=a.filter((function(e){return e.bind_text_id===s.id})).map((function(e){return e.base64}));i.push({userName:null!==(e=null===(n=t.find((function(e){return e.id===s._user_id})))||void 0===n?void 0:n.name)&&void 0!==e?e:"",replyToUserName:Object(j.isUndefined)(s.in_reply_to_user_id)?"":null!==(r=null===(o=t.find((function(e){return e.id===s.in_reply_to_user_id})))||void 0===o?void 0:o.name)&&void 0!==r?r:"-",replyToTextId:Object(j.isUndefined)(s.in_reply_to_text_id)?"":x(s.in_reply_to_text_id,8),_replyToTextId:s.in_reply_to_text_id,item:s,userId:s._user_id,createdAt:g(s._created_at),updatedAt:g(s._updated_at),commentId:s.id,text:s.text,likeCount:u,childComment:[],imageBase64Array:l})},u.s();!(p=u.n()).done;)f()}catch(l){u.e(l)}finally{u.f()}return i.reverse(),e.abrupt("return",i);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),q=function(){var e=Object(p.a)(l.a.mark((function e(t,n,r){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={text:t},""!==n&&(c.in_reply_to_user_id=n),""!==r&&(c.in_reply_to_text_id=r),e.next=5,y("https://versatileapi.herokuapp.com/api/text",c,"HelloWorld");case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),G=function(){var e=Object(p.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y("https://versatileapi.herokuapp.com/api/user/create_user",{name:t,description:n},"HelloWorld"),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){Object(p.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,Z();case 3:e.t1=e.sent,(0,e.t0)(e.t1),t={name:Object(j.initialValue)(localStorage.getItem("posns_username"),"",[null]),description:Object(j.initialValue)(localStorage.getItem("posns_userdesc"),"",[null])},n=document.documentElement,r=n.scrollHeight-n.clientHeight,window.scroll(0,r),A(t.name),U(t.description);case 11:case"end":return e.stop()}}),e)})))()}),[]);var K=function(e){return Object(b.jsxs)(b.Fragment,{children:[e.createdAt===e.updatedAt?"".concat(e.createdAt):"".concat(e.createdAt,"|").concat(e.updatedAt),"[".concat(x(e.commentId,8),"]"),Object(b.jsx)("span",{onClick:Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k("https://versatileapi.herokuapp.com/api/like/".concat(e.commentId),{like_count:e.likeCount+1},"LOVE");case 2:return t.t0=c,t.next=5,Z();case 5:t.t1=t.sent,(0,t.t0)(t.t1);case 7:case"end":return t.stop()}}),t)}))),style:{cursor:"pointer"},children:"".concat((e.likeCount," \ud83d\udc4d"))}),0===e.likeCount?"":"\ud83d\udc96".concat(e.likeCount),Object(b.jsx)("span",{onClick:Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k("https://versatileapi.herokuapp.com/api/like/".concat(e.commentId),{like_count:e.likeCount-1},"LOVE");case 2:return t.t0=c,t.next=5,Z();case 5:t.t1=t.sent,(0,t.t0)(t.t1);case 7:case"end":return t.stop()}}),t)}))),style:{cursor:"pointer"},children:"".concat(0!==e.likeCount?" \ud83d\udc4e":"")}),Object(b.jsx)("br",{}),"".concat(e.userName," [").concat(x(e.userId,10),"] "),Object(b.jsx)("br",{}),""===e.replyToUserName&&""===e.replyToTextId?null:""===e.replyToTextId?Object(b.jsxs)(b.Fragment,{children:["TO:".concat(e.replyToUserName),Object(b.jsx)("br",{})]}):""===e.replyToUserName?Object(b.jsxs)(b.Fragment,{children:["REPLY:".concat(e.replyToTextId),Object(b.jsx)("br",{})]}):Object(b.jsxs)(b.Fragment,{children:["TO:".concat(e.replyToUserName," REPLY:").concat(e.replyToTextId),Object(b.jsx)("br",{})]}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:f()(e.text.replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll("\n","  \n"))}}),0===e.imageBase64Array.length?null:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),e.imageBase64Array.map((function(e,t){return Object(b.jsx)("img",{src:e},t)}))]})]})},Q=n.filter((function(e){return Object(j.isUndefined)(e._replyToTextId)||Object(j.isUndefined)(n.find((function(t){return t.commentId===e._replyToTextId})))}));!function e(t){var r,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=Object(o.a)(t);try{var i=function(){var t=r.value;t.childComment=n.filter((function(e){return e._replyToTextId===t.commentId})),t.level=c,1<=t.childComment.length&&e(t.childComment,c+1)};for(a.s();!(r=a.n()).done;)i()}catch(s){a.e(s)}finally{a.f()}}(Q);return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsxs)("div",{children:[function e(t){return Object(b.jsx)(b.Fragment,{children:t.map((function(t,n){return Object(b.jsxs)("div",{style:{marginLeft:"".concat(30,"px")},children:[K(t),Object(b.jsx)("hr",{}),1<=t.childComment.length?e(t.childComment):null]},t.commentId)}))})}(Q),Object(b.jsx)("div",{style:{minHeight:"130px"}}),Object(b.jsxs)("div",{style:{position:"fixed",bottom:"0",backgroundColor:"white",paddingLeft:"30px",paddingTop:"30px",paddingBottom:"30px"},children:[Object(b.jsx)("input",{type:"text",value:S,onChange:function(e){A(e.target.value)},placeholder:"\u30e6\u30fc\u30b6\u30fc\u540d"}),Object(b.jsx)("input",{type:"text",value:N,onChange:function(e){U(e.target.value)},placeholder:"\u81ea\u5df1\u7d39\u4ecb\u6587"}),Object(b.jsx)("button",{onClick:Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(S,N);case 2:return localStorage.setItem("posns_username",S),localStorage.setItem("posns_userdesc",N),e.t0=c,e.next=7,Z();case 7:e.t1=e.sent,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)}))),children:"\u30e6\u30fc\u30b6\u30fc\u540d\u8a2d\u5b9a"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",value:E,onChange:function(e){P(e.target.value)},placeholder:"\u8fd4\u4fe1\u30e6\u30fc\u30b6\u30fcID"}),Object(b.jsx)("input",{type:"text",value:Y,onChange:function(e){J(e.target.value)},placeholder:"\u8fd4\u4fe1\u30c6\u30ad\u30b9\u30c8ID"}),Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{value:O,onChange:function(e){v(e.target.value)},placeholder:"\u6295\u7a3f\u5185\u5bb9"}),Object(b.jsx)("button",{onClick:Object(p.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,""!==O&&""===Y&&(t=!0),""===O){e.next=8;break}return e.next=5,q(O,T(E,u),w(Y,n));case 5:v(""),P(""),J("");case 8:return e.t0=c,e.next=11,Z();case 11:e.t1=e.sent,(0,e.t0)(e.t1),t&&(r=document.documentElement,a=r.scrollHeight-r.clientHeight,window.scroll(0,a));case 14:case"end":return e.stop()}}),e)}))),children:"\u66f8\u304d\u8fbc\u307f/\u8868\u793a\u66f4\u65b0"}),Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{})]})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),C()}},[[18,1,2]]]);
//# sourceMappingURL=main.859093f4.chunk.js.map