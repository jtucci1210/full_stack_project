import { connect } from "react-redux";
import EventShow from "./event_show";
import { fetchEvent } from "../../actions/event_actions";

const mapStateToProps = (state) => {
    return {
    currentUser: state.session.currentUser,
    event: Object.values(state.entities.events)[0]
}}

const mapDispatchToProps = (dispatch) => ({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
})


export default connect(mapStateToProps, mapDispatchToProps)(EventShow);