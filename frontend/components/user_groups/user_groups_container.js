import { connect } from 'react-redux';
import UserGroupsIndex from './user_groups_index';

const mapStateToProps = (state) => ({
    usersGroups: Object.values(state.entities.groups)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserGroupsIndex)