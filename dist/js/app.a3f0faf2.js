(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,g=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&g.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(g.length)g.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-065e2358":"54a23c0b","chunk-7261f1f4":"a34fcd05"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-065e2358":1,"chunk-7261f1f4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-065e2358":"55a5a97e","chunk-7261f1f4":"92732cc2"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var g=document.getElementsByTagName("style");for(s=0;s<g.length;s++){c=g[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var g=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;g.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",g.name="ChunkLoadError",g.type=r,g.request=a,n[1](g)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/resume-reviewer/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var g=0;g<c.length;g++)t(c[g]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3934:function(e,t,n){"use strict";var r=n("3c89"),a=n.n(r);a.a},"3c89":function(e,t,n){},4018:function(e,t,n){},"42d3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app",dir:e.getTextDirection()}},[n("AppNav"),n("main",[n("router-view")],1),e.language===e.ENGLISH_LANGUAGE?n("footer",[e._m(0),n("p",[n("a",{attrs:{href:"#"},on:{click:function(t){return e.changeLanguage(e.HEBREW_LANGUAGE)}}},[e._v("Hebrew")]),n("a",{staticClass:"withDivider",attrs:{href:"#"},on:{click:function(t){return e.changeLanguage(e.ENGLISH_LANGUAGE)}}},[e._v("English")])])]):e._e(),e.language===e.HEBREW_LANGUAGE?n("footer",[e._m(1),n("p",[n("a",{staticClass:"withDivider",attrs:{href:"#"},on:{click:function(t){return e.changeLanguage(e.ENGLISH_LANGUAGE)}}},[e._v("אנגלית ")]),n("a",{attrs:{href:"#"},on:{click:function(t){return e.changeLanguage(e.HEBREW_LANGUAGE)}}},[e._v(" עברית")])])]):e._e()],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Copyright Ⓒ 2019 "),n("a",{attrs:{href:"mailto:resume.reviewer.il@gmail.com"}},[e._v("resume-reviewer")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Copyright Ⓒ 2019 "),n("a",{attrs:{href:"mailto:resume.reviewer.il@gmail.com"}},[e._v("resume-reviewer")])])}],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{attrs:{dir:"ltr"}},[r("img",{attrs:{src:n("cf05"),id:"logo"}}),e.language===e.ENGLISH_LANGUAGE?r("ul",{attrs:{id:"navigation"}},[r("li",[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("li",[r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("li",[r("router-link",{attrs:{to:"/file"}},[e._v("Upload Resume")])],1)]):e._e(),e.language===e.HEBREW_LANGUAGE?r("ul",{attrs:{id:"navigation"}},[r("li",[r("router-link",{attrs:{to:"/"}},[e._v("דף בית")])],1),r("li",[r("router-link",{attrs:{to:"/about"}},[e._v("אודות")])],1),r("li",[r("router-link",{attrs:{to:"/file"}},[e._v("העלאת קורות חיים")])],1)]):e._e(),e.isUserLoggedIn?r("div",{attrs:{id:"logut"}},[r("button",{attrs:{id:"logout_btn"},on:{click:e.logoutUser}},[e._v(e._s(e.language===e.HEBREW_LANGUAGE?"התנתק":"Logout"))])]):r("div",{attrs:{id:"login"}},[r("form",{attrs:{action:"",method:""},on:{submit:e.checkForm}},[r("i",{staticClass:"fas fa-user"}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"username",type:"email",value:"",placeholder:e.language===e.HEBREW_LANGUAGE?"אימייל":"Email",pattern:"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("input",{attrs:{type:"submit",id:"login_btn"},domProps:{value:e.language===e.HEBREW_LANGUAGE?"התחברות":"Log In"},on:{click:e.login}}),e._v(" "),r("br"),r("i",{staticClass:"fas fa-key"}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",value:"",placeholder:e.language===e.HEBREW_LANGUAGE?"סיסמא":"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("input",{attrs:{type:"submit",id:"signin_btn"},domProps:{value:e.language===e.HEBREW_LANGUAGE?"הרשמה":"Sign Up"},on:{click:e.signin}})])])])},s=[],u=n("8aa5"),c=n.n(u),l=n("5fb0"),g={name:"AppNav",created:function(){this.HEBREW_LANGUAGE=l["a"].HEBREW_LANGUAGE,this.ENGLISH_LANGUAGE=l["a"].ENGLISH_LANGUAGE},data:function(){return{username:null,password:null}},methods:{logoutUser:function(){var e=this;c.a.auth().signOut().then((function(){e.$store.dispatch("logoutUser"),e.username="",e.password=""}))},checkForm:function(e){var t=document.getElementById("username"),n=document.getElementById("password");if(t.classList.remove("missing_input"),n.classList.remove("missing_input"),this.username&&this.password)return!0;this.username||t.classList.add("missing_input"),this.password||n.classList.add("missing_input"),e.preventDefault()},signin:function(){var e=this;c.a.auth().createUserWithEmailAndPassword(this.username,this.password).then((function(t){e.$store.dispatch("loginUser",{currentUser:t})}),(function(e){console.log("Error when creating user "+e.message)}))},login:function(){var e=this;c.a.auth().signInWithEmailAndPassword(this.username,this.password).then((function(t){e.$store.dispatch("loginUser",{currentUser:t})}),(function(e){console.log("Error when user logged in "+e.message)}))}},computed:{isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},language:function(){return this.$store.getters.getLanguage}}},p=g,f=(n("bc84"),n("2877")),d=Object(f["a"])(p,i,s,!1,null,null,null),m=d.exports,h={name:"app",created:function(){this.HEBREW_LANGUAGE=l["a"].HEBREW_LANGUAGE,this.ENGLISH_LANGUAGE=l["a"].ENGLISH_LANGUAGE},components:{AppNav:m},methods:{changeLanguage:function(e){this.$store.dispatch("setLanguage",{language:e})},getTextDirection:function(){return this.language===l["a"].HEBREW_LANGUAGE?l["a"].TEXT_DIRECTION_RTL:""}},computed:{language:function(){return this.$store.getters.getLanguage}}},v=h,_=(n("6250"),Object(f["a"])(v,a,o,!1,null,"6d855ad9",null)),E=_.exports,L=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{id:"interview",src:n("af6b"),alt:"interview",title:"Photo by Rachel Danner on Unsplash"}}),"English"===e.language?r("div",[e._m(0),r("br"),r("p",[e._v("We do the following:")])]):e._e(),"Hebrew"===e.language?r("div",[e._m(1),r("br"),r("p",[e._v("השירותים שאנו נותנים הם:")])]):e._e(),"English"===e.language?r("div",[r("ol",{attrs:{id:"points"}},e._l(e.points_english,(function(t){return r("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]):e._e(),"Hebrew"===e.language?r("div",[r("ol",{attrs:{id:"points"}},e._l(e.points_hebrew,(function(t){return r("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]):e._e()])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Welcome To Resume Reviewer! "),n("br"),e._v(" Your one-stop-shop for everything that you need to prepare yourself for a job interview"),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("ברוכים הבאים ל-Resume Reviewer!"),n("br"),e._v(" המקום שבו יש את כל מה שתצטרכו כדי להכין את עצמכם לראיון עבודה"),n("br")])}],A={name:"home",data:function(){return{points_english:["Reviewing Your Resume","Pre Interview Training","Behavioral Questions","Culture Fit Preperation","Whiteboard Practice","Pair Programming Exercises"],points_hebrew:["ביקורת של קורות חיים","אימון לפני ראיון עבודה","שאלות התנהגותיות","הכנה להתאמת תרבות ארגונית","תרגול שאלות על לוח מחיק","אימון עבודה משותפת על קוד"]}},components:{},computed:{language:function(){return this.$store.getters.getLanguage}}},G=A,U=(n("3934"),Object(f["a"])(G,b,w,!1,null,"8b37c3e4",null)),N=U.exports;r["a"].use(L["a"]);var I=[{path:"*",redirect:"home"},{path:"/",name:"home",component:N},{path:"/about",name:"about",component:function(){return n.e("chunk-065e2358").then(n.bind(null,"f820"))}},{path:"/file",name:"fileUpload",component:function(){return n.e("chunk-7261f1f4").then(n.bind(null,"e4f6"))}}],y=new L["a"]({routes:I}),k=y,R=n("2f62");r["a"].use(R["a"]);var H=new R["a"].Store({state:{userLoggedIn:!1,language:"Hebrew"},getters:{isUserLoggedIn:function(e){return e.userLoggedIn},getLanguage:function(e){return e.language}},mutations:{userLoggedOut:function(e){e.userLoggedIn=!1},setLanguage:function(e,t){e.language=t.language},userLoggedIn:function(e){e.userLoggedIn=!0}},actions:{logoutUser:function(e,t){var n=e.commit;n("userLoggedOut",t)},setLanguage:function(e,t){var n=e.commit;n("setLanguage",t)},loginUser:function(e,t){var n=e.commit;n("userLoggedIn",t)}}});n("15f5"),n("7051");r["a"].config.productionTip=!1,r["a"].use(R["a"]);var S="",P={apiKey:"AIzaSyAww8cDiRStSak1hInakmqf_GwU6wUNjug",authDomain:"resume-reviewer.firebaseapp.com",databaseURL:"https://resume-reviewer.firebaseio.com",projectId:"resume-reviewer",storageBucket:"resume-reviewer.appspot.com",messagingSenderId:"265448217636",appId:"1:265448217636:web:4460a7505bff3ab9be8cb1"},O=P;c.a.initializeApp(O),c.a.auth().onAuthStateChanged((function(e){S||(S=new r["a"]({router:k,render:function(e){return e(E)},store:H}).$mount("#app")),e&&S.$store.dispatch("loginUser",{currentUser:e})}))},"5fb0":function(e,t,n){"use strict";t["a"]={HEBREW_LANGUAGE:"Hebrew",ENGLISH_LANGUAGE:"English",TEXT_DIRECTION_RTL:"rtl",errors:{USER_NOT_LOGGED_IN:"User Not Logged In",INVALID_FILE_UPLOAD:"Invalid File"},PDF_FILE_MIME_TYPE:"application/pdf",MSWORD_DOC_FILE_MIME_TYPE:"application/msword",MSWORD_DOCX_FILE_MIME_TYPE:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",MAXIMUM_FILE_SIZE_IN_BYTES:5e6}},6250:function(e,t,n){"use strict";var r=n("4018"),a=n.n(r);a.a},af6b:function(e,t,n){e.exports=n.p+"img/interview.479af208.jpg"},bc84:function(e,t,n){"use strict";var r=n("42d3"),a=n.n(r);a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.f1c8cb99.png"}});
//# sourceMappingURL=app.a3f0faf2.js.map