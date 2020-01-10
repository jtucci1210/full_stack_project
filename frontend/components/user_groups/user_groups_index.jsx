import React from 'react';
import UserGroupIndexItem from './user_groups_index_item'

class UserGroupsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { usersGroups } = this.props;
        return (
            <div className="user-groups-index-div" >
                <h4 className="user-groups-index-header">YOUR GROUPS</h4>
                {
                    usersGroups.map(group => (
                        <UserGroupIndexItem key={group.id} group={group}/>
                    ))
                }
            </div>
        )
    }
}

export default UserGroupsIndex;