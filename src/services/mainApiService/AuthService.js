import axios from 'axios';
import { baseUrl, mainService } from './mainApiServiceConfig';

export default class AuthService {
    authUrl = `${baseUrl}/auth`;
    authorUrl = `${baseUrl}/author`;

    // ! ========================
    // ! ========= AUTH =========
    // ! ========================

    signup = async (credentials) => {
        const data = await mainService.post(`${this.authUrl}/Signup`, credentials);
        return data?.data;
    };

    login = async (credentials) => {
        const data = await mainService.post(`${this.authUrl}/Login`, credentials);
        return data?.data;
    };

    autoLogin = async () => {
        return;
    };

    // forgotPassword({ email }) {
    // 	return new Promise((res, rej) => {
    // 		mainService
    // 			.post(`${this.authUrl}/ForgotPassword`, { email })

    // 			.then(data => res(data))
    // 			.catch(error => rej(error));
    // 	});
    // }

    // resetPassword(userInfo) {
    // 	return new Promise((res, rej) => {
    // 		mainService
    // 			.patch(`${this.authUrl}/ResetPassword`, userInfo)
    // 			.then(data => res(data))
    // 			.catch(error => rej(error));
    // 	});
    // }

    signOut = async () => {
        const data = await mainService.get(`${this.authUrl}/Logout`);
        if (data) return data.data;
    };

    // ! =========================
    // ! ======= USER CRUD =======
    // ! =========================

    getUserData = async () => {
        const data = await mainService.get(`${this.authorUrl}`);
        if (data?.data) return data.data;
    };

    updateUserData = (user) => {
        return new Promise((res, rej) => {
            const userId = user.id;
            mainService
                .patch(`${this.authorUrl}/${userId}`, user)
                .then((data) => {
                    res(data);
                })
                .catch((error) => {
                    rej(error);
                });
        });
    };

    changePassword(passwords) {
        return new Promise((res, rej) => {
            axios
                .patch(`${this.authorUrl}/changePassword`, passwords)
                .then((data) => res(data))
                .catch((error) => rej(error));
        });
    }

    deleteAccount({ deleteData = false }) {
        return new Promise((res, rej) => {
            axios
                .delete(`${this.authorUrl}?deletedata=${deleteData}`)
                .then((data) => {
                    this.logout();
                    res(data);
                })
                .catch((error) => rej(error));
        });
    }
}
