import { combineReducers } from 'redux';
import currentProjectReducer from 'store/projects/currentProjectSlice';
import publicProjectsReducer from 'store/projects/publicProjectsSlice';
import userProjectsReducer from 'store/projects/userProjectsSlice';

export default combineReducers({
    currentProject: currentProjectReducer,
    publicProjects: publicProjectsReducer,
    userProjects: userProjectsReducer
});
