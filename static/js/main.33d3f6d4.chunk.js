(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(4),a=n.n(s),i=(n(15),n(8)),o=n.n(i),j=n(10),u=n(3),l=(n(17),n(18),n(9)),h=(n(19),n(1));function b(e){var t=e.news,n=e.isLoading,r=e.isError,c=e.setIsError;return console.log(t),Object(h.jsx)("div",{children:r?Object(h.jsxs)(l.a,{variant:"danger",onClose:function(){return c(!1)},dismissible:!0,children:[Object(h.jsx)("div",{}),Object(h.jsx)(l.a.Heading,{children:"Oh snap! You got an error!"}),Object(h.jsx)("h4",{children:"Failed to load results. Please reload the page and try again."})]}):n?Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h3",{children:" Loading news ..."}),Object(h.jsx)("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw"})]}):Object(h.jsx)("ol",{children:0!==t.hits.length?t.hits.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("a",{href:e.url,target:"blank",children:e.title}),Object(h.jsxs)("div",{children:[" ",Object(h.jsxs)("span",{children:[e.points," points |"]}),"  ",Object(h.jsxs)("span",{children:[" author: ",e.author," |  "]})," ",Object(h.jsxs)("span",{children:[" comments: ",e.num_comments,"   "]})," "]})]},e.objectID)})):Object(h.jsx)("h4",{children:" No results match your search, please try again. "})})})}n(23);function d(e){e.news,e.query;var t=e.setQuery,n=(e.seturl,Object(r.useState)(" ")),c=Object(u.a)(n,2),s=c[0],a=c[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{onChange:function(e){var t=e.target;a(t.value)},onKeyDown:function(e){var n=e.keyCode;e.target,13===n&&(console.log("from enter key"),t(s))},type:"text",placeholder:"Search.."}),Object(h.jsx)("button",{onClick:function(){return t(s)},children:Object(h.jsx)("i",{className:"fa fa-search"})})]})}var O=function(){var e=Object(r.useState)({hits:[]}),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)("redux"),a=Object(u.a)(s,2),i=a[0],l=a[1],O=Object(r.useState)(!1),f=Object(u.a)(O,2),x=f[0],p=f[1],v=Object(r.useState)(!1),g=Object(u.a)(v,2),m=g[0],w=g[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),p(!0),e.prev=2,e.next=5,fetch("http://hn.algolia.com/api/v1/search?query=".concat(i," "));case 5:if(!(t=e.sent).ok){e.next=13;break}return e.next=9,t.json();case 9:return n=e.sent,c(n),p(!1),e.abrupt("return");case 13:throw new Error("Request Failed!");case 16:e.prev=16,e.t0=e.catch(2),w(!0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}();e();var t=setInterval((function(){e()}),1e5);return function(){return clearInterval(t)}}),[i]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h2",{children:"  Hacker News "}),Object(h.jsx)("p",{}),Object(h.jsx)(d,{news:n,query:i,setQuery:l})]}),Object(h.jsx)(b,{news:n,isLoading:x,isError:m,setIsError:w}),Object(h.jsx)("footer",{className:"footer",children:"copyrights@2021"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),f()}},[[24,1,2]]]);
//# sourceMappingURL=main.33d3f6d4.chunk.js.map