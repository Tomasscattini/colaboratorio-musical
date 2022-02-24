import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import firebaseService from 'services/firebaseService';

export const loadPublicProjects = createAsyncThunk(
    'publicProjects/loadPublicProjects',
    async (params, { dispatch, getState }) => {
        try {
            const data = await firebaseService.getPublicProjects(params);
            return data;
        } catch (error) {
            return `${error?.message}`;
        }
    }
);

const publicProjectsAdapter = createEntityAdapter({});

export const { selectAll: selectPublicProjects, selectById: selectPublicProjectsById } =
    publicProjectsAdapter.getSelectors(({ entities }) => entities.projects.publicProjects);

const slice = createSlice({
    name: 'projects/publicProjects',
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
        [loadPublicProjects.pending]: (state, action) => {
            state.loading = true;
        },
        [loadPublicProjects.fulfilled]: (state, action) => {
            publicProjectsAdapter.setAll(state, action.payload);
            state.loading = false;
        }
    }
});

export const { setProjects, setSearchText, clearSearchParams } = slice.actions;

export default slice.reducer;
