import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_GROUP } from '../actions/group_actions';
import { RECEIVE_EVENT, RECEIVE_ALL_EVENTS } from '../actions/event_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.currentUser.users );
        case RECEIVE_GROUP:
            return action.group.users;
        case RECEIVE_EVENT:
            return merge({}, state, action.payload.users);
        case RECEIVE_ALL_EVENTS:
            return merge({}, state, action.payload.users); 
        default:
            return state;
    }
};

export default usersReducer;
