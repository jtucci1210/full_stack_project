import { connect } from "react-redux";
import EventShow from "./event_show";
import { openModal } from "../../actions/modal_actions";
import { fetchEvent, createRsvp, deleteRsvp } from "../../actions/event_actions";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        events: Object.values(state.entities.events),
        groups: Object.values(state.entities.groups),
        users: Object.values(state.entities.users)
}}

const mapDispatchToProps = (dispatch) => ({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    createRsvp: (eventId) => dispatch(createRsvp(eventId)),
    deleteRsvp: (eventId) => dispatch(deleteRsvp(eventId)),
    openModal: modal => dispatch(openModal(modal))
})


export default connect(mapStateToProps, mapDispatchToProps)(EventShow);