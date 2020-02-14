import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchAllGroups();
    }

    displaySampleGroups() {
        if (this.props.groups.length > 0) {
            const groups = this.props.groups.slice(0, 4);
            return (
                groups.map(group => (
                        <Link to={`/groups/${group.id}`} key={group.id}>
                            <div className="sample-group">
                                <img className="sample-group-img" src={group.photoUrl} alt="Group profile" />
                                <div className="sample-group-div">
                                    <h5 className="sample-group-header">{group.title}</h5>
                                    <span className="sample-group-events">{group.events.length} Upcoming Events</span>
                                    <span className="sample-group-members">{group.members.length} Members</span>
                                </div>
                            </div>
                        </Link>
                    )
                )
            )
        }
    }

    displaySampleEvents() {
        if (this.props.groups.length > 0) {
            const events = this.props.events.slice(0, 3);
            return (
                events.map(event => (
                    <Link to={`/${event.group}/events/${event.id}`} key={event.id}>
                        <div className="sample-event-div">
                            <span className="sample-event-date">{event.date}</span>
                            <span className="sample-event-title">{event.name}</span>
                            <span className="sample-event-group">{event.group}</span>
                            <span className="sample-event-location"><i className="fas fa-map-marker-alt"></i> {event.venueLocation}</span>
                            <span className="sample-event-attendees">{event.attendees}</span>
                        </div>
                    </Link>
                ))
            )
        }
    }

    render () {
        const { openModal } = this.props;
        return (
            <div>
                <div className="splash-image-box">
                    <img className="splash-image" src="https://feetup-seeds.s3-us-west-1.amazonaws.com/splash_image.jpg" alt=""/>
                    <div className="splash-image-box-container">
                        <div className="splash-image-box-contents">
                            <span className="splash-image-box-header">
                                The real world is scary
                            </span>
                            <span className="splash-image-box-details">
                                Join a group to stay in and meet people from the comfort of your home.
                            </span>
                            <button className="splash-image-box-button" onClick={() => openModal('signup')}>
                                Join FeetUp
                            </button>
                        </div>
                    </div>
                </div>
                <div className="splash-page-events">
                    <span>Events Near You</span>
                    <div className="sample-events">
                        {this.displaySampleEvents()}
                    </div>
                </div>
                <div className="splash-page-groups">
                    <span>Groups Near You</span>
                    <div className="sample-groups">
                        {this.displaySampleGroups()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;