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
        }
}