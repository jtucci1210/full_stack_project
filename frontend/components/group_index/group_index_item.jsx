import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({group, members}) => {
    return (
        <div>
            <Link to={`/groups/${group.id}`}>{group.title} {members.length} Members</Link>
        </div>
    )
}

export default GroupIndexItem