import React from 'react';
import { Link } from 'react-router-dom';


class EventIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllEvents();
    }

    displayEvent(event) {
        return (
            <Link to={`/${event.group}/events/${event.id}`} key={event.id}>
                <div className="event-index-item">
                    <div className="event-index-item-date">
                        <span>{event.date}</span>
                    </div>
                    <div className="event-index-item-info">
                        <span className="event-index-group">{event.group}</span>
                        <span className="event-index-name">{event.name}</span>
                        <span className="event-index-location"><i className="fas fa-map-marker-alt"></i> {event.venueLocation}</span>
                        <span className="event-index-attendees">{event.attendees.length} attendees</span>
                    </div>
                </div>
            </Link>
        )
    }

    render() {
        const { currentUser, groups, events } = this.props;
        if (!groups || !events) return null;
        const userEvents = events.filter(event => (
            event.attendees.includes(currentUser.id)
        ))
        return (
            <div>
                <div className="user-groups-infobar">
                    <Link to="/">
                        <div className="user-groups-infobar-content">
                            <h2>Join your next group</h2>
                            <span>You belong to {currentUser.groups.length} groups</span>
                            <span>{groups.length} groups near you</span>
                        </div>
                    </Link>
                </div>
                <div className="user-groups-container">
                    <div className="user-groups-index">
                        <h4 className="user-groups-index-header">YOUR UPCOMING EVENTS</h4>
                        <div className="user-events-index-div" >

                            {userEvents ?
                                userEvents.map(event => (
                                    this.displayEvent(event)
                                )) : null
                            }
                        </div>
                    </div>
                </div>
                <div className="groups-container">
                    <div className="groups-index">
                        <h4 className="groups-index-header">ALL UPCOMING EVENTS</h4>
                        <div className="events-index-div">
                            {events.map(event => (
                                this.displayEvent(event)
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventIndex;