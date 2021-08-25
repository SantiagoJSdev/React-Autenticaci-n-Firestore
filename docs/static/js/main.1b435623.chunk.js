(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(32),r=n.n(c),o=n(8),s=n(20),i=n(21),u=n(10),l=n(28);n(170),n(74);l.a.initializeApp({apiKey:"AIzaSyDuzHEWNKnSMLzAc1F2TfC-UzPoAy9-370",authDomain:"react-app-cursos-a6596.firebaseapp.com",projectId:"react-app-cursos-a6596",storageBucket:"react-app-cursos-a6596.appspot.com",messagingSenderId:"811013699333",appId:"1:811013699333:web:6387256751673c0a87a96c"});var d=l.a.firestore(),j=new l.a.auth.GoogleAuthProvider,b=n(9),p=n.n(b),h=n(15),m=n(22),f=n.n(m),O="[Auth] login",x="[Auth] Logout",v="[UI] Set Error",g="[UI] Remove Error",_="[UI] Start loading",y="[UI] Finish loading",N="[Notes] New Note",w="[Notes] Set active note",k="[Notes] Load note",C="[Notes] Update note",E="[Notes] Delete note",S="[Notes] Logout Cleaning",A=function(){return{type:y}},I=n(6),L=function(){var e=Object(h.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/daklqpkaq/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/daklqpkaq/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(I.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e,t){return{type:N,payload:Object(I.a)({id:e},t)}},U=function(e,t){return{type:w,payload:Object(I.a)({id:e},t)}},q=function(e){return{type:k,payload:e}},z=function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n,a){var c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(I.a)({},e)).id,t.next=6,d.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(F(e.id,r)),f.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},F=function(e,t){return{type:C,payload:{id:e,note:Object(I.a)({id:e},t)}}},R=function(e){return{type:E,payload:e}},T=function(e,t){return function(n){n({type:_}),l.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(W(t.uid,t.displayName)),n(A())})).catch((function(e){console.log(e),n(A()),f.a.fire("Error",e.message,"error")}))}},W=function(e,t){return{type:O,payload:{uid:e,displayName:t}}},B=function(){return{type:x}},G=n(35),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(s.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(I.a)(Object(I.a)({},c),{},Object(G.a)({},t.name,t.value)))};return[c,i,o]},K=n(1),M=function(){var e=Object(o.c)((function(e){return e})).ui,t=Object(o.b)(),n=J({email:"",password:""}),a=Object(s.a)(n,2),c=a[0],r=a[1],u=c.email,d=c.password;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h3",{className:"auth__title",children:"Login"}),Object(K.jsxs)("form",{className:"animate__animated animate__fadeIn",onSubmit:function(e){e.preventDefault(),t(T(u,d))},children:[Object(K.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:r}),Object(K.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:d,onChange:r}),Object(K.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:e.loading,children:"Login"}),Object(K.jsxs)("div",{className:"auth__social-networks",children:[Object(K.jsx)("p",{children:"Login with social networks"}),Object(K.jsxs)("div",{className:"google-btn",onClick:function(){t((function(e){l.a.auth().signInWithPopup(j).then((function(t){var n=t.user;e(W(n.uid,n.displayName))}))}))},children:[Object(K.jsx)("div",{className:"google-icon-wrapper",children:Object(K.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(K.jsx)("p",{className:"btn-text",children:Object(K.jsx)("b",{children:"Sign in with google"})})]})]}),Object(K.jsx)(i.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},V=n(63),X=n.n(V),H=function(e){return{type:v,payload:e}},Q=function(){var e=Object(o.c)((function(e){return e})),t=Object(o.b)(),n=J({name:"hernando",email:"hernando@gmail.com",password:"123456",password2:"123456"}),a=Object(s.a)(n,2),c=a[0],r=a[1],u=c.name,d=c.email,j=c.password,b=c.password2,m=function(){return 0===u.trim().length?(t(H("name requerido")),!1):X.a.isEmail(d)?j!==b||j.length<5?(t(H("Verifique password ")),!1):(t({type:g}),!0):(t(H("email requerido")),!1)};return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h3",{className:"auth__title",children:"Register"}),Object(K.jsxs)("form",{className:"animate__animated animate__fadeIn",onSubmit:function(e){e.preventDefault(),m()&&t(function(e,t,n){return function(a){l.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(h.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(W(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),f.a.fire("Error",e.message,"error")}))}}(d,j,u))},children:[e.ui.msgError&&Object(K.jsx)("div",{className:"auth__alert-error",children:e.ui.msgError}),Object(K.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:u,onChange:r}),Object(K.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:r}),Object(K.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",autoComplete:"off",value:j,onChange:r}),Object(K.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",autoComplete:"off",value:b,onChange:r}),Object(K.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(K.jsx)(i.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},Y=function(){return Object(K.jsx)("div",{className:"auth__main",children:Object(K.jsx)("div",{className:"auth__box-container",children:Object(K.jsxs)(u.d,{children:[Object(K.jsx)(u.b,{exact:!0,path:"/auth/login",component:M}),Object(K.jsx)(u.b,{exact:!0,path:"/auth/register",component:Q}),Object(K.jsx)(u.a,{to:"/auth/login"})]})})})},Z=n(64),$=n.n(Z),ee=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,s=$()(n),i=Object(o.b)();return Object(K.jsxs)("div",{onClick:function(){i(U(t,{date:n,title:a,body:c,url:r}))},className:"journal__entry pointer animate__animated animate__fadeIn",children:[r&&Object(K.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(K.jsxs)("div",{className:"journal__entry-body",children:[Object(K.jsx)("p",{className:"journal__entry-title",children:a}),Object(K.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(K.jsxs)("div",{className:"journal__entry-date-box",children:[Object(K.jsx)("span",{children:s.format("dddd")}),Object(K.jsx)("h4",{children:s.format("Do")})]})]})},te=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(K.jsx)("div",{className:"journal__entries ",children:e.map((function(e){return Object(K.jsx)(ee,Object(I.a)({},e),e.id)}))})},ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(K.jsxs)("aside",{className:"journal__sidebar",children:[Object(K.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(K.jsxs)("h3",{className:"mt-5",children:[Object(K.jsx)("i",{className:"far fa-moon"}),Object(K.jsxs)("span",{children:[" ",t]})]}),Object(K.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.auth().signOut();case 2:t(B()),t({type:S});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(K.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(h.a)(p.a.mark((function e(t,n){var a,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,d.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(U(r.id,c)),t(D(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(K.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(K.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(K.jsx)(te,{})]})},ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active;return Object(K.jsxs)("div",{className:"notes__appbar",children:[Object(K.jsx)("span",{children:"28 de agosto 2020"}),Object(K.jsx)("input",{id:"fileSelector",type:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n,a){var c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,f.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){f.a.showLoading()}}),t.next=4,L(e);case 4:r=t.sent,c.url=r,n(z(c)),f.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(K.jsxs)("div",{children:[Object(K.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(K.jsx)("button",{onClick:function(){e(z(t))},className:"btn",children:"Save"})]})]})},ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=J(t),c=Object(s.a)(n,3),r=c[0],i=c[1],u=c[2],l=r.title,j=r.body,b=r.id,m=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==m.current&&(u(t),m.current=t.id)}),[t,u]),Object(a.useEffect)((function(){e(U(r.id,Object(I.a)({},r)))}),[r,e]);return Object(K.jsxs)("div",{className:"notes__main-content",children:[Object(K.jsx)(ae,{}),Object(K.jsxs)("div",{className:"notes__content",children:[Object(K.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:l,onChange:i}),Object(K.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:j,onChange:i}),t.url&&Object(K.jsx)("div",{className:"notes__image",children:Object(K.jsx)("img",{src:t.url,alt:"imagen"})})]}),Object(K.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n,a){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,d.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(R(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(b))},children:"Delete"})]})},re=function(){return Object(K.jsxs)("div",{className:"nothing__main-content",children:[Object(K.jsxs)("p",{children:["Select something",Object(K.jsx)("br",{}),"pr create an entry!"]}),Object(K.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},oe=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(K.jsxs)("div",{className:"journal__main-content  animate__animated animate__fadeIn",children:[Object(K.jsx)(ne,{}),Object(K.jsx)("main",{children:e?Object(K.jsx)(ce,{}):Object(K.jsx)(re,{})})]})},se=n(36),ie=["isAuthenticated","component"],ue=function(e){var t=e.isAuthenticated,n=e.component,a=Object(se.a)(e,ie);return Object(K.jsx)(u.b,Object(I.a)(Object(I.a)({},a),{},{component:function(e){return t?Object(K.jsx)(n,Object(I.a)({},e)):Object(K.jsx)(u.a,{to:"/auth/login"})}}))},le=["isAuthenticated","component"],de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(se.a)(e,le);return Object(K.jsx)(u.b,Object(I.a)(Object(I.a)({},a),{},{component:function(e){return t?Object(K.jsx)(u.a,{to:"/"}):Object(K.jsx)(n,Object(I.a)({},e))}}))},je=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),d=Object(s.a)(r,2),j=d[0],b=d[1],m=Object(o.b)();return Object(a.useEffect)((function(){l.a.auth().onAuthStateChanged((function(e){var t;(null===e||void 0===e?void 0:e.uid)?(m(W(e.uid,e.displayName)),b(!0),m((t=e.uid,function(){var e=Object(h.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:a=e.sent,n(q(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):b(!1),c(!1)}))}),[m,c,b]),n?Object(K.jsx)("h1",{children:"Loading"}):Object(K.jsx)(i.a,{children:Object(K.jsx)("div",{children:Object(K.jsxs)(u.d,{children:[Object(K.jsx)(de,{path:"/auth",component:Y,isAuthenticated:j}),Object(K.jsx)(ue,{exact:!0,path:"/",component:oe,isAuthenticated:j}),Object(K.jsx)(u.a,{to:"/auth/login"})]})})})},be=n(29),pe=n(65),he={loading:!1,msgError:null},me=n(45),fe={notes:[],active:null},Oe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.c,xe=Object(be.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{uid:t.payload.uid,name:t.payload.displayName};case x:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(I.a)(Object(I.a)({},e),{},{msgError:t.payload});case g:return Object(I.a)(Object(I.a)({},e),{},{msgError:null});case _:return Object(I.a)(Object(I.a)({},e),{},{loading:!0});case y:return Object(I.a)(Object(I.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(I.a)(Object(I.a)({},e),{},{active:t.payload});case N:return Object(I.a)(Object(I.a)({},e),{},{notes:[t.payload].concat(Object(me.a)(e.notes))});case k:return Object(I.a)(Object(I.a)({},e),{},{notes:Object(me.a)(t.payload)});case C:return Object(I.a)(Object(I.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case E:return Object(I.a)(Object(I.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case S:return Object(I.a)(Object(I.a)({},e),{},{notes:[],active:null});default:return e}}}),ve=Object(be.d)(xe,Oe(Object(be.a)(pe.a))),ge=function(){return Object(K.jsx)("div",{children:Object(K.jsx)(o.a,{store:ve,children:Object(K.jsx)(je,{})})})};n(168);r.a.render(Object(K.jsx)(ge,{}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.1b435623.chunk.js.map