"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[876],{6876:function(n,e,t){t.r(e),t.d(e,{default:function(){return me}});var r=t(5705),a=t(8007),i=t(3661),o=t(9434),s=t(6916),c=function(n){return n.contacts.items},u=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},d=(0,s.P1)([c,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),f=t(168),p=t(9439),m=t(3433),h=t(1413),v=t(2791),g=t(4942),x={data:""},y=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||x},b=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Z=/\/\*[^]*?\*\/|  +/g,j=/\n+/g,w=function n(e,t){var r="",a="",i="",o=function(o){var c=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+c+";":a+="f"==o[1]?n(c,o):o+"{"+n(c,"k"==o[1]?"":t)+"}":"object"==typeof c?a+=n(c,t?t.replace(/([^,])+/g,(function(n){return o.replace(/(^:.*)|([^,])+/g,(function(e){return/&/.test(e)?e.replace(/&/g,n):n?n+" "+e:e}))})):o):null!=c&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=n.p?n.p(o,c):o+":"+c+";"),s=o};for(var s in e)o(s);return r+(t&&i?t+"{"+i+"}":i)+a},C={},k=function n(e){if("object"==typeof e){var t="";for(var r in e)t+=r+n(e[r]);return t}return e},E=function(n,e,t,r,a){var i=k(n),o=C[i]||(C[i]=function(n){for(var e=0,t=11;e<n.length;)t=101*t+n.charCodeAt(e++)>>>0;return"go"+t}(i));if(!C[o]){var s=i!==n?n:function(n){for(var e,t,r=[{}];e=b.exec(n.replace(Z,""));)e[4]?r.shift():e[3]?(t=e[3].replace(j," ").trim(),r.unshift(r[0][t]=r[0][t]||{})):r[0][e[1]]=e[2].replace(j," ").trim();return r[0]}(n);C[o]=w(a?(0,g.Z)({},"@keyframes "+o,s):s,t?"":"."+o)}var c=t&&C.g?C.g:null;return t&&(C.g=C[o]),function(n,e,t,r){r?e.data=e.data.replace(r,n):-1===e.data.indexOf(n)&&(e.data=t?n+e.data:e.data+n)}(C[o],e,r,c),o},I=function(n,e,t){return n.reduce((function(n,r,a){var i=e[a];if(i&&i.call){var o=i(t),s=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=s?"."+s:o&&"object"==typeof o?o.props?"":w(o,""):!1===o?"":o}return n+r+(null==i?"":i)}),"")};function z(n){var e=this||{},t=n.call?n(e.p):n;return E(t.unshift?t.raw?I(t,[].slice.call(arguments,1),e.p):t.reduce((function(n,t){return Object.assign(n,t&&t.call?t(e.p):t)}),{}):t,y(e.target),e.g,e.o,e.k)}z.bind({g:1});var N,A,_,O,S,D,P,F,T,L,W,M,B,H,q,G,J,V,$,R=z.bind({k:1});function U(n,e){var t=this||{};return function(){var r=arguments;function a(i,o){var s=Object.assign({},i),c=s.className||a.className;t.p=Object.assign({theme:A&&A()},s),t.o=/ *go\d+/.test(c),s.className=z.apply(t,r)+(c?" "+c:""),e&&(s.ref=o);var u=n;return n[0]&&(u=s.as||n,delete s.as),_&&u[0]&&_(s),N(u,s)}return e?e(a):a}}var Y=function(n,e){return function(n){return"function"==typeof n}(n)?n(e):n},K=function(){var n=0;return function(){return(++n).toString()}}(),Q=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}}(),X=new Map,nn=function(n){if(!X.has(n)){var e=setTimeout((function(){X.delete(n),an({type:4,toastId:n})}),1e3);X.set(n,e)}},en=function n(e,t){switch(t.type){case 0:return(0,h.Z)((0,h.Z)({},e),{},{toasts:[t.toast].concat((0,m.Z)(e.toasts)).slice(0,20)});case 1:return t.toast.id&&function(n){var e=X.get(n);e&&clearTimeout(e)}(t.toast.id),(0,h.Z)((0,h.Z)({},e),{},{toasts:e.toasts.map((function(n){return n.id===t.toast.id?(0,h.Z)((0,h.Z)({},n),t.toast):n}))});case 2:var r=t.toast;return e.toasts.find((function(n){return n.id===r.id}))?n(e,{type:1,toast:r}):n(e,{type:0,toast:r});case 3:var a=t.toastId;return a?nn(a):e.toasts.forEach((function(n){nn(n.id)})),(0,h.Z)((0,h.Z)({},e),{},{toasts:e.toasts.map((function(n){return n.id===a||void 0===a?(0,h.Z)((0,h.Z)({},n),{},{visible:!1}):n}))});case 4:return void 0===t.toastId?(0,h.Z)((0,h.Z)({},e),{},{toasts:[]}):(0,h.Z)((0,h.Z)({},e),{},{toasts:e.toasts.filter((function(n){return n.id!==t.toastId}))});case 5:return(0,h.Z)((0,h.Z)({},e),{},{pausedAt:t.time});case 6:var i=t.time-(e.pausedAt||0);return(0,h.Z)((0,h.Z)({},e),{},{pausedAt:void 0,toasts:e.toasts.map((function(n){return(0,h.Z)((0,h.Z)({},n),{},{pauseDuration:n.pauseDuration+i})}))})}},tn=[],rn={toasts:[],pausedAt:void 0},an=function(n){rn=en(rn,n),tn.forEach((function(n){n(rn)}))},on={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},sn=function(n){return function(e,t){var r=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",t=arguments.length>2?arguments[2]:void 0;return(0,h.Z)((0,h.Z)({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},t),{},{id:(null==t?void 0:t.id)||K()})}(e,n,t);return an({type:2,toast:r}),r.id}},cn=function(n,e){return sn("blank")(n,e)};cn.error=sn("error"),cn.success=sn("success"),cn.loading=sn("loading"),cn.custom=sn("custom"),cn.dismiss=function(n){an({type:3,toastId:n})},cn.remove=function(n){return an({type:4,toastId:n})},cn.promise=function(n,e,t){var r=cn.loading(e.loading,(0,h.Z)((0,h.Z)({},t),null==t?void 0:t.loading));return n.then((function(n){return cn.success(Y(e.success,n),(0,h.Z)((0,h.Z)({id:r},t),null==t?void 0:t.success)),n})).catch((function(n){cn.error(Y(e.error,n),(0,h.Z)((0,h.Z)({id:r},t),null==t?void 0:t.error))})),n};var un=function(n,e){an({type:1,toast:{id:n,height:e}})},ln=function(){an({type:5,time:Date.now()})},dn=function(n){var e=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,v.useState)(rn),t=(0,p.Z)(e,2),r=t[0],a=t[1];(0,v.useEffect)((function(){return tn.push(a),function(){var n=tn.indexOf(a);n>-1&&tn.splice(n,1)}}),[r]);var i=r.toasts.map((function(e){var t,r;return(0,h.Z)((0,h.Z)((0,h.Z)((0,h.Z)({},n),n[e.type]),e),{},{duration:e.duration||(null==(t=n[e.type])?void 0:t.duration)||(null==n?void 0:n.duration)||on[e.type],style:(0,h.Z)((0,h.Z)((0,h.Z)({},n.style),null==(r=n[e.type])?void 0:r.style),e.style)})}));return(0,h.Z)((0,h.Z)({},r),{},{toasts:i})}(n),t=e.toasts,r=e.pausedAt;(0,v.useEffect)((function(){if(!r){var n=Date.now(),e=t.map((function(e){if(e.duration!==1/0){var t=(e.duration||0)+e.pauseDuration-(n-e.createdAt);if(!(t<0))return setTimeout((function(){return cn.dismiss(e.id)}),t);e.visible&&cn.dismiss(e.id)}}));return function(){e.forEach((function(n){return n&&clearTimeout(n)}))}}}),[t,r]);var a=(0,v.useCallback)((function(){r&&an({type:6,time:Date.now()})}),[r]),i=(0,v.useCallback)((function(n,e){var r,a=e||{},i=a.reverseOrder,o=void 0!==i&&i,s=a.gutter,c=void 0===s?8:s,u=a.defaultPosition,l=t.filter((function(e){return(e.position||u)===(n.position||u)&&e.height})),d=l.findIndex((function(e){return e.id===n.id})),f=l.filter((function(n,e){return e<d&&n.visible})).length;return(r=l.filter((function(n){return n.visible}))).slice.apply(r,(0,m.Z)(o?[f+1]:[0,f])).reduce((function(n,e){return n+(e.height||0)+c}),0)}),[t]);return{toasts:t,handlers:{updateHeight:un,startPause:ln,endPause:a,calculateOffset:i}}},fn=R(O||(O=(0,f.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),pn=R(S||(S=(0,f.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),mn=R(D||(D=(0,f.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),hn=U("div")(P||(P=(0,f.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),fn,pn,(function(n){return n.secondary||"#fff"}),mn),vn=R(F||(F=(0,f.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),gn=U("div")(T||(T=(0,f.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),vn),xn=R(L||(L=(0,f.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),yn=R(W||(W=(0,f.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),bn=U("div")(M||(M=(0,f.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),xn,yn,(function(n){return n.secondary||"#fff"})),Zn=U("div")(B||(B=(0,f.Z)(["\n  position: absolute;\n"]))),jn=U("div")(H||(H=(0,f.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),wn=R(q||(q=(0,f.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Cn=U("div")(G||(G=(0,f.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),wn),kn=function(n){var e=n.toast,t=e.icon,r=e.type,a=e.iconTheme;return void 0!==t?"string"==typeof t?v.createElement(Cn,null,t):t:"blank"===r?null:v.createElement(jn,null,v.createElement(gn,(0,h.Z)({},a)),"loading"!==r&&v.createElement(Zn,null,"error"===r?v.createElement(hn,(0,h.Z)({},a)):v.createElement(bn,(0,h.Z)({},a))))},En=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},In=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},zn=U("div")(J||(J=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Nn=U("div")(V||(V=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),An=v.memo((function(n){var e=n.toast,t=n.position,r=n.style,a=n.children,i=e.height?function(n,e){var t=n.includes("top")?1:-1,r=Q()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[En(t),In(t)],a=(0,p.Z)(r,2),i=a[0],o=a[1];return{animation:e?"".concat(R(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(R(o)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(e.position||t||"top-center",e.visible):{opacity:0},o=v.createElement(kn,{toast:e}),s=v.createElement(Nn,(0,h.Z)({},e.ariaProps),Y(e.message,e));return v.createElement(zn,{className:e.className,style:(0,h.Z)((0,h.Z)((0,h.Z)({},i),r),e.style)},"function"==typeof a?a({icon:o,message:s}):v.createElement(v.Fragment,null,o,s))}));!function(n,e,t,r){w.p=e,N=n,A=t,_=r}(v.createElement);var _n=function(n){var e=n.id,t=n.className,r=n.style,a=n.onHeightUpdate,i=n.children,o=v.useCallback((function(n){if(n){var t=function(){var t=n.getBoundingClientRect().height;a(e,t)};t(),new MutationObserver(t).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[e,a]);return v.createElement("div",{ref:o,className:t,style:r},i)},On=z($||($=(0,f.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Sn=function(n){var e=n.reverseOrder,t=n.position,r=void 0===t?"top-center":t,a=n.toastOptions,i=n.gutter,o=n.children,s=n.containerStyle,c=n.containerClassName,u=dn(a),l=u.toasts,d=u.handlers;return v.createElement("div",{style:(0,h.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map((function(n){var t=n.position||r,a=function(n,e){var t=n.includes("top"),r=t?{top:0}:{bottom:0},a=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return(0,h.Z)((0,h.Z)({left:0,right:0,display:"flex",position:"absolute",transition:Q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(e*(t?1:-1),"px)")},r),a)}(t,d.calculateOffset(n,{reverseOrder:e,gutter:i,defaultPosition:r}));return v.createElement(_n,{id:n.id,key:n.id,onHeightUpdate:d.updateHeight,className:n.visible?On:"",style:a},"custom"===n.type?Y(n.message,n):o?o(n):v.createElement(An,{toast:n,position:t}))})))},Dn=cn,Pn=t(6582),Fn=t(824),Tn=t(5550),Ln=t(5350),Wn=t(7438),Mn=t(7236),Bn=t(3004),Hn=t(9055),qn=t(184),Gn=function(){var n=(0,o.I0)(),e=(0,o.v9)(c),t=(0,r.TA)({initialValues:{name:"",number:""},validationSchema:a.Ry().shape({name:a.Z_().matches(/^[a-zA-Z\s]+$/,"Please, enter only letter").min(3,"Too short!").required("This field is required!"),number:a.Z_().min(5,"Too short!").matches(/^[0-9\-+']+$/,"Only numbers and -").required("This field is required!")}),onSubmit:function(t,r){if(e.some((function(n){return n.name===t.name})))Dn.error("".concat(t.name," is already in contacts"));else{var a={name:t.name,number:t.number};n((0,i.el)(a)),r.resetForm()}}});return(0,qn.jsx)(Pn.k,{justify:"center",children:(0,qn.jsx)(Fn.xu,{p:6,rounded:"md",bgGradient:"linear(to-r, green.200, pink.500)",children:(0,qn.jsx)("form",{onSubmit:t.handleSubmit,children:(0,qn.jsxs)(Tn.g,{spacing:6,children:[(0,qn.jsxs)(Ln.NI,{isInvalid:t.touched.name&&t.errors.name,children:[(0,qn.jsx)(Wn.l,{htmlFor:"name",children:"Contact name"}),(0,qn.jsx)(Mn.I,{name:"name",id:"name",type:"text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.name,placeholder:"Enter name",width:500}),(0,qn.jsx)(Bn.J1,{children:t.errors.name})]}),(0,qn.jsxs)(Ln.NI,{isInvalid:t.touched.number&&t.errors.number,children:[(0,qn.jsx)(Wn.l,{htmlFor:"number",children:"Contact number"}),(0,qn.jsx)(Mn.I,{name:"number",id:"number",type:"tel",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.number,placeholder:"Enter number"}),(0,qn.jsx)(Bn.J1,{children:t.errors.number})]}),(0,qn.jsx)(Hn.z,{type:"submit",colorScheme:"pink",color:"white",children:"Add contact"})]})})})})},Jn=t(4925),Vn=(0,t(9416).eC)("Card"),$n=(0,p.Z)(Vn,2),Rn=$n[0],Un=$n[1],Yn=t(6992),Kn=t(5597),Qn=t(2996),Xn=t(6516),ne=t(5812),ee=["className","children","direction","justify","align"],te=(0,Kn.G)((function(n,e){var t=(0,Qn.Lr)(n),r=t.className,a=t.children,i=t.direction,o=void 0===i?"column":i,s=t.justify,c=t.align,u=(0,Jn.Z)(t,ee),l=(0,Xn.jC)("Card",n);return(0,qn.jsx)(ne.m.div,(0,h.Z)((0,h.Z)({ref:e,className:(0,Yn.cx)("chakra-card",r),__css:(0,h.Z)({display:"flex",flexDirection:o,justifyContent:s,alignItems:c,position:"relative",minWidth:0,wordWrap:"break-word"},l.container)},u),{},{children:(0,qn.jsx)(Rn,{value:l,children:a})}))})),re=["className"],ae=(0,Kn.G)((function(n,e){var t=n.className,r=(0,Jn.Z)(n,re),a=Un();return(0,qn.jsx)(ne.m.div,(0,h.Z)({ref:e,className:(0,Yn.cx)("chakra-card__body",t),__css:a.body},r))})),ie=t(2715),oe=(0,t(4134).I)({displayName:"DeleteIcon",path:(0,qn.jsx)("g",{fill:"currentColor",children:(0,qn.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),se=function(n){var e=n.contact,t=e.name,r=e.number,a=e.id,s=(0,o.I0)();return(0,qn.jsx)(te,{as:"li",w:"100%",bg:"#0db59f",children:(0,qn.jsxs)(ae,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,qn.jsxs)(ie.x,{color:"white",fontWeight:"700",fontSize:30,children:[t,":"]}),(0,qn.jsxs)(Fn.xu,{display:"flex",gap:7,children:[(0,qn.jsx)(ie.x,{fontWeight:"700",fontSize:30,children:r}),(0,qn.jsx)(Hn.z,{type:"button",onClick:function(){return s((0,i._f)(a))},colorScheme:"pink",children:(0,qn.jsx)(oe,{})})]})]})})},ce=t(7371),ue=function(){return(0,qn.jsx)(ie.x,{color:"red",fontWeight:"700",children:"Whoops! Error! Please reload this page!"})},le=t(8410),de=function(){var n=(0,o.v9)(d),e=(0,o.v9)(u),t=(0,o.v9)(l);return(0,qn.jsx)(le.W,{maxW:"1280px",children:(0,qn.jsxs)(Pn.k,{as:"ul",flexDirection:"column",alignItems:"center",mb:4,mt:4,gap:4,children:[e&&(0,qn.jsx)(ce.a,{}),t&&(0,qn.jsx)(ue,{}),n.map((function(n){return(0,qn.jsx)(se,{contact:n},n.id)}))]})})},fe=t(6895),pe=function(){var n=(0,o.I0)(),e=(0,o.v9)((function(n){return n.filter}));return(0,qn.jsx)(Fn.xu,{textAlign:"center",children:(0,qn.jsx)(Mn.I,{type:"text",w:500,bg:"white",value:e,onChange:function(e){return n((0,fe.m)(e.target.value))},placeholder:"Search by name"})})};function me(){var n=(0,o.I0)();return(0,v.useEffect)((function(){n((0,i.yF)())}),[n]),(0,qn.jsxs)(Fn.xu,{bg:"green.100",h:"100vh",children:[(0,qn.jsx)(ie.x,{as:"h1",fontSize:40,fontWeight:900,textAlign:"center",fontFamily:"cursive",color:"#e81c8c",mb:7,pt:7,children:"Add contact"}),(0,qn.jsx)(Gn,{}),(0,qn.jsx)(ie.x,{as:"h1",fontSize:40,fontWeight:900,textAlign:"center",fontFamily:"cursive",color:"#e81c8c",mb:7,pt:7,children:"Contact List"}),(0,qn.jsx)(pe,{}),(0,qn.jsx)(de,{}),(0,qn.jsx)(Sn,{position:"top-right",reverseOrder:!1})]})}},4134:function(n,e,t){t.d(e,{I:function(){return c}});var r=t(1413),a=t(9640),i=t(5597),o=t(2791),s=t(184);function c(n){var e=n.viewBox,t=void 0===e?"0 0 24 24":e,c=n.d,u=n.displayName,l=n.defaultProps,d=void 0===l?{}:l,f=o.Children.toArray(n.path),p=(0,i.G)((function(n,e){return(0,s.jsx)(a.J,(0,r.Z)((0,r.Z)((0,r.Z)({ref:e,viewBox:t},d),n),{},{children:f.length?f:(0,s.jsx)("path",{fill:"currentColor",d:c})}))}));return p.displayName=u,p}}}]);
//# sourceMappingURL=876.1e8640ea.chunk.js.map