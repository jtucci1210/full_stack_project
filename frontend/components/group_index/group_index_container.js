import { connect } from "react-redux";
import GroupIndex from './group_index';
import { fetchAllGroups } from '../../actions/group_actions';


const mapStateToProps = (state) => ({
    groups: Object.values(state.entities.groups),
    members: Object.keys(state.entities.users) 
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllGroups: () => dispatch(fetchAllGroups())
})


export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);