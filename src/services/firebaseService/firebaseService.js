import FirebaseProjectsService from 'services/firebaseService/FirebaseProjectsService';

export class FirebaseService extends FirebaseProjectsService {}

const instance = new FirebaseService();

export default instance;
