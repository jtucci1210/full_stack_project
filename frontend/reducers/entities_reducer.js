import { combineReducers } from 'redux';
import usersReducer from './users_reducers';
import groupReducer from './group_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    groups: groupReducer
});

export default entitiesReducer;