import React from 'react';
import { Link } from 'react-router-dom';


class EventShow extends React.Component {
    constructor(props){
        super(props);
        this.eventId;
    }
    componentDidMount(){
        this.eventId = this.props.match.params.eventId
        this.props.fetchEvent(this.eventId);
    }

    editEvent(host, userId) {
        if (host === userId) {
            return (
                <button className="edit-event">Edit Event</button>
            )
        }
    }
    attend(attending, event){
        debugger;
        if (this.props.currentUser.id) {
            attending ?
                this.props.deleteRsvp(event.id) :
                this.props.createRsvp(event.id)
        } else {
            this.props.openModal('signup');
        }
    }

    render () {
        const { events, groups, users, currentUser } = this.props;
        const event = events.find(event => event.id === Number(this.eventId))
        if (!event) return null;
        if (!event.startTime) return null;
        const eventCreator = users.find(user => user.id === event.creatorId);
        const eventGroup = groups.find(group => group.id === event.groupId);
        const eventAttendees = users.filter(user => event.attendees.includes(user.id));
        const attending = event.attendees.includes(currentUser.id)
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
                                <span className="hosts">
                                    {eventCreator ? eventCreator.username + " and ": null}
                                     {eventGroup.title}</span>
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
                            {eventAttendees.map(attendee => (
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
                            <Link to={`/groups/${eventGroup.id}`} className="event-group-info-div">
                                <div className="event-group-photo">
                                    <img src={eventGroup.photoUrl} alt="event-group-img"/>
                                </div>
                                <div className="event-group-info">
                                    <span className="event-group-title">{eventGroup.title}</span>
                                    <span className="event-group-private">{eventGroup.private ? "Private" : "Public"} Group</span>
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
                            <button className="attend-event" onClick={() => this.attend(attending, event)}>
                                {attending ? "Can't Go" : "Attend"}</button>
                            {this.editEvent(eventCreator.id, currentUser.id)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventShow;