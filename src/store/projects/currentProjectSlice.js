import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import firebaseService from 'services/firebaseService';

export const loadCurrentProject = createAsyncThunk(
    'currentProject/loadCurrentProject',
    async (id, { dispatch, getState }) => {
        try {
            const data = await firebaseService.getProject(id);
            return data;
        } catch (error) {
            return `${error?.message}`;
        }
    }
);

const currentProjectAdapter = createEntityAdapter({});

export const { selectAll: selectCurrentProjects } = currentProjectAdapter.getSelectors(
    ({ entities }) => entities.projects.currentProject
);

const slice = createSlice({
    name: 'currentProject',
    initialState: {
        data: {},
        entities: {},
        ids: [],
        lastFetch: '',
        loading: false
    },
    reducers: {},
    extraReducers: {
        [loadCurrentProject.pending]: (state, action) => {
            state.loading = true;
        },
        [loadCurrentProject.fulfilled]: (state, action) => {
            currentProjectAdapter.setAll(state, action.payload);
            state.loading = false;
        }
    }
});

// export const {} = slice.actions;

export default slice.reducer;
