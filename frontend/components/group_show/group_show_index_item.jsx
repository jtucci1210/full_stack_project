import React from 'react';
import { Link } from 'react-router-dom';

const GroupShowIndexItem = ({group, members, currentUser}) => {
    const inGroup = members.map(member => (member.id)).includes(currentUser)
    return (
        <div>
            <img src="" alt=""/>
            <div>
                <h2 className="group-show-page-title">{group.title}</h2>
                <ul className="group-show-page-details">
                    <li>{group.location}</li>
                    <li>{group.createdAt}</li>
                    <li>{members.length} Members</li>
                    <li>{group.private ? "Private Group" : "Public Group"}</li>
                </ul>
            </div>
            <ul className="group-show-page-tabs">
                <li>
                    <Link to={`/groups/${group.id}`}>About</Link> 
                </li>
                <li>
                    <Link to={`/groups/${group.id}/events`}>Events</Link> 
                </li>
                <li>
                    <Link to={`/groups/${group.id}/members`}>Members</Link> 
                </li>
                <li>
                    <button>
                        { inGroup ? "You're a Member" : "Join Group"}
                    </button>
                </li>
            </ul>
            {/* <div>
                <p className="group-show-page-description">{group.description}</p>
            </div> */}
        </div>
    )
}
export default GroupShowIndexItem;