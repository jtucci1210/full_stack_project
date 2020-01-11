import { connect } from 'react-redux';
import UserGroupsIndex from './user_groups_index';
import { fetchAllGroups } from '../../actions/group_actions';

const mapStateToProps = (state) => {
    return {
    currentUserId: state.session.id.toString(),
    groups: Object.values(state.entities.groups),
    members: Object.keys(state.entities.users)
}}


const mapDispatchToProps = (dispatch) => ({
    fetchAllGroups: () => dispatch(fetchAllGroups())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserGroupsIndex)