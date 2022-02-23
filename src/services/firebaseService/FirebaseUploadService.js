import FirebaseAuthService from 'services/firebaseService/FirebaseAuthService';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default class FirebaseUploadService extends FirebaseAuthService {
    uploadPicture = (imgToUpload) => {
        return new Promise((resolve, reject) => {
            const imageRef = ref(this.storage, `images/${imgToUpload.name}`);

            uploadBytesResumable(imageRef, imgToUpload, {
                contentType: imgToUpload.type
            })
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    uploadFile = (fileToUpload) => {
        return new Promise((resolve, reject) => {
            const fileRef = ref(this.storage, `files/${fileToUpload.name}`);

            uploadBytesResumable(fileRef, fileToUpload, {
                contentType: fileToUpload.type
            })
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
}
