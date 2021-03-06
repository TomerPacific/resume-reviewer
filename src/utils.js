/* utils.js */

import Constants from './constants.js';

export default {
        convertFirebaseErrorIntoErrorMessage(error, language) {
            let errorMessage = '';
            switch(error.code) {
                case 'storage/unauthorized':
                    errorMessage = language === Constants.ENGLISH_LANGUAGE ? 'You have uploaded a wrong file type.' : 'העלתם קובץ לא מתאים';
                    break;
                default:
                    errorMessage = language === Constants.ENGLISH_LANGUAGE ? 
                    'An error has occurred while uploading the file. Please try again' :
                    'אירעה שגיאה בעת העלאת הקובץ. אנא, נסו שוב'
            }

            return errorMessage;
        },
        convertFileUploadingError(error, language) {
            let errorMessage = '';
            if (error === Constants.errors.USER_NOT_LOGGED_IN) {
                errorMessage = language === Constants.ENGLISH_LANGUAGE ? 'Please login/register to upload your resume' : 'אנא הרשמו כדי להעלות את קובץ קורות החיים';
            } else if (error === Constants.errors.INVALID_FILE_UPLOAD) {
                errorMessage = language === Constants.ENGLISH_LANGUAGE ? 'You have uploaded a wrong file type' : 'ניסיתם להעלות קובץ מטיפוס לא נתמך';
            }
            return errorMessage;
        },
        convertLoginError(error, language) {
            let errorMessage = '';
            if (error.code === 'auth/user-not-found') {
                errorMessage = language === Constants.ENGLISH_LANGUAGE ? 'User not found' : 'משתמש לא נמצא';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = language === Constants.ENGLISH_LANGUAGE ? 'Invalid email' : 'מייל לא תקין';
            } else if (error.code === 'auth/email-already-exists') {
                errorMessage = language === Constants.ENGLISH_LANGUAGE ? 'Email already exists' : 'מייל זה כבר קיים';
            } else if (error.code === 'auth/invalid-password') {
                errorMessage = language === Constants.ENGLISH_LANGUAGE ? 'Invalid password' : 'סיסמא לא תקינה';
            } else if (error.code === 'auth/invalid-argument') {
                errorMessage = language === Constants.ENGLISH_LANGUAGE ? 'Something that was sent was invalid' : 'מה שנשלח לא היה תקין';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = language === Constants.ENGLISH_LANGUAGE ? error.message : 'הסיסמה לא תקינה/למשתמש אין סיסמה';
            }

            return errorMessage;
        },
        areInputFieldsValid() {
            let userNameInput = document.getElementById('username');
            let passwordInput = document.getElementById('password');

            if (!this.validateEmail(userNameInput.value)) {
                alert(Constants.errors.INVALID_EMAIL);
                if (!userNameInput.classList.contains('invalid-input')) {
                    userNameInput.classList.add('invalid_input');
                }
                return false;
            }

            if (!this.validatePassword(passwordInput.value)) {
                alert(Constants.errors.INVALID_PASSWORD);
                if (userNameInput.classList.contains('invalid-input')) {
                    userNameInput.classList.remove('invalid_input');
                }
                if (!passwordInput.classList.contains('invalid-input')) {
                    passwordInput.classList.add('invalid_input');
                }

                return false;
            }

            return true;
        },
        validatePassword: function(password) {
            return (password !== '' && 
                    password !== undefined && 
                    password !== null && 
                    password.length > Constants.MINIMUM_PASSWORD_LENGTH);
          },
        validateEmail: function(email) {
            let emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return emailPattern.exec(email);
        },
        removeClassFromElement: function(element, className) {
            if (element.classList.contains(className)) {
                element.classList.remove(className);
            }
        }
}