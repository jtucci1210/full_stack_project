import { combineReducers } from 'redux';
import usersReducer from './users_reducers';
import groupReducer from './group_reducer';
import eventReducer from './event_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    groups: groupReducer,
    events: eventReducer
});

export default entitiesReducer;