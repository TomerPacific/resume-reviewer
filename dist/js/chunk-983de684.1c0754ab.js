(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-983de684"],{"5a15":function(e,a,r){},b0c0:function(e,a,r){var o=r("83ab"),i=r("9bf2").f,t=Function.prototype,s=t.toString,n=/^\s*function ([^ (]*)/,l="name";!o||l in t||i(t,l,{configurable:!0,get:function(){try{return s.call(this).match(n)[1]}catch(e){return""}}})},ceee:function(e,a,r){"use strict";var o=r("5a15"),i=r.n(o);i.a},e4f6:function(e,a,r){"use strict";r.r(a);var o=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{attrs:{id:"container"}},["English"===e.language?r("h1",[e._v("Upload Your Resume")]):e._e(),"Hebrew"===e.language?r("h1",[e._v("העלאת קורות חיים")]):e._e(),r("div",{attrs:{id:"explanation"}},["English"===e.language?r("p",[e._v("In order to start the reviewing process, it is needed to submit your resume."),r("br"),e._v(" We accept "),r("strong",[e._v("PDF")]),e._v(" files or Word documents ("),r("strong",[e._v(".doc, .docx")]),e._v("). ")]):e._e(),"Hebrew"===e.language?r("p",[e._v("כדי להתחיל את תהליך הביקורת, אנא הגישו את קורות החיים שלכם"),r("br"),e._v(" אנו מקבלים קבצים מסוג "),r("strong",[e._v("PDF")]),e._v(" או מסמכי וורד ("),r("strong",[e._v(".doc, .docx")]),e._v("). ")]):e._e()]),r("div",{staticClass:"form-group"},["English"===e.language?r("label",{attrs:{for:"file"}},[e._v("Choose File:")]):e._e(),"Hebrew"===e.language?r("label",{attrs:{for:"file"}},[e._v("בחר קובץ:")]):e._e(),r("input",{attrs:{type:"file",id:"file"},on:{change:e.uploadFile}})]),e.isUploading?r("p",[e._v("Progress: "+e._s(e.uploadValue.toFixed()+"%"))]):e._e(),e.isUploading||100!==e.uploadValue?e._e():r("p",[r("i",{staticClass:"fas fa-check fa-3x success"})]),e.hasError?r("p",{key:e.hasError},[r("i",{staticClass:"fas fa-times fa-3x error"})]):e._e(),e.hasError?r("p",{attrs:{id:"errorParagraph"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),100===e.uploadValue&&"English"===e.language?r("p",{attrs:{id:"afterSubmission"}},[e._v(" Thank you for your submission."),r("br"),e._v(" We will contact you within 2-3 business days ")]):e._e(),100===e.uploadValue&&"Hebrew"===e.language?r("p",{attrs:{id:"afterSubmission"}},[e._v(" תודה שהגשתם את קורות החיים שלכם."),r("br"),e._v(" ניצור אתכם קשר בימים הקרובים ")]):e._e()])},i=[],t=(r("b0c0"),r("8aa5")),s=r.n(t),n="application/pdf",l="application/msword",u="application/vnd.openxmlformats-officedocument.wordprocessingml.document",d=5e6,g={name:"FileUpload",data:function(){return{fileToUpload:null,isUploading:!1,uploadValue:0,hasError:!1,errorMessage:""}},methods:{isFileValid:function(){var e=this.fileToUpload&&this.fileToUpload.type;return(e===n||e===l||e===u)&&this.fileToUpload.size<d},beginUploadingFile:function(){var e=this;this.isUploading=!0;var a=s.a.storage().ref("".concat(this.fileToUpload.name)).put(this.fileToUpload);a.on("state_changed",(function(a){e.uploadValue=a.bytesTransferred/a.totalBytes*100}),(function(a){switch(a.code){case"storage/unauthorized":e.errorMessage="You have uploaded a wrong file type.";break;default:e.errorMessage="An error has occurred while uploading the file. Please try again."}e.isUploading=!1,e.hasError=!0}),(function(){e.uploadValue=100,e.isUploading=!1}))},isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},uploadFile:function(e){this.hasError=!1,this.uploadValue=0,this.fileToUpload=e.target.files[0],this.isUserLoggedIn()?this.isFileValid()?this.beginUploadingFile():(this.hasError=!0,this.errorMessage="You have uploaded a wrong file type."):(this.hasError=!0,this.errorMessage="Please login/register to upload your resume")}},computed:{language:function(){return this.$store.getters.getLanguage}}},c=g,p=(r("ceee"),r("2877")),f=Object(p["a"])(c,o,i,!1,null,"6feda0ce",null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-983de684.1c0754ab.js.map