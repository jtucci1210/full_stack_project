import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS } from '../actions/group_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';



const groupReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GROUP:
           const newGroup = { [action.group.id]: action.group.groups }
            return Object.assign({}, state, newGroup);
        case RECEIVE_ALL_GROUPS:
            return action.groups;
        case RECEIVE_CURRENT_USER:
            return action.currentUser.groups;
        default:
            return state;
    }
};

export default groupReducer;