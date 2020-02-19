import React from 'react';


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
            <div>
                <div className="event-show-top">
                    <span>{event.date}</span>
                    <span>{event.name}</span>
                    <div>
                        <i className="fas fa-users"></i>
                        <div>
                            <span>Hosted by </span>
                            <span>{eventCreator.username} & {group.title}</span>
                        </div>
                    </div>
                </div>
                <div className="event-show-bottom">
                    <div className="event-show-bottom-left">
                        <div className="event-img-container">
                            <img src={event.photoUrl} alt="event-show-img"/>
                        </div>
                        <span>Details</span>
                        <div>{event.description}</div>
                        <span>Attendees</span>
                        <div className="attendees-div-items">
                            {users.map(attendee => (
                                <li key={attendee.id}>
                                    <i className="fas fa-user-circle"></i>
                                    <div className="attendees-div-content">
                                        <h4 className="attendee-username-header">{attendee.username}</h4>
                                        <span className="attendee-join-date">Joined on {attendee.createdAt}</span>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className="event-show-bottom-right">
                        <div className="event-group-info">
                            <div className="event-group-photo">
                                <img src={group.photoUrl} alt="event-group-img"/>
                            </div>
                            <div className="event-group-info">
                                <span>{group.title}</span>
                                <span>{group.private ? "Private" : "Public"} Group</span>
                            </div>
                            <div className="event-time-info">
                                <div className="event-time-div">
                                    <i className="far fa-clock"></i>
                                    <div className="event-time">
                                        <span>{event.date}</span>
                                        <span>{event.startTime} to {event.endTime}</span>
                                    </div>
                                </div>
                                <span><i className="fas fa-map-marker-alt"></i> {event.venueLocation}</span>
                            </div>
                            <div className="event-attend-edit">
                                <button className="attend-event">Attend</button>
                                <button className="edit-event">Edit Event</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventShow;