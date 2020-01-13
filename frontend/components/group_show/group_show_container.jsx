import { connect } from "react-redux";
import GroupShowIndex from './group_show_index';
import { fetchGroup } from '../../actions/group_actions';
import { createMembership, deleteMembership } from "../../util/groups_api_util";


const mapStateToProps = (state, ownProps ) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    // here members are in a users slice of state b/c more info per user needed
    members: Object.values(state.entities.users),
    currentUser: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
    fetchGroup: (id) => dispatch(fetchGroup(id)),
    createMembership: (groupId) => dispatch(createMembership(groupId)),
    deleteMembership: (groupId) => dispatch(deleteMembership(groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupShowIndex)