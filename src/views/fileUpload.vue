<template>
    <div id="container">
        <h1 v-if="language === ENGLISH_LANGUAGE">Upload Your Resume</h1>
        <h1 v-if="language === HEBREW_LANGUAGE">העלאת קורות חיים</h1>
        <div id="explanation">
            <p dir="ltr" v-if="language === ENGLISH_LANGUAGE">In order to start the reviewing process, it is needed to submit your resume.<br>
               We accept <strong>PDF</strong> files or Word documents (<strong>.doc, .docx</strong>).
            </p>
            <p v-if="language === HEBREW_LANGUAGE">כדי להתחיל את תהליך הביקורת, אנא הגישו את קורות החיים שלכם<br>
               אנו מקבלים קבצים מסוג <strong>PDF</strong> או מסמכי וורד (<strong>.doc, .docx</strong>). 
            </p>
        </div>
        <div class="form-group">
            <p v-if="language === ENGLISH_LANGUAGE"><strong>You will need to Login/Signup in order to upload your resume</strong></p> 
            <p v-if="language === HEBREW_LANGUAGE"><strong>אתם צריכים להתחבר/להירשם כדי להעלות קובץ</strong></p>
            <br>

            <label v-if="language === ENGLISH_LANGUAGE" for="file" >Choose File:</label>
            <label v-if="language === HEBREW_LANGUAGE" for="file">בחר קובץ:</label>
            <input type="file" id="file" v-on:change="uploadFile">
        </div>
        <p v-if="isUploading">Progress: {{uploadValue.toFixed()+"%"}}</p>
        <p v-if="!isUploading && uploadValue === 100"><i class="fas fa-check fa-3x success"></i></p>
        <p v-if="hasError" :key="hasError"><i class="fas fa-times fa-3x error"></i></p>
        <p v-if="hasError" id="errorParagraph">
            {{ errorMessage }}
        </p>
        <p v-if="uploadValue === 100 && language === ENGLISH_LANGUAGE" id="afterSubmission">
            Thank you for your submission.<br>
            We will contact you within 2-3 business days
        </p>
        <p v-if="uploadValue === 100 && language === HEBREW_LANGUAGE" id="afterSubmission">
            תודה שהגשתם את קורות החיים שלכם.<br>
            ניצור אתכם קשר בימים הקרובים
        </p>
    </div>
</template>


<script>

import firebase from 'firebase';
import Constants from '../constants.js';
import Utils from '../utils.js';

export default {
    
    name: 'FileUpload',
    created() {
       this.HEBREW_LANGUAGE = Constants.HEBREW_LANGUAGE;
       this.ENGLISH_LANGUAGE = Constants.ENGLISH_LANGUAGE;
    },
    data: function(){
        return {
            fileToUpload: null,
            isUploading: false,
            uploadValue: 0,
            hasError: false,
            errorMessage: "",
        }
    },
    methods: {
        isFileValid: function() {
            let fileType = this.fileToUpload && this.fileToUpload.type;
            return ((fileType === Constants.PDF_FILE_MIME_TYPE || 
                    fileType === Constants.MSWORD_DOC_FILE_MIME_TYPE || 
                    fileType === Constants.MSWORD_DOCX_FILE_MIME_TYPE) && 
                    this.fileToUpload.size < Constants.MAXIMUM_FILE_SIZE_IN_BYTES);
        },
        beginUploadingFile: function() {
            this.isUploading = true;
            const storageRef = firebase.storage().ref(`${this.fileToUpload.name}`).put(this.fileToUpload);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            }, error => {
                this.errorMessage = Utils.convertFirebaseErrorIntoErrorMessage(error, this.language);
                this.isUploading = false;
                this.hasError = true;
            }, () => {
                this.uploadValue = 100;
                this.isUploading = false;
                this.$analytics.logEvent('UserAction', 'FileUpload', 'FileUpload', 3);
            });

        },
        isUserLoggedIn: function() {
            return (firebase.auth().currentUser && this.$store.getters.isUserLoggedIn);
        },
        uploadFile: function(event) {
            this.hasError = false;
            this.uploadValue = 0;
            this.fileToUpload = event.target.files[0];
            if (!this.isUserLoggedIn()) {
                this.hasError = true;
                this.errorMessage = Utils.convertFileUploadingError(Constants.errors.USER_NOT_LOGGED_IN, this.language);
            }
            else if (this.isFileValid()) {
                this.beginUploadingFile();
            } else {
                this.hasError = true;
                this.errorMessage = Utils.convertFileUploadingError(Constants.errors.INVALID_FILE_UPLOAD, this.language);
            }
        }
    }, //end methods
     computed: {
       language() {
          return this.$store.getters.getLanguage;
       },
     }
}


</script>


<style scoped>

    #container {
        min-height: 100%;
        color: white;
        text-align: center;
    }

    h1 {
        margin-top: 2%;
    }

    #explanation {
        margin-top: 1%;
    }

    .form-group {
         margin: auto;
         text-align: center;
    }

    input {
        border: 2px solid white;
    }

    .success {
        color: green;
    }

    .error {
        color: red;
    }
  

</style>