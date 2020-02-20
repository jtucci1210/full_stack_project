import React from 'react';


class NewEvent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            venueLocation: '',
            startTime: '',
            endTime: '',
            cost: '',
            date: '',
            groupId: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {
        const groupId = this.props.match.params.groupId;
        this.setState({
            groupId: groupId
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const event = Object.assign({}, this.state);
        this.props.createEvent(event)
            .then(<Link to={`/events/${event.id}`}></Link>)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){

        return (
            <div className="new-event-page">
                <img className="new-event-image" src="https://feetup-seeds.s3-us-west-1.amazonaws.com/splash_image.jpg" alt="" />
                <form onSubmit={this.handleSubmit} className="event-form-box">
                    <h2>Create a New Event</h2>
                    <div className="event-errors">{this.renderErrors()}</div>
                    <div className="event-form">
                        <br/>
                        <input type="text"
                            value={this.state.name}
                            placeholder="Event name"
                            onChange={this.update('name')}
                            className="event-input"/>
                        <br/>
                        <input type="text"
                            value={this.state.venueLocation}
                            placeholder="Event location"
                            onChange={this.update('venueLocation')}
                            className="event-input"/>
                        <br/>
                        <input type="text"
                            value={this.state.startTime}
                            placeholder="Event start time"
                            onChange={this.update('startTime')}
                            className="event-input"/>
                        <br/>
                        <input type="text"
                            value={this.state.endTime}
                            placeholder="Event end time"
                            onChange={this.update('endTime')}
                            className="event-input"/>
                        <br/>
                        <input type="text"
                            value={this.state.cost}
                            placeholder="Event cost"
                            onChange={this.update('cost')}
                            className="event-input"/>
                        <br />
                        <textarea
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.update('description')}
                            className="event-description-input"/>
                    </div>
                </form>

            </div>
        )
    }
}
export default NewEvent;