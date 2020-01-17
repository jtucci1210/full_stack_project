import { RECEIVE_EVENT, RECEIVE_ALL_EVENTS } from '../actions/event_actions';
import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS } from '../actions/group_actions';
import { merge } from 'lodash';


const eventReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENT:
            return action.payload.events;
        case RECEIVE_ALL_EVENTS:
            return merge({}, state, action.payload.events);
        case RECEIVE_GROUP:
            if (!action.group.events) {return {} } else {
            return  action.group.events};
        case RECEIVE_ALL_GROUPS:
            return merge({}, state, action.payload.events);            
        default:
            return state;
    }
}

export default eventReducer;