import React from 'react';
import { Link } from 'react-router-dom';


class EventIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllEvents();
    }

    render() {
        const { currentUser, groups, events } = this.props;
        if (!groups || !events) return null;
        const userEvents = events.filter(event => (
            event.attendees.includes(currentUser.id)
        ))
        debugger;
        return (
            <div>
                <div className="user-groups-infobar">
                    <Link to="/events">
                        <div className="user-groups-infobar-content">
                            <h2>Join your next Group</h2>
                            <span>{currentUser.groups.length} groups you belong to</span>
                            <span>{groups.length} groups near you</span>
                        </div>
                    </Link>
                </div>
                <div className="user-groups-container">
                    <div className="user-groups-index">
                        <h4 className="user-groups-index-header">YOUR GROUPS</h4>
                        <div className="user-groups-index-div" >

                            {/* {userEvents ?
                                userEvents.map(event => (
                                    <UserGroupIndexItem key={group.id} group={group} />
                                )) : null
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventIndex;