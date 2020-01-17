import { connect } from "react-redux";
import GroupShowIndex from './group_show_index';
import { fetchGroup } from '../../actions/group_actions';
import { createMembership, deleteMembership } from "../../actions/group_actions";
import { createRsvp, deleteRsvp } from "../../actions/event_actions";


const mapStateToProps = (state, ownProps ) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    // here members are in a users slice of state b/c more info per user needed
    members: Object.values(state.entities.users),
    currentUser: state.session.currentUser,
    events: Object.values(state.entities.events)
})

const mapDispatchToProps = (dispatch) => ({
    fetchGroup: (id) => dispatch(fetchGroup(id)),
    createMembership: (groupId) => dispatch(createMembership(groupId)),
    deleteMembership: (groupId) => dispatch(deleteMembership(groupId)),
    createRsvp: (eventId) => dispatch(createRsvp(eventId)),
    deleteRsvp: (eventId) => dispatch(deleteRsvp(eventId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupShowIndex)