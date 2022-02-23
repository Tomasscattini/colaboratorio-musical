import { combineReducers } from 'redux';
import projectsReducer from './projectsSlice';

export default combineReducers({
    projects: projectsReducer
});
