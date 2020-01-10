import React from 'react';
import { Link } from 'react-router-dom';

const GroupShowIndexItem = ({group, members, currentUser}) => {
    return (
        <div>
            <div>
                <h2 className="group-show-page-title">{group.title}</h2>
                <ul className="group-show-page-details">
                    <li>{group.location}</li>
                    <li>{group.createdAt}</li>
                    <li>{members.length} Members</li>::after
                    <li>{group.private ? "Private Group" : "Public Group"}</li>
                </ul>
            </div>
            <ul className="group-show-page-tabs">
                <li>
                    <Link to="">About</Link> 
                </li>
                <li>
                    <Link to="">Events</Link> 
                </li>
                <li>
                    <Link to="">Members</Link> 
                </li>
                <li>
                    <button>
                        {members.map(member => (member.id)).includes(currentUser) 
                        ? "You're a Member" 
                        : "Join Group"}
                    </button>
                </li>
            </ul>
            <div>
                <p className="group-show-page-description">{group.description}</p>
                {members.map(member => (
                    <li key={member.id}>{member.username}</li>
                ))}
            </div>
        </div>
    )
}
export default GroupShowIndexItem;