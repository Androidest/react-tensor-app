(this["webpackJsonpreact-tensor-app"]=this["webpackJsonpreact-tensor-app"]||[]).push([[0],{419:function(e,t){},420:function(e,t){},428:function(e,t){},430:function(e,t){},431:function(e,t){},436:function(e,t){},438:function(e,t){},449:function(e,t){},451:function(e,t){},476:function(e,t){},478:function(e,t){},479:function(e,t){},484:function(e,t){},486:function(e,t){},505:function(e,t){},517:function(e,t){},520:function(e,t){},549:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=549},554:function(e,t,n){"use strict";n.r(t);var A,r,c,o,a,i,s,u,b,l,j,h,f,p,d,O,g,x,w,m,v,y,S,U,k=n(18),F=n.n(k),R=n(365),C=n.n(R),B=n(33),D=(n(553),n(432),n(34)),G=Object(D.b)(A||(A=Object(B.a)(["\n    display: flex;\n    flex-direction: row;\n"]))),I=Object(D.b)(r||(r=Object(B.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),T={flex_row:{horz:{left:Object(D.b)(c||(c=Object(B.a)([" "," justify-content: flex-start;"])),G),center:Object(D.b)(o||(o=Object(B.a)([" "," justify-content: center;"])),G),right:Object(D.b)(a||(a=Object(B.a)([" "," justify-content: flex-end;"])),G),in_space:Object(D.b)(i||(i=Object(B.a)([" "," justify-content: space-between;"])),G),in_out_space:Object(D.b)(s||(s=Object(B.a)([" "," justify-content: space-evenly;"])),G)},vert:{top:Object(D.b)(u||(u=Object(B.a)(["align-items:flex-start;"]))),center:Object(D.b)(b||(b=Object(B.a)(["align-items:center;"]))),bottom:Object(D.b)(l||(l=Object(B.a)(["align-items:flex-end;"]))),stretch:Object(D.b)(j||(j=Object(B.a)(["align-items:stretch;"])))}},flex_col:{vert:{top:Object(D.b)(h||(h=Object(B.a)([" "," justify-content: flex-start;"])),I),center:Object(D.b)(f||(f=Object(B.a)([" "," justify-content: center;"])),I),bottom:Object(D.b)(p||(p=Object(B.a)([" "," justify-content: flex-end;"])),I),in_space:Object(D.b)(d||(d=Object(B.a)([" "," justify-content: space-between;"])),I),in_out_space:Object(D.b)(O||(O=Object(B.a)([" "," justify-content: space-evenly;"])),I)},horz:{left:Object(D.b)(g||(g=Object(B.a)(["align-items:flex-start;"]))),center:Object(D.b)(x||(x=Object(B.a)(["align-items:center;"]))),right:Object(D.b)(w||(w=Object(B.a)(["align-items:flex-end;"]))),stretch:Object(D.b)(m||(m=Object(B.a)(["align-items:stretch;"])))}},hover_blink:{forward:Object(D.b)(v||(v=Object(B.a)(["\n            :after {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 0;\n                height: 100%;\n                background-color: rgba(255,255,255,0.4);\n                -webkit-transition: none;\n                -moz-transition: none;\n                transition: none;\n                border-radius: 6ch;\n            }\n            \n            :hover:after {\n                width: 120%;\n                background-color: rgba(255,255,255,0);\n                -webkit-transition: all 1s ease-in-out;\n                -moz-transition: all 1s ease-in-out;\n                transition: all 1s ease-in-out;\n            }\n        "]))),backward:Object(D.b)(y||(y=Object(B.a)(["\n            :not(:hover):after {\n            width: 0;\n            background-color: rgba(255,255,255,0.4);\n            -webkit-transition: all 0.5s ease-out;\n            -moz-transition: all 0.5s ease-out;\n            transition: all 0.5s ease-out;\n        }"])))},img_protection:Object(D.b)(S||(S=Object(B.a)(["\n        ","\n        user-select: none;\n        ","\n        user-drag: none;\n        ","\n        pointer-events: none;\n    "])),"","","")},N=Object(D.a)(U||(U=Object(B.a)(["\n    html, body, #root {\n        height: 100%;\n        width: 100%;\n\t    overflow: hidden;\n    }\n\n    body {\n        margin: 0;\n        background-color: rgb(255, 255, 255);\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        user-select: none; \n        user-drag: none;\n    }\n\n    .img {\n        ","\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n    }\n"])),T.img_protection),E=n(3),Q=n.n(E),q=n(4),K=n(12),M=n(269),L=n(176);n(546),n(556),n(555);L.a.initializeApp({apiKey:"AIzaSyByUAid1ySJpc7RGmLGdtsuceuFLJcr32A",authDomain:"react-tensor-app.firebaseapp.com",projectId:"react-tensor-app",storageBucket:"react-tensor-app.appspot.com",messagingSenderId:"710084648290",appId:"1:710084648290:web:f9b770ead99b5f0c8aa03b",measurementId:"G-L446FGJC6L"}),L.a.analytics();L.a;var P=L.a.auth(),V=(L.a.firestore(),"Leong-Song-Alan-Stephen_react-tensor-app_peer-server-ID_CyO34QAAAP90Uk5TAAECAwQFBgcICQoLD"),Z=n(22),J=M.AES.encrypt,W=M.AES.decrypt,X=Object(k.createContext)(null);function Y(e,t){return z.apply(this,arguments)}function z(){return(z=Object(K.a)(Q.a.mark((function e(t,n){var A;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.signInWithEmailAndPassword(t,n);case 3:return e.abrupt("return",Promise.resolve(!0));case 6:e.prev=6,e.t0=e.catch(0),A=new Error,console.warn(A.stack);case 10:return e.abrupt("return",Promise.resolve(!1));case 11:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function H(){return _.apply(this,arguments)}function _(){return(_=Object(K.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.signOut();case 3:return e.abrupt("return",Promise.resolve(!0));case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",Promise.resolve(!1));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function $(e){P.onAuthStateChanged((function(t){e(t?function(e){var t=e.id;return{enc:function(e){return J(e,t)},dec:function(e){return W(e,t)}}}(t):null)}))}function ee(e){var t=e.children,n=Object(k.useState)(),A=Object(q.a)(n,2),r=A[0],c=A[1],o=Object(k.useState)(!1),a=Object(q.a)(o,2),i=a[0],s=a[1];Object(k.useEffect)(Object(K.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({}),s(!0),e.abrupt("return");case 4:$((function(e){c(e),s(!0)}));case 5:case"end":return e.stop()}}),e)}))),[]);var u={isInit:i,user:r,login:Y,logout:H};return Object(Z.jsx)(X.Provider,{value:u,children:t})}function te(){return Object(k.useContext)(X)}var ne=n(77);var Ae=n(558),re=Object(Ae.a)(),ce={uuid:re,name:"YourName-"+re.slice(0,5),photoURL:"data:image/png;base64,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"},oe=/^[^]+[.]{1}(jpeg|jpg|png|gif)$/,ae=/^([A-Z]|[a-z]|[0-9]|-){0,15}$/,ie=Object(k.createContext)(null);function se(e){var t=e.children,n=function(e,t,n){var A=Object(k.useState)((function(){n&&window.localStorage.removeItem(e);try{var A=window.localStorage.getItem(e);return A?JSON.parse(A):(window.localStorage.setItem(e,JSON.stringify(t)),t)}catch(r){return console.error(r),t}})),r=Object(q.a)(A,2),c=r[0],o=r[1];return[c,function(t){try{t=t instanceof Function?t(c):t,window.localStorage.setItem(e,JSON.stringify(t)),o(t)}catch(n){console.error(n)}}]}("me",ce,false),A=Object(q.a)(n,2),r=A[0],c=A[1];Object(k.useEffect)((function(){}),[]);var o={me:r,setPhoto:function(e){if(!oe.test(e.name))throw"Invalid image file!";var t=new FileReader;t.onloadend=function(e){c(Object(ne.a)(Object(ne.a)({},r),{},{photoURL:e.currentTarget.result}))},t.readAsDataURL(e)},setName:function(e,t){if(!ae.test(e))throw 15<=e.length?"User name must be 6-15 characters!":"Invalid character!";if(t&&e.length<6)throw"User name must be 6-15 characters!";c(Object(ne.a)(Object(ne.a)({},r),{},{name:e}))}};return Object(Z.jsx)(ie.Provider,{value:o,children:t})}var ue=Object(k.createContext)(null);function be(e){var t=e.children,n=Object(k.useState)([]),A=Object(q.a)(n,2),r=A[0],c=(A[1],{them:r});return Object(Z.jsx)(ue.Provider,{value:c,children:t})}var le=Object(k.createContext)(null);function je(e){var t=e.children,n=te(),A=Object(k.useState)(!1),r=Object(q.a)(A,2),c=r[0],o=r[1];Object(k.useEffect)((function(){o(!0)}),[n.user]);var a={isReady:c,setReady:o};return Object(Z.jsx)(le.Provider,{value:a,children:t})}function he(e){var t=e.children;return Object(Z.jsx)(je,{children:Object(Z.jsx)(se,{children:Object(Z.jsx)(be,{children:t})})})}function fe(){return Object(k.useContext)(le)}var pe,de=n(56),Oe=n(243),ge=n(242),xe=n.n(ge);function we(){var e=Object(k.useState)(""),t=Object(q.a)(e,2),n=t[0],A=t[1],r=Object(k.useState)("Waiting for connection..."),c=Object(q.a)(r,2),o=c[0],a=c[1],i=Object(k.useState)(""),s=Object(q.a)(i,2),u=s[0],b=s[1],l=Object(k.useRef)(null),j=Object(k.useRef)(null);Object(k.useEffect)((function(){l.current=new xe.a(null,{debug:2}),l.current.on("open",(function(e){b(e)}))}),[]);return Object(Z.jsxs)(ve,{children:[Object(Z.jsxs)("p",{children:["Status: ",o]}),Object(Z.jsxs)("p",{children:["message: ",n]}),Object(Z.jsxs)("p",{children:["id: ",u]}),Object(Z.jsx)("button",{onClick:function(){j.current=l.current.connect(V,{reliable:!0}),j.current.on("open",(function(){a("Connected"),j.current.send("Hello!")})),j.current.on("data",(function(e){A(e)}))},children:"connect"})]})}var me,ve=D.c.div(pe||(pe=Object(B.a)(["\n\theight: 400px;\n\twidth: 100%;\n\tbackground-color: lightcyan;\n\t","\n\t","\n\tuser-select: text;\n"])),T.flex_col.vert.center,T.flex_col.horz.center);function ye(){var e=Object(k.useState)(""),t=Object(q.a)(e,2),n=t[0],A=t[1],r=Object(k.useState)("Waiting for connection..."),c=Object(q.a)(r,2),o=c[0],a=c[1],i=Object(k.useState)(""),s=Object(q.a)(i,2),u=s[0],b=s[1],l=Object(k.useRef)(null);return Object(k.useEffect)((function(){l.current=new xe.a(V,{debug:2}),l.current.on("open",(function(e){b(e)})),l.current.on("connection",(function(e){a("Connected"),e.on("data",(function(e){A(e)})),e.on("open",(function(){e.send("Hello!")}))})),l.current.on("error",(function(e){console.log(e)}))}),[]),Object(Z.jsxs)(Re,{children:[Object(Z.jsxs)("p",{children:["Status: ",o]}),Object(Z.jsxs)("p",{children:["message: ",n]}),Object(Z.jsxs)("p",{children:["id: ",u]})]})}var Se,Ue,ke,Fe,Re=D.c.div(me||(me=Object(B.a)(["\n\theight: 400px;\n\twidth: 100%;\n\tbackground-color: lightcoral;\n\t","\n\t","\n\tuser-select: text;\n"])),T.flex_col.vert.center,T.flex_col.horz.center),Ce=n(65),Be=n.p+"static/media/blue_planet.13ad91ff.svg",De=n.p+"static/media/cyan_planet.f7f5fde8.svg",Ge=n.p+"static/media/earth.5820ba12.svg",Ie=n.p+"static/media/jupiter.2a74c919.svg",Te=n.p+"static/media/moon.fe14d20b.svg",Ne=n.p+"static/media/orange_planet.bbf32967.svg",Ee=n.p+"static/media/red_planet.3a0827a7.svg",Qe=n.p+"static/media/ring_planet.0b6db24e.svg",qe=n.p+"static/media/star.3c47846d.svg";function Ke(e){var t=e.x,n=e.y,A=e.slowDown,r=e.springProps,c=e.children,o={transform:r.xy.interpolate((function(e,r){return"translate3d(".concat(e/A+t,"px, ").concat(r/A+n,"px,0)")}))};return Object(Z.jsx)(We,{style:o,children:c})}function Me(e){var t=e.svg,n=e.x,A=e.y,r=e.w,c=e.slowDown,o=e.springProps,a={width:"".concat(r,"ch"),transform:o.xy.interpolate((function(e,t){return"translate3d(".concat(e/c+n,"px, ").concat(t/c+A,"px, 0)")}))};return Object(Z.jsx)(Ze,{src:t,style:a})}function Le(e){var t=e.children,n=Object(Ce.b)((function(){return{xy:[0,0],config:{mass:10,tension:600,friction:100}}})),A=Object(q.a)(n,2),r=A[0],c=A[1],o=function(e,t){return[e-window.innerWidth/2,t-window.innerHeight/2]};return Object(Z.jsxs)(Ve,{onMouseMove:function(e){var t=e.clientX,n=e.clientY;return c({xy:o(t,n)})},children:[Object(Z.jsx)(Je,{src:qe,x:800,y:-200,w:5}),Object(Z.jsx)(Je,{src:qe,x:-800,y:-100,w:2.5}),Object(Z.jsx)(Je,{src:qe,x:600,y:300,w:3.5}),Object(Z.jsx)(Je,{src:qe,x:730,y:-170,w:2}),Object(Z.jsx)(Je,{src:qe,x:-400,y:200,w:2}),Object(Z.jsx)(Je,{src:qe,x:-300,y:260,w:4}),Object(Z.jsx)(Je,{src:qe,x:300,y:-50,w:4}),Object(Z.jsx)(Je,{src:qe,x:50,y:-350,w:10}),Object(Z.jsx)(Je,{src:qe,x:150,y:-330,w:2}),Object(Z.jsx)(Me,{svg:Ne,x:550,y:-200,w:14,slowDown:52,springProps:r}),Object(Z.jsx)(Me,{svg:Ie,x:400,y:-290,w:30,slowDown:35,springProps:r}),Object(Z.jsx)(Me,{svg:Qe,x:-200,y:-120,w:120,slowDown:23,springProps:r}),Object(Z.jsx)(Me,{svg:Be,x:570,y:100,w:16,slowDown:18,springProps:r}),Object(Z.jsx)(Me,{svg:Ee,x:150,y:150,w:44,slowDown:10,springProps:r}),Object(Z.jsx)(Me,{svg:De,x:-300,y:-220,w:15,slowDown:5,springProps:r}),Object(Z.jsx)(Me,{svg:Ge,x:-330,y:-180,w:20,slowDown:3,springProps:r}),Object(Z.jsx)(Me,{svg:Te,x:-380,y:-150,w:6,slowDown:2.5,springProps:r}),Object(Z.jsx)(Ke,{x:0,y:0,slowDown:40,springProps:r,children:t})]})}var Pe,Ve=D.c.div(Se||(Se=Object(B.a)(["\n    height: 100%;\n    width: 100%;\n\toverflow: hidden;\n    /* color: #003e3e; */\n    background-image: linear-gradient(150deg,  #4f719b,  #583056 , #003e3e);\n    ","\n    ","\n"])),T.flex_col.vert.center,T.flex_col.horz.center),Ze=Object(D.c)(Ce.a.img)(Ue||(Ue=Object(B.a)(["\n    position: absolute;\n    will-change: transform;\n    -webkit-filter: drop-shadow( 0px 0px 6px rgba(255, 255, 255, 0.3));\n    filter: drop-shadow( 0px 0px 6px rgba(255, 255, 255, 0.3));\n    ","\n"])),T.img_protection),Je=D.c.img(ke||(ke=Object(B.a)(["\n    position: absolute;\n    width: ","ch;\n    transform: translate3d( ","px, ","px, 0);\n    -webkit-filter: drop-shadow( 0px 0px 10px rgba(255, 255, 255, 0.8));\n    filter: drop-shadow( 0px 0px 10px rgba(255, 255, 255, 0.8));\n    ","\n"])),(function(e){return e.w}),(function(e){return e.x}),(function(e){return e.y}),T.img_protection),We=Object(D.c)(Ce.a.div)(Fe||(Fe=Object(B.a)(["\n    height: 48ch;\n    width: 45ch;\n\toverflow: hidden;\n    border-radius: 4ch;\n    background-color: rgba(255, 255, 255, 0.2);\n    -webkit-backdrop-filter: blur(10px);\n    -webkit-filter: drop-shadow( 0px 0px 10px rgba(0, 0, 0, 0.6));\n    filter: drop-shadow( 0px 0px 10px rgba(0, 0, 0, 0.6));\n    backdrop-filter: blur(10px);\n    ","\n    ","\n"])),T.flex_col.vert.center,T.flex_col.horz.center),Xe=n(175);function Ye(e,t){var n=Object(Ce.b)((function(){return{scale:e,config:t||{mass:1,tension:370,friction:10}}})),A=Object(q.a)(n,2),r=A[0],c=A[1];return[{transform:r.scale.interpolate((function(e){return"scale(".concat(e,")")}))},function(e,t){return new Promise((function(n,A){var r={scale:e,onRest:n};t&&(r.config=t),c(r)}))}]}function ze(e,t){var n=Object(k.useRef)(!1),A=Object(Ce.b)((function(){return{percentage:0,config:t||{mass:1,tension:470,friction:5}}})),r=Object(q.a)(A,2),c=r[0],o=r[1];return[{transform:c.percentage.interpolate({range:[0,.5,1],output:[0,1,0]}).interpolate(e)},function(){return new Promise((function(e,t){n.current=!n.current,o({percentage:n.current?1:0,onRest:e})}))}]}var He,_e=Object(k.memo)((function(e){var t=e.className,n=e.children,A=e.onMouseDown,r=e.onMouseUp,c=e.onMouseLeave,o=Object(Xe.a)(e,["className","children","onMouseDown","onMouseUp","onMouseLeave"]),a=Ye(1),i=Object(q.a)(a,2),s=i[0],u=i[1];return Object(Z.jsx)($e,Object(ne.a)(Object(ne.a)({className:t,style:s,onMouseDown:function(){u(.9),A&&A()},onMouseUp:function(){u(1),r&&r()},onMouseLeave:function(){u(1),c&&c()}},o),{},{children:n}))})),$e=Object(D.c)(Ce.a.button)(Pe||(Pe=Object(B.a)(["\n    height: 6ch;\n\twidth: 30ch;\n    margin: 1.5ch;\n    color: white;\n    background-color: #ff80c0;\n    border-radius: 4ch;\n    border: none;\n    cursor: pointer;\n    overflow: hidden;\n\n    ","\n\t","\n\n    /* \u4ece\u5de6\u5f80\u53f3\u7684\u95ea\u5149\u6548\u679c\uff0c css transition \u52a8\u753b */\n    ","\n\t","\n\n    :focus{\n        outline: none;\n    }\n\n    \n"])),T.flex_col.vert.center,T.flex_col.horz.center,T.hover_blink.forward,T.hover_blink.backward),et=n.p+"static/media/loading.13f33801.svg";function tt(e){var t=e.className,n=Object(Ce.b)({i:0,config:{mass:70,tensor:1.5,friction:0,velocity:10}}).i;return Object(Z.jsx)(ct,{className:t,src:et,style:{transform:n.interpolate((function(e){return"rotate(".concat(45*e,"deg)")}))}})}var nt,At,rt,ct=Object(D.c)(Ce.a.img)(He||(He=Object(B.a)(["\n    width : 10ch;\n    -webkit-filter: drop-shadow( 0px 0px 10px rgba(0, 0, 0, 0.2));\n    filter: drop-shadow( 0px 0px 10px rgba(0, 0, 0, 0.2));\n"])));function ot(e){var t=e.reference,n=e.style,A=Object(Xe.a)(e,["reference","style"]),r=ze((function(e){return"translate3d(".concat(2*e,"ch, 0, 0)")})),c=Object(q.a)(r,2),o=c[0],a=c[1];return t.current={triggerShaking:a},Object(Z.jsx)(ft,Object(ne.a)({type:"password",placeholder:"INVITATION CODE",style:Object(ne.a)(Object(ne.a)({},o),n)},A))}function at(){var e=te(),t=Object(k.useRef)(),n=Object(k.useState)(""),A=Object(q.a)(n,2),r=A[0],c=A[1],o=Object(k.useState)(null),a=Object(q.a)(o,2),i=a[0],s=a[1],u=Object(k.useState)(!1),b=Object(q.a)(u,2),l=b[0],j=b[1],h=function(){var n=Object(K.a)(Q.a.mark((function n(){var A;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!l){n.next=2;break}return n.abrupt("return");case 2:return j(!0),n.next=5,e.login("stephen@invited.com",r);case 5:A=n.sent,j(!1),A||(s("Invalid invitation code!"),t.current.triggerShaking());case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(ot,{reference:t,value:r,onChange:function(e){c(e.target.value),s(null)}}),Object(Z.jsx)(pt,{onClick:h,children:" LOGIN "}),!l&&i&&Object(Z.jsx)(ht,{children:i}),l&&Object(Z.jsx)(tt,{})]})}var it,st,ut,bt,lt,jt,ht=D.c.p(nt||(nt=Object(B.a)(["\n    color: #fad692;\n    text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.5);\n"]))),ft=Object(D.c)(Ce.a.input)(At||(At=Object(B.a)(["\n    height: 6ch;\n\twidth: 30ch;\n    margin: 1.5ch;\n    color: #2c2c4e;\n    background-color: white;\n    border-radius: 4ch;\n    border: none;\n    text-align: center;\n\n    :focus{\n        outline: none;\n    }\n"]))),pt=Object(D.c)(_e)(rt||(rt=Object(B.a)(["\n    height: 6ch;\n\twidth: 30ch;\n    margin: 1.5ch;\n    color: white;\n    background-color: #53c6b1;\n    border-radius: 4ch;\n"])));function dt(e){var t=e.reference,n=e.src,A=e.onChange,r=ze((function(e){return"translate3d(".concat(1.5*e,"ch, 0, 0)")})),c=Object(q.a)(r,2),o=c[0],a=c[1],i=Ye(1),s=Object(q.a)(i,2),u=s[0],b=s[1],l=Object(k.useState)(u),j=Object(q.a)(l,2),h=j[0],f=j[1],p="login_user_photo";return t.current={triggerShaking:function(){f(o),a()}},Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(mt,{htmlFor:p,onMouseDown:function(){f(u),b(.85)},onMouseUp:function(){f(u),b(1)},onMouseLeave:function(){f(u),b(1)},style:h,children:Object(Z.jsx)(yt,{src:n})}),Object(Z.jsx)(Ut,{id:p,type:"file",accept:"image/*",onChange:A})]})}function Ot(e){var t=e.reference,n=Object(Xe.a)(e,["reference"]),A=ze((function(e){return"translate3d(".concat(e,"ch, 0, 0)")})),r=Object(q.a)(A,2),c=r[0],o=r[1];return t.current={triggerShaking:o},Object(Z.jsx)(St,Object(ne.a)({type:"text",placeholder:"YOUR USER NAME",style:c},n))}function gt(){var e=fe().setReady,t=Object(k.useContext)(ie),n=t.me,A=n.name,r=n.photoURL,c=t.setName,o=t.setPhoto,a=Object(k.useRef)(),i=Object(k.useRef)(),s=Object(k.useState)(!1),u=Object(q.a)(s,2),b=u[0],l=(u[1],Object(k.useState)(null)),j=Object(q.a)(l,2),h=j[0],f=j[1],p=Object(de.h)(),d=Object(de.g)(),O=function(){var t=Object(K.a)(Q.a.mark((function t(){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{f(null),c(A,!0),e(!0),d.replace(p.state?p.state.from:Kt)}catch(h){f(h),a.current.triggerShaking()}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(dt,{reference:i,src:r,onChange:function(e){if(e.target.files&&e.target.files[0])try{f(null),o(e.target.files[0])}catch(h){f(h),i.current.triggerShaking()}}}),Object(Z.jsx)(Ot,{reference:a,value:A,onChange:function(e){try{f(null),c(e.target.value,!1)}catch(h){f(h),a.current.triggerShaking()}}}),!b&&Object(Z.jsx)(kt,{onClick:O,children:" START "}),!b&&h&&Object(Z.jsx)(vt,{children:h}),b&&Object(Z.jsx)(tt,{})]})}var xt,wt,mt=Object(D.c)(Ce.a.label)(it||(it=Object(B.a)(["\n    width: 15ch;\n    height: 15ch;\n    margin: 1.5ch;\n    border-radius: 10ch;\n    border: none;\n    overflow: hidden;\n    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.5);\n    cursor: pointer;\n    ","\n    ","\n    \n    ","\n    ","\n    :after {\n        border-radius: 0ch;\n    }\n"])),T.hover_blink.forward,T.hover_blink.backward,T.flex_col.horz.center,T.flex_col.vert.center),vt=D.c.p(st||(st=Object(B.a)(["\n    color: #fad692;\n    text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.5);\n"]))),yt=D.c.img(ut||(ut=Object(B.a)(["\n    height: 100%;\n\twidth:  100%;\n    ","\n"])),T.img_protection),St=Object(D.c)(Ce.a.input)(bt||(bt=Object(B.a)(["\n    height: 6ch;\n\twidth: 30ch;\n    margin: 1.5ch;\n    color: #2c2c4e;\n    background-color: white;\n    border-radius: 4ch;\n    border: none;\n    text-align: center;\n\n    :focus{\n        outline: none;\n    }\n"]))),Ut=D.c.input(lt||(lt=Object(B.a)(["\n    height: 0;\n\twidth: 0;\n    opacity: 0;\n    border: none;\n    :focus{\n        outline: none;\n    }\n"]))),kt=Object(D.c)(_e)(jt||(jt=Object(B.a)(["\n    height: 6ch;\n\twidth: 30ch;\n    margin: 1.5ch;\n    color: white;\n    background-color: #d071b4;\n    border-radius: 4ch;\n"]))),Ft=Object(k.memo)((function(e){var t=e.reference,n=e.isPopup,A=e.isShownAtStart,r=e.children,c=e.className,o=Ye(A?1:0),a=Object(q.a)(o,2),i=a[0],s=a[1],u={popup:function(){var e=Object(K.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,!e.t0){e.next=4;break}return e.next=4,new Promise((function(e){return setTimeout(e,t)}));case 4:return e.abrupt("return",s(1,{mass:1,tension:370,friction:10}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),hide:function(){var e=Object(K.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,!e.t0){e.next=4;break}return e.next=4,new Promise((function(e){return setTimeout(e,t)}));case 4:return e.abrupt("return",s(0,{mass:1,tension:400,friction:35}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return t?t.current=u:n?u.popup():u.hide(),Object(Z.jsx)(Rt,{style:i,className:c,children:r})})),Rt=Object(D.c)(Ce.a.div)(xt||(xt=Object(B.a)(["\n\twidth: 100%;\n\theight: 100%;\n"])));function Ct(){var e=te(),t=Object(k.useRef)(null),n=Object(k.useState)(1),A=Object(q.a)(n,2),r=A[0],c=A[1];return Object(k.useEffect)(Object(K.a)(Q.a.mark((function n(){return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.isInit){n.next=9;break}if(e.user){n.next=5;break}t.current.popup(300),n.next=9;break;case 5:return n.next=7,t.current.hide();case 7:c(2),t.current.popup(400);case 9:case"end":return n.stop()}}),n)}))),[e.isInit,e.user]),Object(Z.jsxs)(Gt,{reference:t,isShownAtStart:!1,children:[1===r&&Object(Z.jsx)(at,{}),2===r&&Object(Z.jsx)(gt,{})]})}function Bt(){return Object(Z.jsx)(Le,{children:Object(Z.jsx)(Ct,{})})}var Dt,Gt=Object(D.c)(Ft)(wt||(wt=Object(B.a)(["\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\t","\n\t","\n"])),T.flex_col.horz.center,T.flex_col.vert.center);function It(){var e=te();return Object(Z.jsx)(Qt,{children:e.user&&e.user.email})}var Tt,Nt,Et,Qt=D.c.div(Dt||(Dt=Object(B.a)(["\n\theight: 400px;\n\twidth: 100%;\n\tbackground-color: lightseagreen;\n\t","\n\t","\n"])),T.flex_col.vert.in_out_space,T.flex_col.horz.left),qt="/login",Kt="/",Mt="/groupchat",Lt="/profile";function Pt(e){var t=e.redirectPath,n=Object(de.h)();return Object(Z.jsx)(de.b,{path:"*",children:Object(Z.jsx)(de.a,{to:{pathname:t,state:{from:n}}})})}var Vt=Object(k.memo)((function(){return Object(Z.jsxs)(de.d,{children:[Object(Z.jsxs)(de.b,{exact:!0,path:qt,children:[" ",Object(Z.jsx)(Bt,{})," "]}),Object(Z.jsx)(Pt,{redirectPath:qt})]})}));function Zt(){var e=te();return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)(zt,{children:[Object(Z.jsx)(Yt,{to:Kt,children:"Home"}),Object(Z.jsx)(Yt,{to:Mt,children:"Group Chat"}),Object(Z.jsx)(Yt,{to:Lt,children:"Profile"}),Object(Z.jsx)("button",{onClick:function(){return e.logout()},children:"sign out"})]}),Object(Z.jsxs)(de.d,{children:[Object(Z.jsxs)(de.b,{exact:!0,path:Kt,children:[" ",Object(Z.jsx)(ye,{})," "]}),Object(Z.jsxs)(de.b,{exact:!0,path:Mt,children:[" ",Object(Z.jsx)(we,{})," "]}),Object(Z.jsxs)(de.b,{exact:!0,path:Lt,children:[" ",Object(Z.jsx)(It,{}),"  "]}),Object(Z.jsx)(Pt,{redirectPath:Kt})]})]})}function Jt(){var e=te(),t=fe();return Object(Z.jsx)(Z.Fragment,{children:e.isInit?Object(Z.jsx)(Oe.a,{children:e.user&&t.isReady?Object(Z.jsx)(Zt,{}):Object(Z.jsx)(Vt,{})}):Object(Z.jsx)(Xt,{})})}var Wt,Xt=Object(D.c)(tt)(Tt||(Tt=Object(B.a)(["\n    width: 30ch;\n"]))),Yt=Object(D.c)(Oe.b)(Nt||(Nt=Object(B.a)(["\n    width: 170px;\n    height: 50px;\n    color: white;\n    text-decoration: none;\n    background-color: #8080c0;\n    border-radius: 25px;\n    ","\n    ","\n"])),T.flex_row.horz.center,T.flex_row.vert.center),zt=D.c.div(Et||(Et=Object(B.a)(["\n    width: 100%;\n    height: 50px;\n    background-color: #91dbff;\n    ","\n    ","\n"])),T.flex_row.horz.in_out_space,T.flex_row.vert.center);var Ht=D.c.div(Wt||(Wt=Object(B.a)(["\n\tbackground-color: #ffffff;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\t","\n\t","\n\tbackground-image: linear-gradient(150deg,  #4f719b,  #583056 , #003e3e);\n"])),T.flex_col.horz.center,T.flex_col.vert.center),_t=function(){return Object(Z.jsxs)(Ht,{children:[Object(Z.jsx)(N,{}),Object(Z.jsx)(ee,{children:Object(Z.jsx)(he,{children:Object(Z.jsx)(Jt,{})})})]})},$t=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,559)).then((function(t){var n=t.getCLS,A=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),A(e),r(e),c(e),o(e)}))};C.a.render(Object(Z.jsx)(F.a.StrictMode,{children:Object(Z.jsx)(_t,{})}),document.getElementById("root")),$t()}},[[554,1,2]]]);
//# sourceMappingURL=main.cdbb22c5.chunk.js.map