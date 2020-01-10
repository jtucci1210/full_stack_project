
export const fetchAllGroups = () => (
    $.ajax({
        url: `api/groups`,
        method: 'GET'
    })
) 

export const fetchGroup = (id) => (
    $.ajax({
        url: `api/groups/${id}`,
        method: 'GET'
    })
) 

export const createMembership = (id) => (
    $.ajax({
        method: 'POST',
        url: `api/groups/${id}/add`
    })
);

export const deleteMembership = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/groups/${id}/remove`
    })
);
