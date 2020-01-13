import React from 'react';
import UserGroupIndexItem from './user_groups_index_item'

class UserGroupsIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchAllGroups();
    }

    render () {
        const { currentUserId, groups } = this.props;
        // debugger;
        if (!groups) return null;
        const userGroups = groups.filter(group => (
            group.members.includes(currentUserId)
        ))
        return (
            <div>
                <div className="user-groups-infobar">
                        <h2>Find your next event</h2>
                        <span>{"__"} events in your groups</span>
                        <span>{"__"} events near you</span>
                </div>
                <div className="user-groups-container">
                    <div className="user-groups-index">
                        <h4 className="user-groups-index-header">YOUR GROUPS</h4>
                        <div className="user-groups-index-div" >
                            
                            { userGroups ?
                                userGroups.map(group => (
                                    <UserGroupIndexItem key={group.id} group={group} />
                                )) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserGroupsIndex;