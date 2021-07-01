(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{10:function(t,e,a){},11:function(t,e,a){},13:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(4),s=a.n(r),l=(a(10),a(11),a(2)),i=a(5),o=a(0);function u(t){var e=Object(n.useState)({data:[]}),a=Object(i.a)(e,2),c=a[0],r=a[1],s=function(t){t.preventDefault();var e=c.query;null!=e&&""!=e&&(r(Object(l.a)(Object(l.a)({},c),{},{data:[],status:"loading"})),fetch("https://jsonplaceholder.typicode.com/albums/"+e+"/photos").then((function(t){return t.json()})).then((function(t){r({data:t,status:"success"})})).catch((function(t){r({data:[],status:"error"})})))};return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("div",{className:"search-wrapper",children:Object(o.jsxs)("form",{onSubmit:s,children:[Object(o.jsx)("input",{type:"text",className:"search",placeholder:"Search by album ID",onChange:function(t){r(Object(l.a)(Object(l.a)({},c),{},{query:t.target.value}))}}),Object(o.jsx)("button",{onClick:s,children:"Get photos"})]})}),Object(o.jsx)("div",{className:"list-wrapper",children:null==c.status?Object(o.jsx)("p",{children:"Write album ID and click the button or press enter to get all album photos."}):"loading"==c.status?Object(o.jsx)("p",{children:"Loading album photos, please wait..."}):"error"==c.status?Object(o.jsx)("p",{children:"There is an error while loading album photos, try search again."}):0==c.data.length?Object(o.jsx)("p",{children:"No photos found for your album ID, try another ID."}):Object(o.jsx)("div",{className:"container",children:c.data.map((function(t){return Object(o.jsx)(j,{title:t.title,url:t.url},t.id)}))})})]})}function j(t){var e=t.title,a=t.url;return Object(o.jsxs)("div",{className:"album-wrapper",children:[Object(o.jsx)("img",{className:"album-image",src:a,alt:e}),Object(o.jsx)("p",{children:e})]})}var h=function(){return Object(o.jsx)(u,{})},b=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),r(t),s(t)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.ce9cb155.chunk.js.map