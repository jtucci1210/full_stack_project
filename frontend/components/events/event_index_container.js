import { connect } from "react-redux";
import EventIndex from './event_index';
import { fetchAllEvents } from "../../actions/event_actions";

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    events: Object.values(state.entities.events),
    groups: Object.values(state.entities.groups)

})

const mapDispatchToProps = (dispatch) => ({
    fetchAllEvents: () => dispatch(fetchAllEvents())
})


export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);