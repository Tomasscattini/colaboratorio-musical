import FirebaseUploadService from 'services/firebaseService/FirebaseUploadService';
import { publicProjects } from '@fake-db';

export default class FirebaseProjectsService extends FirebaseUploadService {
    getProject = (projectId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 1000);
        });
    };

    getPublicProjects = (params) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(publicProjects);
            }, 1000);
        });
    };

    getUserProjects = (params) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 1000);
        });
    };

    editProjectVersion = async () => {};

    addProjectVersion = async () => {};

    suggestProjectUpdate = async () => {};

    acceptProjectUpdate = async () => {};

    rejectProjectUpdate = async () => {};

    deleteProject = async () => {};
}
