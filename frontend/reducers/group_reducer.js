import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS } from '../actions/group_actions';
import { merge } from 'lodash';


const groupReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GROUP:
            return merge({}, state, action.group.groups);
        case RECEIVE_ALL_GROUPS:
            return merge({}, state, action.groups);
        default:
            return state;
    }
};

export default groupReducer;