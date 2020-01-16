import { connect } from 'react-redux';
import UserGroupsIndex from './user_groups_index';
import { fetchAllGroups } from '../../actions/group_actions';

const mapStateToProps = (state) => {
    return {
        // needs to be int for inclusion check in members
    currentUser: state.session.currentUser,
    groups: Object.values(state.entities.groups),
    events: Object.values(state.entities.events)
}}


const mapDispatchToProps = (dispatch) => ({
    fetchAllGroups: () => dispatch(fetchAllGroups())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserGroupsIndex)