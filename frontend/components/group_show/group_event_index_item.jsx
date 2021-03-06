import React from 'react';
import { Link } from 'react-router-dom';



const GroupEventIndexItem = ({event, currentUser, createRsvp, deleteRsvp, openModal }) => {
    function attend(attending, event){
        if (currentUser.id) {
            attending ?
                deleteRsvp(event.id) :
                createRsvp(event.id)
        } else {
            openModal('signup');
        }
    }
    const attending = event.attendees.includes(currentUser.id);
    return (
        <Link to={`/events/${event.id}`} className="group-events-div-item" key={event.id}>
            <div className="group-events-item-div1">
                <div className="events-info-div">
                    <span className="events-date-span">
                        {event.date}
                    </span>
                    <span className="events-name-span">
                        {event.name}
                    </span>
                    <span className="events-location-span">
                        <i className="fas fa-map-marker-alt"></i> {event.venueLocation}
                    </span>
                </div>
                <img className="event-index-image" src={event.photoUrl} alt="event's photo small" />
            </div>
            <div className="group-events-item-div2">
                <p className="events-description-p">
                    {event.description}
                </p>
            </div>
            <div className="group-events-item-div3">
                <div className="events-attendees-div">
                    <span className="events-attendees-span">
                        {event.attendees.length} Attendees
                                </span>
                </div>
                <div className="events-attend-button-div">
                    <button className="events-attend-button"
                        onClick={() => attend(attending, event)}>
                        {attending ? "Can't Go" : "Attend"}
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default GroupEventIndexItem;