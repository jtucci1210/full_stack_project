import { connect } from "react-redux";
import EventShow from "./event_show";
import { fetchEvent } from "../../actions/event_actions";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        events: Object.values(state.entities.events),
        groups: Object.values(state.entities.groups),
        users: Object.values(state.entities.users)
}}

const mapDispatchToProps = (dispatch) => ({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
})


export default connect(mapStateToProps, mapDispatchToProps)(EventShow);