import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import firebaseService from 'services/firebaseService';

export const loadUserProjects = createAsyncThunk(
    'userProjects/loadUserProjects',
    async (params, { dispatch, getState }) => {
        try {
            const data = await firebaseService.getUserProjects(params);
            return data;
        } catch (error) {
            return `${error?.message}`;
        }
    }
);

const userProjectsAdapter = createEntityAdapter({});

export const { selectAll: selectUserProjects, selectById: selectUserProjectsById } = userProjectsAdapter.getSelectors(
    ({ entities }) => entities.projects.userProjects
);

const slice = createSlice({
    name: 'projects/userProjects',
    initialState: {
        entities: {},
        ids: [],
        loading: false,
        searchParams: {
            searchText: ''
        }
    },
    reducers: {
        setSearchText: (state, action) => {
            state.searchParams.searchText = action.payload;
        },

        clearSearchParams: (state, action) => {
            state.searchParams.searchText = '';
        }
    },
    extraReducers: {
        [loadUserProjects.pending]: (state, action) => {
            state.loading = true;
        },
        [loadUserProjects.fulfilled]: (state, action) => {
            userProjectsAdapter.setAll(state, action.payload);
            state.loading = false;
        }
    }
});

export const { setProjects, setSearchText, clearSearchParams } = slice.actions;

export default slice.reducer;
