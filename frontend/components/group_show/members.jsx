import React from 'react';

const Members = ({members}) => {
    if (!members) return null;
    return (
        <div>
            {members.map(member => (
                <li key={member.id}>
                    <h4 className="member-username-header">{member.username}</h4>
                    <span className="member-join-date">{member.createdAt}</span>
                </li>
            ))}
        </div>
    )
}

export default Members;