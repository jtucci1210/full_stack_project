import React from 'react';
import { Link } from 'react-router-dom';


const UserGroupIndexItem = ({ group }) => {
    // debugger;
    if (!group) return  null;
    return (
        <Link to={`/groups/${group.id}`} >
            <div className="user-groups-index-item">
                <h5>{group.title}</h5> 
                <span>{group.members.length} Members</span>
            </div>
        </Link>
    )
}

export default UserGroupIndexItem;