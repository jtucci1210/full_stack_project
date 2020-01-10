import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({group}) => {
    return (
        <div>
            <Link to={`/groups/${group.id}`}>{group.title} {group.members.length} Members</Link>
        </div>
    )
}

export default GroupIndexItem