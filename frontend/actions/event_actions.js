import * as eventAPIUtil from '../util/events_api_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

export const receiveAllEvents = (payload) => {
    return {
    type: RECEIVE_ALL_EVENTS,
    payload: payload
}} 

export const receiveEventErrors = (errors) => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
}) 

export const receiveEvent = (payload) => {
    return {
    type: RECEIVE_EVENT,
    payload: payload
}}

export const fetchAllEvents = () => dispatch => (
    eventAPIUtil.fetchAllEvents()
        .then(payload => dispatch(receiveAllEvents(payload)))
)

export const fetchEvent = (eventId) => dispatch => (
    eventAPIUtil.fetchEvent(eventId)
        .then(payload => dispatch(receiveEvent(payload)))
)

export const fetchAllUserEvents = (userId) => dispatch => (
    eventAPIUtil.fetchAllUserEvents(userId)
        .then(payload => dispatch(receiveAllEvents(payload)))
)

export const fetchAllGroupEvents = (groupId) => dispatch => (
    eventAPIUtil.fetchAllGroupEvents(groupId)
        .then(payload => dispatch(receiveAllEvents(payload)))
)

export const createRsvp = (eventId) => dispatch => (
    eventAPIUtil.createRsvp(eventId)
        .then(event => dispatch(receiveEvent(event)))
)

export const deleteRsvp = (eventId) => dispatch => (
    eventAPIUtil.deleteRsvp(eventId)
        .then(event => dispatch(receiveEvent(event)))
)

//delete event renders the group show page
export const deleteEvent = (eventId) => dispatch => (
    eventAPIUtil.deleteEvent(eventId)
        .then(group => dispatch(receiveEvent(group)))
)

export const createEvent = (data) => dispatch => {
    return eventAPIUtil.createEvent(data)
        .then(payload => dispatch(receiveEvent(payload)))
        
}