/* eslint import/no-extraneous-dependencies: off*/
import { createSlice } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import _ from 'lodash';
import { showMessage } from 'store/ui/messageSlice';
import firebaseService from 'services/firebaseService';
import authRoles from 'auth/authRoles';

const history = createBrowserHistory();

export const setUserDataFirebase = (user, authUser) => async (dispatch) => {
    if (user) {
        const userData = {
            personalInformation: user.personalInformation || {},
            role: user.role || authRoles.onlyGuest,
            uid: user.uid
        };
        return dispatch(setUserData(userData));
    }
    if (!authUser) return;

    // Create missing user settings
    return dispatch(createUserSettingsFirebase(authUser));
};

export const createUserSettingsFirebase = (authUser) => async (dispatch, getState) => {
    const guestUser = getState().auth.user;

    const user = _.merge(
        {},
        {
            personalInformation: guestUser.data?.personalInformation || {},
            role: guestUser.data?.role || '',
            uid: guestUser.data?.uid || ''
        },
        {
            personalInformation: authUser.personalInformation || {},
            role: authUser.role || authRoles.onlyGuest,
            uid: authUser.uid
        }
    );

    dispatch(updateUserData(user));

    return dispatch(setUserData(user));
};

export const setUserData = (user) => async (dispatch, getState) => {
    const userData = {
        personalInformation: user.personalInformation || {},
        role: user.role || authRoles.onlyGuest,
        uid: user.uid
    };
    dispatch(setUser(userData));
};

export const updateUserInformation = (information) => async (dispatch, getState) => {
    const oldUser = getState().auth.user;
    const user = _.merge(
        {},
        {
            personalInformation: oldUser.data?.personalInformation || {},
            role: oldUser.data?.role || '',
            uid: oldUser.data?.uid || ''
        },
        {
            personalInformation: information
        }
    );

    dispatch(updateUserData(user));

    return dispatch(setUserDataFirebase(user));
};

export const logoutUser = () => async (dispatch, getState) => {
    history.push({
        pathname: '/'
    });

    await firebaseService.signOut();

    return dispatch(userLoggedOut());
};

export const updateUserData = (user) => async (dispatch, getState) => {
    switch (user.data?.from) {
        case 'firebase': {
            firebaseService
                .updateUserData(user)
                .then(() => {
                    dispatch(setUserDataFirebase(user));
                })
                .catch((error) => {
                    dispatch(showMessage({ message: error.message }));
                });
            break;
        }
        default: {
            firebaseService
                .updateUserData(user)
                .then(() => {
                    dispatch(setUserDataFirebase(user));
                })
                .catch((error) => {
                    dispatch(showMessage({ message: error.message }));
                });
            break;
        }
    }
};

const initialState = {
    authenticated: false,
    personalInformation: {}
};

const userSlice = createSlice({
    name: 'auth/user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
            state.authenticated = true;
        },
        userLoggedOut: (state, action) => initialState
    },
    extraReducers: {}
});

export const { setUser, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
