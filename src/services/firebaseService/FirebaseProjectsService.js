import FirebaseUploadService from 'services/firebaseService/FirebaseUploadService';

export default class FirebaseProjectsService extends FirebaseUploadService {
    getProject = (projectId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 2000);
        });
    };

    getPublicProjects = (params) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 2000);
        });
    };

    getUserProjects = (params) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 2000);
        });
    };

    editProjectVersion = async () => {};

    addProjectVersion = async () => {};

    suggestProjectUpdate = async () => {};

    acceptProjectUpdate = async () => {};

    rejectProjectUpdate = async () => {};

    deleteProject = async () => {};
}
