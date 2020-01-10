import { connect } from "react-redux";
import GroupShowIndex from './group_show_index';
import { fetchGroup } from '../../actions/group_actions';


const mapStateToProps = (state, ownProps ) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    members: Object.values(state.entities.users),
    currentUser: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
    fetchGroup: (id) => dispatch(fetchGroup(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupShowIndex)