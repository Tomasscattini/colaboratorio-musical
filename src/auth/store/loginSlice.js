import { createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { showMessage } from 'store/ui/messageSlice';
import { setUserData, setUserDataMainApi } from './userSlice';
import firebaseService from 'services/firebaseService';
import mainApiService from 'services/mainApiService';

export const submitLogin =
    ({ email, password }) =>
    async (dispatch) => {
        return mainApiService
            .login({ email, password })
            .then((user) => {
                dispatch(setUserDataMainApi(user));

                return dispatch(loginSuccess());
            })
            .catch((error) => {
                if (error?.response?.data?.type === 'all') {
                    return dispatch(
                        loginError([
                            { message: error?.response?.data?.message, type: 'email' },
                            { message: error?.response?.data?.message, type: 'password' }
                        ])
                    );
                }
                return dispatch(
                    loginError([{ message: error?.response?.data?.message, type: error?.response?.data?.type }])
                );
            });
    };

export const forgotPassword =
    ({ email }) =>
    async (dispatch) => {
        return mainApiService
            .forgotPassword({ email })
            .then((user) => {
                return { status: 'done' };
            })
            .catch((error) => {
                if (error.message?.includes('404'))
                    dispatch(showMessage({ message: 'User by this email does not exist', variant: 'error' }));
                else dispatch(showMessage({ message: error.message, variant: 'error' }));
                return { status: 'error' };
            });
    };

export const resetPassword =
    ({ otp, password, userId }) =>
    async (dispatch) => {
        return mainApiService
            .resetPassword({ otp, password, userId })
            .then((user) => {
                dispatch(showMessage({ message: 'Your password has been succesfully updated', variant: 'success' }));
                return { status: 'done' };
            })
            .catch((error) => {
                dispatch(showMessage({ message: error.message, variant: 'error' }));
                return { status: 'error' };
            });
    };

export const changePassword =
    ({ oldPassword, newPassword }) =>
    async (dispatch) => {
        return mainApiService
            .changePassword({ oldPassword, newPassword })
            .then((user) => {
                dispatch(showMessage({ message: 'Your password has been succesfully updated', variant: 'success' }));
                return { status: 'done' };
            })
            .catch((error) => {
                dispatch(showMessage({ message: error.message, variant: 'error' }));
                return { status: 'error' };
            });
    };

export const submitLoginWithFireBase =
    ({ email, password }) =>
    async (dispatch, getState) => {
        if (!firebaseService.auth) {
            console.warn("Firebase Service didn't initialize, check your configuration");

            return () => false;
        }
        const appTitle = getState().ui.appInformation.appTitle;

        return signInWithEmailAndPassword(firebaseService.auth, email, password)
            .then((response) => {
                dispatch(setUserData(response?.user));
                dispatch(showMessage({ message: `Logged in to ${appTitle}`, variant: 'success' }));
                return dispatch(loginSuccess());
            })
            .catch((error) => {
                const emailErrorCodes = [
                    'auth/email-already-in-use',
                    'auth/invalid-email',
                    'auth/operation-not-allowed',
                    'auth/user-not-found',
                    'auth/user-disabled'
                ];
                const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password'];
                const response = [];

                if (emailErrorCodes.includes(error.code)) {
                    response.push({
                        type: 'email',
                        message: error.message
                    });
                }

                if (passwordErrorCodes.includes(error.code)) {
                    response.push({
                        type: 'password',
                        message: error.message
                    });
                }

                if (error.code === 'auth/invalid-api-key') {
                    dispatch(showMessage({ message: error.message }));
                }

                return dispatch(loginError(response));
            });
    };

export const deleteAccount = () => async (dispatch) => {
    return mainApiService
        .deleteAccount()
        .then((user) => {
            dispatch(showMessage({ message: 'Your account has been succesfully deleted', variant: 'success' }));
            return { status: 'done' };
        })
        .catch((error) => {
            dispatch(showMessage({ message: error.message, variant: 'error' }));
            return { status: 'error' };
        });
};

const initialState = {
    success: false,
    errors: []
};

const loginSlice = createSlice({
    name: 'auth/login',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.success = true;
            state.errors = [];
        },
        loginError: (state, action) => {
            state.success = false;
            state.errors = action.payload;
        }
    },
    extraReducers: {}
});

export const { loginSuccess, loginError } = loginSlice.actions;

export default loginSlice.reducer;
