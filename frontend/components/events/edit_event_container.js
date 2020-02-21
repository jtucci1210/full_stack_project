import { connect } from 'react-redux';
import EditEvent from './edit_event';
import { updateEvent, deleteEvent, fetchEvent } from '../../actions/event_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.events,
        event: state.entities.events[ownProps.match.params.eventId]
    };
};

const mapDispatchToProps = (dispatch) => ({
    updateEvent: (event) => dispatch(updateEvent(event)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);