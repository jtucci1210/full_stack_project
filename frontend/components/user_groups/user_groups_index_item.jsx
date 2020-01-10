import React from 'react';


const UserGroupIndexItem = ({ group }) => {
    return (
        <li>
            <div>{group.title} {group.memberCount} Members</div>
        </li>
    )
}

export default UserGroupIndexItem;