<template>
    <main>
        <h1>Upload Your Resume</h1>
        <div class="form-group">
            <label for="file">Choose File:</label>
            <input type="file" id="file" v-on:change="uploadFile">
        </div>
        <p v-if="isUploading">Progress: {{uploadValue.toFixed()+"%"}}</p>
        <p v-if="uploadValue === 100"><i class="fas fa-check"></i></p>
    </main>
</template>


<script>
import firebase from 'firebase';
export default {
    
    name: 'FileUpload',
    data: function(){
        return {
            fileToUpload: null,
            isUploading: false,
            uploadValue: 0,
        }
    },
    methods: {
        uploadFile(event) {
            this.fileToUpload = event.target.files[0];
            this.isUploading = true;
            const storageRef = firebase.storage().ref(`${this.fileToUpload.name}`).put(this.fileToUpload);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            }, error => {
                console.log(error.message);
                this.isUploading = false;
            }, () => {
                this.uploadValue = 100;
                isUploading = false;
            });
        }
    }
}

</script>


<style>
    * {
    text-align: center;
    color: white;
    }

    h1 {
        margin-top: 2%;
    }

    .form-group {
        margin-top: 10%;
        
    }

    #file {
        margin: 1%;
    }
  

</style>