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
                    errorMessage = 'An error has occurred while uploading the file. Please try again.';
            }

            return errorMessage;
        },
        convertFileUploadingError(error, language) {
            let errorMessage = '';
            if (error === 'User Not Logged In') {
                errorMessage = language === Constants.ENGLISH_LANGUAGE ? 'Please login/register to upload your resume' : 'אנא הרשמו כדי להעלות את קובץ קורות החיים';
            } else if (error === 'Invalid File') {
                errorMessage = language === Constants.ENGLISH_LANGUAGE ? 'You have uploaded a wrong file type' : 'ניסיתם להעלות קובץ מטיפוס לא נתמך';
            }

            return errorMessage;
        }
}