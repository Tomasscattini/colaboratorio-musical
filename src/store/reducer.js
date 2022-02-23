import { combineReducers } from 'redux';
import authReducer from 'auth/store';
import entitiesReducer from 'store/entities';
import messagesReducer from 'store/ui/messageSlice';
import uiReducer from 'store/ui/uiSlice';

export default combineReducers({
    auth: authReducer,
    entities: entitiesReducer,
    messages: messagesReducer,
    ui: uiReducer
});
