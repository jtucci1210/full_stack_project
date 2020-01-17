import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router-dom';

class GroupShowIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
        const { group, members, currentUser, deleteMembership, createMembership } = this.props;
        const inGroup = members.map(member => (member.id)).includes(currentUser.id)
        return (
            <div>
                <div className="group-show-page-div">
                    <img className="group-show-page-profile-image" src={group.photoUrl} alt=""/>
                    <div className="group-show-page-details">
                        <h2 className="group-show-page-title">{group.title}</h2>
                        <ul >
                            <li><i className="fas fa-map-marker-alt"></i> {group.location}</li>
                            <li><i className="fas fa-info-circle"></i> Formed {group.createdAt}</li>
                            <li><i className="fas fa-users"></i> {members.length} Members</li>
                            <li>{group.private ? <i className="fas fa-lock"> Private Group</i> : <i className="fas fa-unlock"> Public Group</i> }</li>
                        </ul>
                    </div>
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
                        <button onClick={(inGroup ? () => deleteMembership(group.id) : () => createMembership(group.id))}>
                            { inGroup ? "Leave Group" : "Join Group"}
                        </button>
                    </li>
                </ul>
                
                <Route exact path="/groups/:groupId" 
                    render={(props) => <div className="group-about">What we're about<p className="group-show-page-description">
                    {group.description}</p></div>} />
                
            </div>
        )
    }
}
export default GroupShowIndexItem;