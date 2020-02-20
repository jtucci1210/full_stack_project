import { connect } from 'react-redux';
import NewEvent from './new_event';
import { createEvent } from '../../actions/event_actions'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.events
    };
};

const mapDispatchToProps = (dispatch) => ({
    createEvent: (event) => dispatch(createEvent(event))
})


export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);