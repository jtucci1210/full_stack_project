import React from 'react';
import { NavLink } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchAllGroups();
    }
    
    render () {
        // debugger;
        const { groups, currentUser } = this.props;
        if (!groups || !currentUser) return null;
        const groupCount = groups.filter(group => (group.members).includes(currentUser.id))
        // debugger;
        return (
            <div className="profile-page">
                <div className="profile-box">
                    <div className="profile-info-div">
                        <h2 className="profile-member-name-header">
                            {currentUser.username}
                        </h2>
                        <div className="profile-member-details">
                            <div className="profile-member-location">
                                <h4>Location</h4>
                                <span>{currentUser.location}</span>
                            </div>
                            <div className="profile-member-date">
                                <h4>FeetUp member since</h4>
                                <span>{currentUser.createdAt}</span>
                            </div>
                        </div>
                        <p className="profile-bio">
                            {currentUser.bio ? currentUser.bio : "No Bio Provided"}
                        </p>
                        <h2 className="profile-member-groups-header">
                            Member of {groupCount.length} FeetUp Groups
                        </h2>
                        <div className="profile-member-groups-div">
                            {groupCount.map(group => (
                                <div key={group.id}>
                                    {group.title}
                                    <br/>
                                    Member
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="profile-image-div">
                        <i className="fas fa-user-circle"></i>
                    </div>
    
                </div>
            </div>
        )
    }
}


export default UserShow;