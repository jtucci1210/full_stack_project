import React from 'react';
import { Link } from 'react-router-dom';


const UserGroupIndexItem = ({ group }) => {
    if (!group) return  null;

    return (
        <Link to={`/groups/${group.id}`}> 
            <div className="user-groups-index-item">
                <img className="user-group-profile-image" src={group.photoUrl} alt="Group profile" />
                <div className="user-group-index-item-content">
                    <h5>{group.title}</h5> 
                    <span>{group.members.length} Members</span>
                </div>
            </div>
        </Link>
    )
}

export default UserGroupIndexItem;