import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchAllGroups } from '../../actions/group_actions';

import Splash from './splash';

const mapStateToProps = (state) => {
    return {
        groups: Object.values(state.entities.groups),
        events: Object.values(state.entities.events)
    }
}
const mapDispatchToProps = dispatch => {
    return {
    openModal: modal => dispatch(openModal(modal)),
    fetchAllGroups: () => dispatch(fetchAllGroups())

}};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);