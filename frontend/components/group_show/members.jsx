import React from 'react';

const Members = ({members}) => {
    if (!members) return null;
    return (
        <div>
            {members.map(member => (
                <li key={member.id}>{member.username}</li>
            ))}
        </div>
    )
}

export default Members;