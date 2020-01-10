import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS } from '../actions/group_actions';



const groupReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GROUP:
            return action.group.groups;
        case RECEIVE_ALL_GROUPS:
            return action.groups;
        default:
            return state;
    }
};

export default groupReducer;