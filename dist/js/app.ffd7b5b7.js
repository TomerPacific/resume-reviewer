(function(){"use strict";var e={739:function(e,t){t.Z={HEBREW_LANGUAGE:"Hebrew",ENGLISH_LANGUAGE:"English",TEXT_DIRECTION_RTL:"rtl",errors:{USER_NOT_LOGGED_IN:"User Not Logged In",INVALID_FILE_UPLOAD:"Invalid File",INVALID_PASSWORD:"Invalid Password",INVALID_EMAIL:"Invalid Email"},PDF_FILE_MIME_TYPE:"application/pdf",MSWORD_DOC_FILE_MIME_TYPE:"application/msword",MSWORD_DOCX_FILE_MIME_TYPE:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",MAXIMUM_FILE_SIZE_IN_BYTES:5e6,MINIMUM_PASSWORD_LENGTH:6}},635:function(e,t,n){var r=n(144),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app",dir:e.getTextDirection()}},[t("AppNav"),t("main",[t("router-view")],1),t("b-navbar",{attrs:{fixed:"bottom",dir:"ltr"}},[t("b-navbar-nav",[t("b-nav-text",[e._v("Copyright Ⓒ 2019")]),t("b-nav-item",{attrs:{href:"mailto:resume.reviewer.il@gmail.com"}},[e._v("resume-reviewer")]),t("b-nav-item",{staticClass:"withDivider",on:{click:function(t){return e.changeLanguage(e.HEBREW_LANGUAGE)}}},[e._v(e._s(e.language===e.HEBREW_LANGUAGE?"עברית":"Hebrew"))]),t("b-nav-item",{staticClass:"withDivider",on:{click:function(t){return e.changeLanguage(e.ENGLISH_LANGUAGE)}}},[e._v(e._s(e.language===e.HEBREW_LANGUAGE?"אנגלית":"English"))])],1)],1)],1)},i=[],o=function(){var e=this,t=e._self._c;return t("header",{attrs:{dir:"ltr"}},[t("b-navbar",{attrs:{toggleable:"lg"}},[t("b-navbar-brand",[t("img",{attrs:{src:n(949),id:"logo"}})]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:"/"}},[e._v(e._s(e.language===e.HEBREW_LANGUAGE?"דף בית":"Home"))]),t("b-nav-item",{attrs:{to:"/about"}},[e._v(e._s(e.language===e.HEBREW_LANGUAGE?"אודות":"About"))]),t("b-nav-item",{attrs:{to:"/file"}},[e._v(e._s(e.language===e.HEBREW_LANGUAGE?"העלאת קורות חיים":"Upload Resume"))])],1),e.isUserLoggedIn?t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-form",{attrs:{action:"",method:""}},[t("b-button",{staticClass:"my-2 my-sm-0",attrs:{variant:"outline-danger",id:"logout_btn",type:"submit",value:e.language===e.HEBREW_LANGUAGE?"התנתקות":"Logout"},on:{click:e.logoutUser}},[e._v(e._s(e.language===e.HEBREW_LANGUAGE?"התנתקות":"Logout")+" ")])],1)],1):t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-form",{attrs:{action:"",method:""}},[t("b-form-input",{staticClass:"mr-sm-2",attrs:{id:"username",placeholder:e.language===e.HEBREW_LANGUAGE?"אימייל":"Email",type:"email"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),t("b-form-input",{staticClass:"mr-sm-2",attrs:{id:"password",placeholder:e.language===e.HEBREW_LANGUAGE?"סיסמא":"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("b-button",{staticClass:"my-2 my-sm-0",attrs:{variant:"outline-primary",type:"submit",value:e.language===e.HEBREW_LANGUAGE?"הרשמה":"Sign Up",id:"signin_btn"},on:{click:e.signin}},[e._v(e._s(e.language===e.HEBREW_LANGUAGE?"הרשמה":"Sign Up"))]),t("b-button",{staticClass:"my-2 my-sm-0",attrs:{variant:"outline-success",type:"submit",value:e.language===e.HEBREW_LANGUAGE?"התחברות":"Log In",id:"login_btn"},on:{click:e.login}},[e._v(e._s(e.language===e.HEBREW_LANGUAGE?"התחברות":"Log In")+" ")])],1)],1)],1)],1)],1)},s=[],u=n(726),l=n(739),c=n(661),d={name:"AppNav",created(){this.HEBREW_LANGUAGE=l.Z.HEBREW_LANGUAGE,this.ENGLISH_LANGUAGE=l.Z.ENGLISH_LANGUAGE},mounted:function(){this.userNameInput=document.getElementById("username"),this.passwordInput=document.getElementById("password")},data:function(){return{username:null,password:null}},methods:{logoutUser(){let e=this;u.Z.auth().signOut().then((function(){e.$store.dispatch("logoutUser"),e.username=null,e.password=null}))},signin:function(){if(!c.Z.areInputFieldsValid())return;c.Z.removeClassFromElement(this.userNameInput,"invalid_input"),c.Z.removeClassFromElement(this.passwordInput,"invalid_input");let e=this;u.Z.auth().createUserWithEmailAndPassword(this.username,this.password).then((function(t){e.$store.dispatch("loginUser",{currentUser:t}),e.$analytics.logEvent("UserAction","Signin","Signin",1)}),(function(t){alert(t.message),e.resetFormFields()}))},login:function(){if(!c.Z.areInputFieldsValid())return;c.Z.removeClassFromElement(this.userNameInput,"invalid_input"),c.Z.removeClassFromElement(this.passwordInput,"invalid_input");let e=this;u.Z.auth().signInWithEmailAndPassword(this.username,this.password).then((function(t){e.$store.dispatch("loginUser",{currentUser:t}),e.$analytics.logEvent("UserAction","Login","Login",2)}),(function(t){alert(c.Z.convertLoginError(t,e.language)),e.resetFormFields()}))},resetFormFields:function(){this.userNameInput.value="",this.passwordInput.value="",this.username=null,this.password=null}},computed:{isUserLoggedIn(){return this.$store.getters.isUserLoggedIn},language(){return this.$store.getters.getLanguage}}},g=d,m=n(1),p=(0,m.Z)(g,o,s,!1,null,null,null),f=p.exports,v={name:"app",created(){this.HEBREW_LANGUAGE=l.Z.HEBREW_LANGUAGE,this.ENGLISH_LANGUAGE=l.Z.ENGLISH_LANGUAGE},components:{AppNav:f},methods:{changeLanguage:function(e){this.$store.dispatch("setLanguage",{language:e})},getTextDirection:function(){return this.language===l.Z.HEBREW_LANGUAGE?l.Z.TEXT_DIRECTION_RTL:""}},computed:{language(){return this.$store.getters.getLanguage}}},E=v,h=(0,m.Z)(E,a,i,!1,null,"76a39402",null),_=h.exports,L=(n(929),n(690),n(345)),b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("img",{attrs:{id:"interview",src:n(670),alt:"interview",title:"Photo by Rachel Danner on Unsplash"}}),"English"===e.language?t("div",[e._m(0),t("p",[e._v("We do the following:")])]):e._e(),"Hebrew"===e.language?t("div",[e._m(1),t("p",[e._v("השירותים שאנו נותנים הם:")])]):e._e(),"English"===e.language?t("div",[t("ol",{attrs:{id:"points"}},e._l(e.points_english,(function(n){return t("li",{key:n},[e._v(" "+e._s(n)+" ")])})),0)]):e._e(),"Hebrew"===e.language?t("div",[t("ol",{attrs:{id:"points"}},e._l(e.points_hebrew,(function(n){return t("li",{key:n},[e._v(" "+e._s(n)+" ")])})),0)]):e._e()])},A=[function(){var e=this,t=e._self._c;return t("p",[e._v("Welcome To Resume Reviewer! "),t("br"),e._v(" Your one-stop-shop for everything that you need to prepare yourself for a job interview"),t("br")])},function(){var e=this,t=e._self._c;return t("p",[e._v("ברוכים הבאים ל-Resume Reviewer!"),t("br"),e._v(" המקום שבו יש את כל מה שתצטרכו כדי להכין את עצמכם לראיון עבודה"),t("br")])}],G={name:"home",data:function(){return{points_english:["Reviewing Your Resume","Pre Interview Training","Behavioral Questions","Culture Fit Preperation","Whiteboard Practice","Pair Programming Exercises"],points_hebrew:["ביקורת של קורות חיים","אימון לפני ראיון עבודה","שאלות התנהגותיות","הכנה להתאמת תרבות ארגונית","תרגול שאלות על לוח מחיק","אימון עבודה משותפת על קוד"]}},components:{},computed:{language(){return this.$store.getters.getLanguage}}},I=G,N=(0,m.Z)(I,b,A,!1,null,"2ec23d2e",null),w=N.exports;r["default"].use(L.ZP);const U=[{path:"*",redirect:"home"},{path:"/",name:"home",component:w},{path:"/about",name:"about",component:()=>n.e(905).then(n.bind(n,905))},{path:"/file",name:"fileUpload",component:()=>n.e(65).then(n.bind(n,65))}],y=new L.ZP({routes:U});var S=y,Z=n(629);r["default"].use(Z.ZP);const H=new Z.ZP.Store({state:{userLoggedIn:!1,language:"Hebrew"},getters:{isUserLoggedIn(e){return e.userLoggedIn},getLanguage(e){return e.language}},mutations:{userLoggedOut(e){e.userLoggedIn=!1},setLanguage(e,t){e.language=t.language},userLoggedIn(e){e.userLoggedIn=!0}},actions:{logoutUser({commit:e},t){e("userLoggedOut",t)},setLanguage({commit:e},t){e("setLanguage",t)},loginUser({commit:e},t){e("userLoggedIn",t)}}});n(682);var R=n(970);n(24);r["default"].config.productionTip=!1,r["default"].use(Z.ZP),r["default"].use(R.ZPm);let P="";const O={apiKey:"AIzaSyAww8cDiRStSak1hInakmqf_GwU6wUNjug",authDomain:"resume-reviewer.firebaseapp.com",databaseURL:"https://resume-reviewer.firebaseio.com",projectId:"resume-reviewer",storageBucket:"resume-reviewer.appspot.com",messagingSenderId:"265448217636",appId:"1:265448217636:web:4460a7505bff3ab9be8cb1",measurementId:"G-JST0BLSF1R"},C=O;u.Z.initializeApp(C),u.Z.analytics(),r["default"].prototype.$analytics=u.Z.analytics(),u.Z.auth().onAuthStateChanged((e=>{P||(P=new r["default"]({router:S,render:e=>e(_),store:H}).$mount("#app")),e&&P.$store.dispatch("loginUser",{currentUser:e})}))},661:function(e,t,n){var r=n(739);t.Z={convertFirebaseErrorIntoErrorMessage(e,t){let n="";switch(e.code){case"storage/unauthorized":n=t===r.Z.ENGLISH_LANGUAGE?"You have uploaded a wrong file type.":"העלתם קובץ לא מתאים";break;default:n=t===r.Z.ENGLISH_LANGUAGE?"An error has occurred while uploading the file. Please try again":"אירעה שגיאה בעת העלאת הקובץ. אנא, נסו שוב"}return n},convertFileUploadingError(e,t){let n="";return e===r.Z.errors.USER_NOT_LOGGED_IN?n=t===r.Z.ENGLISH_LANGUAGE?"Please login/register to upload your resume":"אנא הרשמו כדי להעלות את קובץ קורות החיים":e===r.Z.errors.INVALID_FILE_UPLOAD&&(n=t===r.Z.ENGLISH_LANGUAGE?"You have uploaded a wrong file type":"ניסיתם להעלות קובץ מטיפוס לא נתמך"),n},convertLoginError(e,t){let n="";return"auth/user-not-found"===e.code?n=t===r.Z.ENGLISH_LANGUAGE?"User not found":"משתמש לא נמצא":"auth/invalid-email"===e.code?n=t===r.Z.ENGLISH_LANGUAGE?"Invalid email":"מייל לא תקין":"auth/email-already-exists"===e.code?n=t===r.Z.ENGLISH_LANGUAGE?"Email already exists":"מייל זה כבר קיים":"auth/invalid-password"===e.code?n=t===r.Z.ENGLISH_LANGUAGE?"Invalid password":"סיסמא לא תקינה":"auth/invalid-argument"===e.code?n=t===r.Z.ENGLISH_LANGUAGE?"Something that was sent was invalid":"מה שנשלח לא היה תקין":"auth/wrong-password"===e.code&&(n=t===r.Z.ENGLISH_LANGUAGE?e.message:"הסיסמה לא תקינה/למשתמש אין סיסמה"),n},areInputFieldsValid(){let e=document.getElementById("username"),t=document.getElementById("password");return this.validateEmail(e.value)?!!this.validatePassword(t.value)||(alert(r.Z.errors.INVALID_PASSWORD),e.classList.contains("invalid-input")&&e.classList.remove("invalid_input"),t.classList.contains("invalid-input")||t.classList.add("invalid_input"),!1):(alert(r.Z.errors.INVALID_EMAIL),e.classList.contains("invalid-input")||e.classList.add("invalid_input"),!1)},validatePassword:function(e){return""!==e&&void 0!==e&&null!==e&&e.length>r.Z.MINIMUM_PASSWORD_LENGTH},validateEmail:function(e){let t=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return t.exec(e)},removeClassFromElement:function(e,t){e.classList.contains(t)&&e.classList.remove(t)}}},670:function(e,t,n){e.exports=n.p+"img/interview.8f40667a.jpg"},949:function(e,t,n){e.exports=n.p+"img/logo.382a1998.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],i=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<o&&(o=i));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,a,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{65:"e23a88fa",905:"fe96606d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{65:"21a1f7de",905:"4b5b930c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-firebase:";n.l=function(r,a,i,o){if(e[r])e[r].push(a);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[a];var g=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/resume-reviewer/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=s,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=o,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){a=o[r],i=a.getAttribute("data-href");if(i===e||i===t)return a}},r=function(r){return new Promise((function(a,i){var o=n.miniCssF(r),s=n.p+o;if(t(o,s))return a();e(r,s,null,a,i)}))},a={143:0};n.f.miniCss=function(e,t){var n={65:1,905:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=i);var o=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,a[1](s)}};n.l(o,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],s=r[1],u=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(t&&t(r);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkvue_firebase"]=self["webpackChunkvue_firebase"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(635)}));r=n.O(r)})();
//# sourceMappingURL=app.ffd7b5b7.js.map