(this["webpackJsonpwhat-time-is-it-now"]=this["webpackJsonpwhat-time-is-it-now"]||[]).push([[0],[,,,function(e,t,n){e.exports={wrap:"Controller_wrap__2bpvr",input:"Controller_input__bjotq",result:"Controller_result__wGIIo"}},function(e,t,n){e.exports={wrap:"Label_wrap__CoAvx",label:"Label_label__2camQ",input:"Label_input__29TFS"}},function(e,t,n){e.exports={wrap:"Time_wrap__MhlK7",inner:"Time_inner__6iZak",time:"Time_time__2N9Zo"}},function(e,t,n){e.exports={input:"Checkbox_input__3kiei",state:"Checkbox_state__9PcP6",wrap:"Checkbox_wrap__3OaSm"}},,function(e,t,n){e.exports={h1:"Header_h1__399MM"}},function(e,t,n){e.exports={fieldset:"Fieldset_fieldset__1SUzt",legend:"Fieldset_legend__dG0xX"}},,function(e,t,n){e.exports={footer:"Footer_footer__1pN3o"}},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=n(8),o=n.n(s),l=n(0);function u(){return Object(l.jsx)("header",{className:o.a.header,children:Object(l.jsx)("h1",{className:o.a.h1,children:"\u73fe\u5728\u6642\u523b"})})}var j=n(11),d=n.n(j);function b(){return Object(l.jsx)("footer",{className:d.a.footer,children:Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"https://github.com/KawarabeEcma/what-time-is-it-now",children:"Source on GitHub"})})})}var h=n(2),p=n(5),O=n.n(p);function f(){var e=Object(a.useState)("00:00:00"),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){setInterval((function(){var e=new Date;c(e.toLocaleTimeString("JP-ja",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}))}),1e3)})),Object(l.jsx)("div",{className:O.a.wrap,id:"target",children:Object(l.jsx)("div",{className:O.a.inner,id:"target__inner",children:Object(l.jsx)("p",{id:"time","aria-live":"polite",className:O.a.time,children:n})})})}var m=n(3),x=n.n(m),g=n(9),_=n.n(g);function v(e){return Object(l.jsxs)("fieldset",{className:_.a.fieldset,children:[Object(l.jsx)("legend",{className:_.a.legend,children:e.legend}),e.children]})}var w=n(4),N=n.n(w);function S(e){return Object(l.jsx)("p",{className:N.a.wrap,"data-disabled":e.disabled,children:Object(l.jsxs)("label",{className:N.a.label,children:[Object(l.jsx)("span",{className:N.a.name,children:e.name}),Object(l.jsx)("span",{className:N.a.input,children:e.children})]})})}var C=n(12),k=n(13),y=n(6),F=n.n(y);function T(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.onChange,c=Object(k.a)(t,["onChange"]),r=Object(a.useState)(null===(e=c.checked)||void 0===e||e),i=Object(h.a)(r,2),s=i[0],o=i[1],u=function(e){var t=e.target;o(t.checked),n&&n(e)};return Object(l.jsxs)("span",{className:F.a.wrap,"data-checked":s,children:[Object(l.jsx)("input",Object(C.a)({type:"checkbox",onChange:u,className:F.a.input},c)),Object(l.jsx)("span",{className:F.a.state})]})}var I=document.createElement("style"),L=function(){try{return JSON.parse(localStorage.getItem("obs-time-css")||"{}")}catch(e){return{}}}(),E=function(){localStorage.setItem("obs-time-css",JSON.stringify(L))};function J(e){var t,n=Object(a.useState)(L.bgColor||"#ffffff"),c=Object(h.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(L.color||"#000000"),o=Object(h.a)(s,2),u=o[0],j=o[1],d=Object(a.useState)(L.weight||"normal"),b=Object(h.a)(d,2),p=b[0],O=b[1],f=Object(a.useState)(L.fontFamily||"sans-serif"),m=Object(h.a)(f,2),g=m[0],_=m[1],w=Object(a.useState)(null===(t=L.isTransparent)||void 0===t||t),N=Object(h.a)(w,2),C=N[0],k=N[1];console.log(C,0);var y=function(){return Object(l.jsx)("p",{children:Object(l.jsx)("textarea",{onFocus:function(e){e.target.select()},className:x.a.result,value:"#time {\n  /* \u3053\u3053\u306b\u6642\u9593\u306e\u898b\u305f\u76ee\u306eCSS\u3092\u8ffd\u8a18\u53ef\u80fd */\n  color: ".concat(u,";\n  font-weight: ").concat(p,";\n  font-family: ").concat(g,";\n}\n\nbody {\n  overflow: hidden;\n  background: ").concat(C?"transparent":r,";\n}\nheader, #controller, footer {\n  display: none;\n}\nmain {\n  align-self: auto;\n  width: auto;\n}\n#target {\n  margin: 0;\n  border: 0;\n  background: transparent;\n}\n#target__inner {\n  padding: 0;\n}\n        "),readOnly:!0})})};return I.textContent="#time {\n    color: ".concat(u,";\n    font-weight: ").concat(p,";\n    font-family: ").concat(g,";\n  }\n\n  #target__inner {\n    background: ").concat(C?"transparent":r,";\n  }"),Object(a.useEffect)((function(){document.head.append(I)})),Object(l.jsxs)("div",{id:"controller",className:x.a.wrap,children:[e.children,Object(l.jsxs)(v,{legend:"\u524d\u666f\u8272",children:[Object(l.jsx)(S,{name:"\u6587\u5b57\u8272",children:Object(l.jsx)("input",{type:"color",value:u,onChange:function(e){var t=e.target;return L.color=t.value,E(),j(t.value)},className:x.a.input})}),Object(l.jsx)(S,{name:"\u6587\u5b57\u306e\u592a\u3055",children:Object(l.jsxs)("select",{onChange:function(e){var t=e.target;return L.weight=t.value,E(),O(t.value)},value:p,className:x.a.input,children:[Object(l.jsx)("option",{children:"normal"}),Object(l.jsx)("option",{children:"bold"})]})}),Object(l.jsx)(S,{name:"\u30d5\u30a9\u30f3\u30c8",children:Object(l.jsx)("input",{onChange:function(e){var t=e.target;return L.fontFamily=t.value,E(),_(t.value)},value:g,className:x.a.input})})]}),Object(l.jsxs)(v,{legend:"\u80cc\u666f\u8272",children:[Object(l.jsx)(S,{name:"\u900f\u904e",children:Object(l.jsx)(T,{checked:C,onChange:function(e){var t=e.target;return L.isTransparent=t.checked,E(),k(t.checked)}})}),Object(l.jsx)(S,{name:"\u80cc\u666f\u8272",disabled:C,children:Object(l.jsx)("input",{type:"color",value:r,onChange:function(e){var t=e.target;return L.bgColor=t.value,E(),i(t.value)},className:x.a.input,disabled:C})})]}),Object(l.jsx)(y,{})]})}var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(19);i.a.render(Object(l.jsxs)(c.a.StrictMode,{children:[Object(l.jsx)(u,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(f,{}),Object(l.jsxs)(J,{children:[Object(l.jsx)("h2",{children:"OBS\u7528\u30ab\u30b9\u30bf\u30e0CSS"}),Object(l.jsx)("p",{children:"OBS\u3067\u306f500x150\u7a0b\u5ea6\u3067\u8aad\u307f\u8fbc\u3093\u3067\u304f\u3060\u3055\u3044\u3002"})]})]}),Object(l.jsx)(b,{})]}),document.getElementById("root")),P()}],[[20,1,2]]]);
//# sourceMappingURL=main.3037239f.chunk.js.map