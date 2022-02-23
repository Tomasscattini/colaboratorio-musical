import { createSlice } from '@reduxjs/toolkit';
import firebaseService from 'services/firebaseService';

export const loadUserProjects = () => (dispatch, getState) => {
    dispatch(projectsRequested());
    return firebaseService
        .getUserProjects()
        .then((data) => {
            dispatch(projectsReceived(data));
        })
        .catch((error) => {
            dispatch(projectsRequestFailed(error));
        });
};

const slice = createSlice({
    name: 'userProjects',
    initialState: {
        searchParams: {
            searchText: ''
        },
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        projectsRequested: (data, action) => {
            data.loading = true;
        },

        projectsReceived: (data, action) => {
            data.list = action.payload;
            data.loading = false;
            data.lastFetch = Date.now();
        },

        projectsRequestFailed: (data, action) => {
            data.loading = false;
        },

        setSearchText: (data, action) => {
            data.searchParams.searchText = action.payload;
        },

        clearSearchParams: (data, action) => {
            data.searchParams.searchText = '';
        }
    }
});

export const { projectsReceived, projectsRequestFailed, projectsRequested, setSearchText, clearSearchParams } =
    slice.actions;

export default slice.reducer;
