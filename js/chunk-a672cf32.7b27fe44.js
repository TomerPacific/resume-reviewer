(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a672cf32"],{"5a71":function(e,a,r){"use strict";var t=r("674f"),o=r.n(t);o.a},"674f":function(e,a,r){},b0c0:function(e,a,r){var t=r("83ab"),o=r("9bf2").f,i=Function.prototype,s=i.toString,n=/^\s*function ([^ (]*)/,l="name";t&&!(l in i)&&o(i,l,{configurable:!0,get:function(){try{return s.call(this).match(n)[1]}catch(e){return""}}})},e4f6:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{attrs:{id:"container"}},[e.language===e.ENGLISH_LANGUAGE?r("h1",[e._v("Upload Your Resume")]):e._e(),e.language===e.HEBREW_LANGUAGE?r("h1",[e._v("העלאת קורות חיים")]):e._e(),r("div",{attrs:{id:"explanation"}},[e.language===e.ENGLISH_LANGUAGE?r("p",{attrs:{dir:"ltr"}},[e._v("In order to start the reviewing process, it is needed to submit your resume."),r("br"),e._v(" We accept "),r("strong",[e._v("PDF")]),e._v(" files or Word documents ("),r("strong",[e._v(".doc, .docx")]),e._v("). ")]):e._e(),e.language===e.HEBREW_LANGUAGE?r("p",[e._v("כדי להתחיל את תהליך הביקורת, אנא הגישו את קורות החיים שלכם"),r("br"),e._v(" אנו מקבלים קבצים מסוג "),r("strong",[e._v("PDF")]),e._v(" או מסמכי וורד ("),r("strong",[e._v(".doc, .docx")]),e._v("). ")]):e._e()]),r("div",{staticClass:"form-group"},[e.language===e.ENGLISH_LANGUAGE?r("p",[r("strong",[e._v("You will need to Login/Signup in order to upload your resume")])]):e._e(),e.language===e.HEBREW_LANGUAGE?r("p",[r("strong",[e._v("אתם צריכים להתחבר/להירשם כדי להעלות קובץ")])]):e._e(),r("br"),e.language===e.ENGLISH_LANGUAGE?r("label",{attrs:{for:"file"}},[e._v("Choose File:")]):e._e(),e.language===e.HEBREW_LANGUAGE?r("label",{attrs:{for:"file"}},[e._v("בחר קובץ:")]):e._e(),r("input",{attrs:{type:"file",id:"file"},on:{change:e.uploadFile}})]),e.isUploading?r("p",[e._v("Progress: "+e._s(e.uploadValue.toFixed()+"%"))]):e._e(),e.isUploading||100!==e.uploadValue?e._e():r("p",[r("i",{staticClass:"fas fa-check fa-3x success"})]),e.hasError?r("p",{key:e.hasError},[r("i",{staticClass:"fas fa-times fa-3x error"})]):e._e(),e.hasError?r("p",{attrs:{id:"errorParagraph"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),100===e.uploadValue&&e.language===e.ENGLISH_LANGUAGE?r("p",{attrs:{id:"afterSubmission"}},[e._v(" Thank you for your submission."),r("br"),e._v(" We will contact you within 2-3 business days ")]):e._e(),100===e.uploadValue&&e.language===e.HEBREW_LANGUAGE?r("p",{attrs:{id:"afterSubmission"}},[e._v(" תודה שהגשתם את קורות החיים שלכם."),r("br"),e._v(" ניצור אתכם קשר בימים הקרובים ")]):e._e()])},o=[],i=(r("b0c0"),r("8aa5")),s=r.n(i),n=r("5fb0"),l=r("025e"),u={name:"FileUpload",created:function(){this.HEBREW_LANGUAGE=n["a"].HEBREW_LANGUAGE,this.ENGLISH_LANGUAGE=n["a"].ENGLISH_LANGUAGE},data:function(){return{fileToUpload:null,isUploading:!1,uploadValue:0,hasError:!1,errorMessage:""}},methods:{isFileValid:function(){var e=this.fileToUpload&&this.fileToUpload.type;return(e===n["a"].PDF_FILE_MIME_TYPE||e===n["a"].MSWORD_DOC_FILE_MIME_TYPE||e===n["a"].MSWORD_DOCX_FILE_MIME_TYPE)&&this.fileToUpload.size<n["a"].MAXIMUM_FILE_SIZE_IN_BYTES},beginUploadingFile:function(){var e=this;this.isUploading=!0;var a=s.a.storage().ref("".concat(this.fileToUpload.name)).put(this.fileToUpload);a.on("state_changed",(function(a){e.uploadValue=a.bytesTransferred/a.totalBytes*100}),(function(a){e.errorMessage=l["a"].convertFirebaseErrorIntoErrorMessage(a,e.language),e.isUploading=!1,e.hasError=!0}),(function(){e.uploadValue=100,e.isUploading=!1,e.$analytics.logEvent("UserAction","FileUpload","FileUpload",3)}))},isUserLoggedIn:function(){return s.a.auth().currentUser&&this.$store.getters.isUserLoggedIn},uploadFile:function(e){this.hasError=!1,this.uploadValue=0,this.fileToUpload=e.target.files[0],this.isUserLoggedIn()?this.isFileValid()?this.beginUploadingFile():(this.hasError=!0,this.errorMessage=l["a"].convertFileUploadingError(n["a"].errors.INVALID_FILE_UPLOAD,this.language)):(this.hasError=!0,this.errorMessage=l["a"].convertFileUploadingError(n["a"].errors.USER_NOT_LOGGED_IN,this.language))}},computed:{language:function(){return this.$store.getters.getLanguage}}},g=u,_=(r("5a71"),r("2877")),d=Object(_["a"])(g,t,o,!1,null,"2ba58884",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-a672cf32.7b27fe44.js.map