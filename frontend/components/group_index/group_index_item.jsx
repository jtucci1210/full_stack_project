import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({ group }) => {
    
    if (!group) return null;
    return (
        <Link to={`/groups/${group.id}`}>
            <div className="group-index-item">
                <img className="group-index-profile-image" src={group.photoUrl} alt="Group profile" />
                <div className="group-index-item-content">
                    <h5>{group.title}</h5> 
                    <span>{group.members.length} Members</span>
                </div>
            </div>
        </Link>
    )
}

export default GroupIndexItem