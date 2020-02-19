import React from 'react';
import { Link } from 'react-router-dom';


class EventShow extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId)
    }

    render () {
        const { event, group, users } = this.props;
        if (!event) return null;
        const eventCreator = users.find(user => user.id === event.creatorId);
        return (
            <div className="event-show-page">
                <div className="event-show-top">
                    <div className="event-show-top-content">
                        <span className="event-show-date">{event.date}</span>
                        <span className="event-show-name">{event.name}</span>
                        <div className="host-info-div">
                            <i className="fas fa-users show-hosts"></i>
                            <div className="host-info">
                                <span>Hosted by </span>
                                <span className="hosts">{eventCreator.username} and {group.title}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-show-bottom">
                    <div className="event-show-bottom-left">
                        <div className="event-img-container">
                            <img src={event.photoUrl} alt="event-show-img"/>
                        </div>
                        <span className="event-show-details">Details</span>
                        <div>{event.description}</div>
                        <span className="event-show-details">Cost</span>
                        <span>{event.cost}</span>
                        <span className="event-show-details">Attendees</span>
                        <div className="attendees-div">
                            {users.map(attendee => (
                                <div key={attendee.id} className="attendees-div-items">
                                    <i className="fas fa-user-circle"></i>
                                    <div className="attendees-div-content">
                                        <h4 className="attendee-username-header">{attendee.username}</h4>
                                        <span className="attendee-join-date">Joined on {attendee.createdAt}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="event-show-bottom-right">
                        <div>
                            <Link to={`/groups/${group.id}`} className="event-group-info-div">
                                <div className="event-group-photo">
                                    <img src={group.photoUrl} alt="event-group-img"/>
                                </div>
                                <div className="event-group-info">
                                    <span className="event-group-title">{group.title}</span>
                                    <span className="event-group-private">{group.private ? "Private" : "Public"} Group</span>
                                </div>
                            </Link>
                        </div>
                        <div className="event-time-info">
                            <div className="event-time-div">
                                <div className="icon-div">
                                    <i className="far fa-clock"></i>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="event-time">
                                    <span>{event.date}</span>
                                    <span>{event.startTime} to {event.endTime}</span>
                                    <span className="event-show-location"> {event.venueLocation}</span>
                                </div>
                            </div>
                        </div>
                        <div className="event-attend-edit">
                            <button className="attend-event">Attend</button>
                            <button className="edit-event">Edit Event</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventShow;