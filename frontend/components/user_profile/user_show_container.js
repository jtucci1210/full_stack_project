import { connect } from 'react-redux';
import UserShow from './user_show';


const mapStateToProps = (state) => ({
    groups: Object.values(state.entities.groups),
    currentUser: Object.values(state.entities.users)[0]
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);