import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { showMessage } from 'store/ui/messageSlice';
import firebaseService from 'services/firebaseService';
import { createUserSettingsFirebase } from './userSlice';

export const registerWithFirebase = (model) => async (dispatch) => {
    if (!firebaseService.auth) {
        console.warn("Firebase Service didn't initialize, check your configuration");

        return () => false;
    }
    const { email, password, displayName } = model;

    const deconstructedName = displayName.split(' ');
    const firstName = deconstructedName
        .map((name, index, array) => (index < Math.ceil(array.length / 2) ? name : ''))
        .join(' ')
        .trim();
    const lastName = deconstructedName
        .map((name, index, array) => (index >= Math.ceil(array.length / 2) ? name : ''))
        .join(' ')
        .trim();

    return createUserWithEmailAndPassword(firebaseService.auth, email, password)
        .then((response) => {
            dispatch(
                createUserSettingsFirebase({
                    ...response.user,
                    personalInformation: {
                        firstName,
                        lastName,
                        email
                    }
                })
            );

            return dispatch(registerSuccess());
        })
        .catch((error) => {
            const usernameErrorCodes = ['auth/operation-not-allowed', 'auth/user-not-found', 'auth/user-disabled'];

            const emailErrorCodes = ['auth/email-already-in-use', 'auth/invalid-email'];

            const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password'];

            const response = [];

            if (usernameErrorCodes.includes(error.code)) {
                response.push({
                    type: 'username',
                    message: error.message
                });
            }

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

            return dispatch(registerError(response));
        });
};

const initialState = {
    success: false,
    errors: []
};

const registerSlice = createSlice({
    name: 'auth/register',
    initialState,
    reducers: {
        registerSuccess: (state, action) => {
            state.success = true;
            state.errors = [];
        },
        registerError: (state, action) => {
            state.success = false;
            state.errors = action.payload;
        }
    },
    extraReducers: {}
});

export const { registerSuccess, registerError } = registerSlice.actions;

export default registerSlice.reducer;
