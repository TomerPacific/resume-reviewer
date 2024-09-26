"use strict";(self["webpackChunkvue_firebase"]=self["webpackChunkvue_firebase"]||[]).push([[65],{65:function(e,r,s){s.r(r),s.d(r,{default:function(){return d}});var a=function(){var e=this,r=e._self._c;return r("div",{attrs:{id:"container"}},[e.language===e.ENGLISH_LANGUAGE?r("h1",[e._v("Upload Your Resume")]):e._e(),e.language===e.HEBREW_LANGUAGE?r("h1",[e._v("העלאת קורות חיים")]):e._e(),r("div",{attrs:{id:"explanation"}},[e.language===e.ENGLISH_LANGUAGE?r("p",{attrs:{dir:"ltr"}},[e._v("In order to start the reviewing process, it is needed to submit your resume."),r("br"),e._v(" We accept "),r("strong",[e._v("PDF")]),e._v(" files or Word documents ("),r("strong",[e._v(".doc, .docx")]),e._v("). ")]):e._e(),e.language===e.HEBREW_LANGUAGE?r("p",[e._v("כדי להתחיל את תהליך הביקורת, אנא הגישו את קורות החיים שלכם"),r("br"),e._v(" אנו מקבלים קבצים מסוג "),r("strong",[e._v("PDF")]),e._v(" או מסמכי וורד ("),r("strong",[e._v(".doc, .docx")]),e._v("). ")]):e._e()]),r("div",{staticClass:"form-group"},[e.language===e.ENGLISH_LANGUAGE?r("p",[r("strong",[e._v("You will need to Login/Signup in order to upload your resume")])]):e._e(),e.language===e.HEBREW_LANGUAGE?r("p",[r("strong",[e._v("אתם צריכים להתחבר/להירשם כדי להעלות קובץ")])]):e._e(),r("br"),e.language===e.ENGLISH_LANGUAGE?r("label",{attrs:{for:"file"}},[e._v("Choose File:")]):e._e(),e.language===e.HEBREW_LANGUAGE?r("label",{attrs:{for:"file"}},[e._v("בחר קובץ:")]):e._e(),r("input",{attrs:{type:"file",id:"file"},on:{change:e.uploadFile}})]),e.isUploading?r("p",[e._v("Progress: "+e._s(e.uploadValue.toFixed()+"%"))]):e._e(),e.isUploading||100!==e.uploadValue?e._e():r("p",[r("i",{staticClass:"fas fa-check fa-3x success"})]),e.hasError?r("p",{key:e.hasError},[r("i",{staticClass:"fas fa-times fa-3x error"})]):e._e(),e.hasError?r("p",{attrs:{id:"errorParagraph"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),100===e.uploadValue&&e.language===e.ENGLISH_LANGUAGE?r("p",{attrs:{id:"afterSubmission"}},[e._v(" Thank you for your submission."),r("br"),e._v(" We will contact you within 2-3 business days ")]):e._e(),100===e.uploadValue&&e.language===e.HEBREW_LANGUAGE?r("p",{attrs:{id:"afterSubmission"}},[e._v(" תודה שהגשתם את קורות החיים שלכם."),r("br"),e._v(" ניצור אתכם קשר בימים הקרובים ")]):e._e()])},i=[],t=s(726),o=s(739),l=s(661),n={name:"FileUpload",created(){this.HEBREW_LANGUAGE=o.Z.HEBREW_LANGUAGE,this.ENGLISH_LANGUAGE=o.Z.ENGLISH_LANGUAGE},data:function(){return{fileToUpload:null,isUploading:!1,uploadValue:0,hasError:!1,errorMessage:""}},methods:{isFileValid:function(){let e=this.fileToUpload&&this.fileToUpload.type;return(e===o.Z.PDF_FILE_MIME_TYPE||e===o.Z.MSWORD_DOC_FILE_MIME_TYPE||e===o.Z.MSWORD_DOCX_FILE_MIME_TYPE)&&this.fileToUpload.size<o.Z.MAXIMUM_FILE_SIZE_IN_BYTES},beginUploadingFile:function(){this.isUploading=!0;const e=t.Z.storage().ref(`${this.fileToUpload.name}`).put(this.fileToUpload);e.on("state_changed",(e=>{this.uploadValue=e.bytesTransferred/e.totalBytes*100}),(e=>{this.errorMessage=l.Z.convertFirebaseErrorIntoErrorMessage(e,this.language),this.isUploading=!1,this.hasError=!0}),(()=>{this.uploadValue=100,this.isUploading=!1,this.$analytics.logEvent("UserAction","FileUpload","FileUpload",3)}))},isUserLoggedIn:function(){return t.Z.auth().currentUser&&this.$store.getters.isUserLoggedIn},uploadFile:function(e){this.hasError=!1,this.uploadValue=0,this.fileToUpload=e.target.files[0],this.isUserLoggedIn()?this.isFileValid()?this.beginUploadingFile():(this.hasError=!0,this.errorMessage=l.Z.convertFileUploadingError(o.Z.errors.INVALID_FILE_UPLOAD,this.language)):(this.hasError=!0,this.errorMessage=l.Z.convertFileUploadingError(o.Z.errors.USER_NOT_LOGGED_IN,this.language))}},computed:{language(){return this.$store.getters.getLanguage}}},u=n,_=s(1),g=(0,_.Z)(u,a,i,!1,null,"efcd2db2",null),d=g.exports}}]);
//# sourceMappingURL=65.e23a88fa.js.map