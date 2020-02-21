import React from "react";
import { fetchEvent } from "../../actions/event_actions";

class EditEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description:"",
      venue_location: "",
      start_time: "",
      end_time: "",
      cost:"",
      date:"",
      group_id: "",
      id: ""
    };
    this.eventId;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    componentDidMount() {
        this.eventId = this.props.match.params.eventId;
        this.props.fetchEvent(this.eventId)
            .then(res => {
                const { event } = this.props;
                this.setState({
                    name: event.name,
                    description: event.description,
                    venue_location: event.venueLocation,
                    start_time: event.startTime,
                    end_time: event.endTime,
                    cost: event.cost,
                    date: event.date,
                    group_id: event.groupId,
                    id: event.id
                })
            });
    }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.updateEvent(event)
      .then(res =>
        this.props.history.push(`/events/${Object.keys(res.payload.events)[0]}`)
      );
  }

  handleDelete(event) {
      this.props.deleteEvent(event.id);
      this.props.history.push(`/groups/${event.groupId}/events`);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { event } = this.props;
    if (!event) return null;
    return (
      <div className="new-event-page">
        <div className="form-img-container">
          <img
            className="new-event-image"
            src="https://feetup-seeds.s3-us-west-1.amazonaws.com/splash_image.jpg"
            alt=""
          />
          <form onSubmit={this.handleSubmit} className="event-form-box">
            <h2>Update Event</h2>
            <div className="event-errors">{this.renderErrors()}</div>
            <div className="event-form">
              <br />
              <input
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
                className="event-input"
              />
              <br />
              <input
                type="text"
                value={this.state.venue_location}
                onChange={this.update("venue_location")}
                className="event-input"
              />
              <br />
              <input
                type="text"
                value={this.state.start_time}
                onChange={this.update("start_time")}
                className="event-input"
              />
              <br />
              <input
                type="text"
                value={this.state.end_time}
                onChange={this.update("end_time")}
                className="event-input"
              />
              <br />
              <input
                type="text"
                value={this.state.cost}
                onChange={this.update("cost")}
                className="event-input"
              />
              <br />
              <input
                type="date"
                value={this.state.date}
                onChange={this.update("date")}
                className="event-input"
              />
              <br />
              <textarea
                value={this.state.description}
                onChange={this.update("description")}
                className="event-description-input"
              />
              <br />
              <div className="event-edit-buttons-div">
                <input className="event-submit" type="submit" />
                <button onClick={() => this.handleDelete(event)}
                    className="event-submit delete">Delete Event</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default EditEvent;
