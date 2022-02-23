import { createSlice } from '@reduxjs/toolkit';
import firebaseService from 'services/firebaseService';

export const loadCurrentProject = (id) => (dispatch, getState) => {
    dispatch(projectRequested());
    return firebaseService
        .getProject(id)
        .then((data) => {
            dispatch(projectReceived(data));
        })
        .catch((error) => {
            dispatch(projectRequestFailed(error));
        });
};

const slice = createSlice({
    name: 'currentProject',
    initialState: {
        data: {},
        lastFetch: '',
        loading: false
    },
    reducers: {
        projectRequested: (state, action) => {
            state.loading = true;
        },

        projectReceived: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.lastFetch = Date.now();
        },

        projectRequestFailed: (state, action) => {
            state.loading = false;
        }
    }
});

export const { projectReceived, projectRequestFailed, projectRequested } = slice.actions;

export default slice.reducer;
