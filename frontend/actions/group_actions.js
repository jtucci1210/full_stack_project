import * as groupAPIUtil from '../util/groups_api_util';

export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';


export const receiveAllGroups = (payload) => ({
    type: RECEIVE_ALL_GROUPS,
    payload: payload
})

export const receiveGroup = (group) => ({
    type: RECEIVE_GROUP,
    group: group
})

export const receiveGroupErrors = errors => ({
    type: RECEIVE_GROUP_ERRORS,
    errors
});

export const fetchAllGroups = () => dispatch => (
    groupAPIUtil.fetchAllGroups()
        .then(payload => dispatch(receiveAllGroups(payload)))
)

export const fetchGroup = (id) => dispatch => (
    groupAPIUtil.fetchGroup(id)
        .then(group => dispatch(receiveGroup(group)))
)

export const createMembership = (id) => dispatch => (
    groupAPIUtil.createMembership(id)
        .then(group => dispatch(receiveGroup(group)))
)

export const deleteMembership = (id) => dispatch => (
    groupAPIUtil.deleteMembership(id)
        .then((group) => dispatch(receiveGroup(group)))
)
