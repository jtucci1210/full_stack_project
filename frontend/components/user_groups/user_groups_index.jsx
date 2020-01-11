import React from 'react';
import UserGroupIndexItem from './user_groups_index_item'
import { fetchAllGroups } from '../../actions/group_actions';

class UserGroupsIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchAllGroups();
    }

    render () {
        const { currentUserId, members } = this.props;
        if (!this.props.groups) return null;
        return (
            <div className="user-groups-index-div" >
                <h4 className="user-groups-index-header">YOUR GROUPS</h4>
                {
                    this.props.groups.map(group => (
                        members.includes(currentUserId) ? (
                        <UserGroupIndexItem key={group.id} group={group} members={members}/>
                        ) : null
                    ))
                }
            </div>
        )
    }
}

export default UserGroupsIndex;