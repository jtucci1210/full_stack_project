import React from 'react';

const Members = ({members}) => {
    if (!members) return null;
    return (
        <div className="members-div">
            <div>
                <h3>All members</h3>
            </div>
            <div className="members-div-items">
            {members.map(member => (
                <li key={member.id}>
                    <i className="fas fa-user-circle"></i>
                    <div className="members-div-content">
                        <h4 className="member-username-header">{member.username}</h4>
                        <span className="member-join-date">Joined on {member.createdAt}</span>
                    </div>
                </li>
            ))}
            </div>
        </div>
    )
}

export default Members;