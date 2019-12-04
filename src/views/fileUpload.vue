<template>
    <div id="container">
        <h1>Upload Your Resume</h1>
        <div id="explanation">
            <p>In order to start the reviewing process, it is needed to submit your resume.<br>
               We accept <strong>PDF</strong> files or Word documents (<strong>.doc, .docx</strong>). 
            </p>
        </div>
        <div class="form-group">
            <label for="file">Choose File:</label>
            <input type="file" id="file" v-on:change="uploadFile">
        </div>
        <p v-if="isUploading">Progress: {{uploadValue.toFixed()+"%"}}</p>
        <p v-if="!isUploading && uploadValue === 100"><i class="fas fa-check fa-3x success"></i></p>
        <p v-if="hasError" :key="hasError"><i class="fas fa-times fa-3x error"></i></p>
        <p v-if="hasError" id="errorParagraph">
            {{ errorMessage }}
        </p>
        <p v-if="uploadValue === 100" id="afterSubmission">
            Thank you for your submission.<br>
            We will contact you within 2-3 business days
        </p>
    </div>
</template>


<script>
const PDF_FILE_MIME_TYPE = 'application/pdf';
const MSWORD_DOC_FILE_MIME_TYPE = 'application/msword';
const MSWORD_DOCX_FILE_MIME_TYPE = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
const MAXIMUM_FILE_SIZE_IN_BYTES = 5000000;

import firebase from 'firebase';
export default {
    
    name: 'FileUpload',
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
            return ((fileType === PDF_FILE_MIME_TYPE || 
                    fileType === MSWORD_DOC_FILE_MIME_TYPE || 
                    fileType === MSWORD_DOCX_FILE_MIME_TYPE) && 
                    this.fileToUpload.size < MAXIMUM_FILE_SIZE_IN_BYTES);
        },
        beginUploadingFile: function() {
            this.isUploading = true;
            const storageRef = firebase.storage().ref(`${this.fileToUpload.name}`).put(this.fileToUpload);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            }, error => {
                switch(error.code) {
                    case 'storage/unauthorized':
                        this.errorMessage = 'You have uploaded a wrong file type.';
                        break;
                    default:
                        this.errorMessage = 'An error has occurred while uploading the file. Please try again.';
                }
                this.isUploading = false;
                this.hasError = true;
            }, () => {
                this.uploadValue = 100;
                this.isUploading = false;
            });

        },
        isUserLoggedIn: function() {
            return this.$store.getters.isUserLoggedIn;
        },
        uploadFile: function(event) {
            this.hasError = false;
            this.uploadValue = 0;
            this.fileToUpload = event.target.files[0];
            if (!this.isUserLoggedIn()) {
                this.hasError = true;
                this.errorMessage = 'Please login/register to upload your resume';
            }
            else if (this.isFileValid()) {
                this.beginUploadingFile();
            } else {
                this.hasError = true;
                this.errorMessage = 'You have uploaded a wrong file type.';
            }
        }
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
        margin-top: 5%;
    }

    #file {
        margin: 1%;
    }

    .success {
        color: green;
    }

    .error {
        color: red;
    }
  

</style>