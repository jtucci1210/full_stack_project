import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({ group }) => {
    
    if (!group) return null;
    return (
        <Link to={`/groups/${group.id}`}>
            <div className="group-index-item">
                <h5>{group.title}</h5> 
                {group.members.length} Members
            </div>
        </Link>
    )
}

export default GroupIndexItem