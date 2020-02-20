import React from 'react';
import GroupEventIndexItem from './group_event_index_item';

const GroupEventIndex = ({ events, currentUser, createRsvp, deleteRsvp, openModal }) => {
    
    return (
        <div className="group-events-div">
            <h2>All Group Events</h2>
            <div className="group-events-div-container">
                {events ? 
                events.map(event => (
                    <GroupEventIndexItem key ={event.id} event={event}
                        currentUser={currentUser} createRsvp={createRsvp}
                        deleteRsvp={deleteRsvp} openModal={openModal}/>
                ))
                : null }
            </div>
        </div>
    )
}

export default GroupEventIndex;