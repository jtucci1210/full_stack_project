import { connect } from "react-redux";
import GroupIndex from './group_index';
import { fetchAllGroups } from '../../actions/group_actions';


const mapStateToProps = (state) => ({
    groups: Object.values(state.entities.groups) 
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllGroups: () => dispatch(fetchAllGroups())
})


export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);