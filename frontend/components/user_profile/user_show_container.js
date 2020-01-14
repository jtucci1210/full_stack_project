import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchAllGroups } from '../../actions/group_actions'
 

const mapStateToProps = (state) => ({
    groups: Object.values(state.entities.groups),
    currentUser: (state.entities.users[state.session.id])
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllGroups: () => dispatch(fetchAllGroups())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);