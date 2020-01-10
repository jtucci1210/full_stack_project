import React from 'react';

const GroupShowIndexItem = ({group, members}) => {
    return (
        <div>
            <div>
                <h2 className="group-show-page-title">{group.title}</h2>
                <ul>
                    <li>{group.location}</li>
                    <li>{group.createdAt}</li>
                    <li>{members.length} Members</li>::after
                    <li>{group.private ? "Private Group" : "Public Group"}</li>
                </ul>
            </div>
            <div>
                <p className="group-show-page-description">{group.description}</p>
            </div>
            <div>
                {members.map(member => (
                    <li key={member.id}>{member.username}</li>
                ))}
            </div>
        </div>
    )
}
export default GroupShowIndexItem;