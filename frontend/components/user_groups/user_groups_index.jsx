import React from 'react';
import UserGroupIndexItem from './user_groups_index_item';
import { Link } from 'react-router-dom';

class UserGroupsIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchAllGroups();
    }
    groupOrEvents() {
        return (
            <div className="groups-or-event-div">
                <Link to="/" className="nav-to-groups">Groups</Link>
                <Link to="/events" className="nav-to-events">Events</Link>
            </div>
        );
    }

    render () {
        const { currentUser, groups, events } = this.props;
        if (groups.length <= 1) return null;
        const userGroups = groups.filter(group => (
            group.members.includes(currentUser.id)
        ))
        return (
            <div>
                <div className="user-groups-infobar">
                    <div className="user-groups-infobar-content">
                        <h2>Find your next event</h2>
                        <span>{currentUser.events.length} events in your groups</span>
                        <span>{events.length} events near you</span>
                        {this.groupOrEvents()}
                    </div>
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