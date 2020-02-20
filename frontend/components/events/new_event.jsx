import React from 'react';
import TinyDatePicker from "tiny-date-picker";
import { Link } from 'react-router-dom';


class NewEvent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            venue_location: '',
            start_time: '',
            end_time: '',
            cost: '',
            date: '',
            group_id: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        const groupId = Number(this.props.match.params.groupId);
        this.setState({
            group_id: groupId
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
                <img
                    className="new-event-image"
                    src="https://feetup-seeds.s3-us-west-1.amazonaws.com/splash_image.jpg"
                    alt=""
                />
                <form onSubmit={this.handleSubmit} className="event-form-box">
                    <h2>Create a New Event</h2>
                    <div className="event-errors">{this.renderErrors()}</div>
                    <div className="event-form">
                        <br />
                        <input
                            type="text"
                            value={this.state.name}
                            placeholder="Event name"
                            onChange={this.update("name")}
                            className="event-input"
                        />
                        <br />
                        <input
                            type="text"
                            value={this.state.venue_location}
                            placeholder="Event location"
                            onChange={this.update("venue_location")}
                            className="event-input"
                        />
                        <br />
                        <input
                            type="text"
                            value={this.state.start_time}
                            placeholder="Event start time"
                            onChange={this.update("start_time")}
                            className="event-input"
                        />
                        <br />
                        <input
                            type="text"
                            value={this.state.end_time}
                            placeholder="Event end time"
                            onChange={this.update("end_time")}
                            className="event-input"
                        />
                        <br />
                        <input
                            type="text"
                            value={this.state.cost}
                            placeholder="Event cost"
                            onChange={this.update("cost")}
                            className="event-input"
                        />
                        <br />
                        <input
                            type="date"
                            value={this.state.date}
                            placeholder="Event date"
                            onChange={this.update("date")}
                            className="event-input"
                        />
                        <br />
                        <textarea
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.update("description")}
                            className="event-description-input"
                        />
                        <br/>
                        <input className="event-submit" type="submit"/>

                    </div>
                </form>
            </div>
        );
    }
}
export default NewEvent;