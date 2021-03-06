
export const fetchEvent = (id) => (
    $.ajax({
        url: `api/events/${id}`,
        method: 'GET'
    })
)

export const fetchAllEvents = () => (
    $.ajax({
        url: `api/events`,
        method: 'GET'
    })
)

export const fetchAllGroupEvents = (groupId) => (
    $.ajax({
        url: `api/groups/${groupId}/events`,
        method: 'GET'
    })
)

export const fetchAllUserEvents = (userId) => (
    $.ajax({
        url: `api/users/${userId}/events`,
        method: 'GET'
    })
)

export const createRsvp = (eventId) => (
    $.ajax({
        method: 'POST',
        url: `api/events/${eventId}/add`
    })
);

export const deleteRsvp = (eventId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/events/${eventId}/remove`
    })
);

export const deleteEvent = (eventId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/events/${eventId}`
    })
);

export const updateEvent = (event) => (
    $.ajax({
        method: 'PATCH',
        url: `api/events/${event.id}`,
        data: { event }
    })
);

export const createEvent = (event) => (
    $.ajax({
        method: 'POST',
        url: `api/events/`,
        data: { event }
    })
);