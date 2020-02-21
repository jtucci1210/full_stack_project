import React from "react";
import { fetchEvent } from "../../actions/event_actions";

class EditEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.event.name,
      description: this.props.event.description,
      venue_location: this.props.event.venueLocation,
      start_time: this.props.event.startTime,
      end_time: this.props.event.endTime,
      cost: this.props.event.cost,
      date: this.props.event.date,
      group_id: this.props.event.groupId,
      id: this.props.event.id
    };
    this.eventId;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.eventId = this.props.match.params.eventId;
    this.props.fetchEvent(this.eventId);
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
                // placeholder={event.name}
                onChange={this.update("name")}
                className="event-input"
              />
              <br />
              <input
                type="text"
                value={this.state.venue_location}
                // placeholder={event.venueLocation}
                onChange={this.update("venue_location")}
                className="event-input"
              />
              <br />
              <input
                type="text"
                value={this.state.start_time}
                // placeholder={event.startTime}
                onChange={this.update("start_time")}
                className="event-input"
              />
              <br />
              <input
                type="text"
                value={this.state.end_time}
                // placeholder={event.endTime}
                onChange={this.update("end_time")}
                className="event-input"
              />
              <br />
              <input
                type="text"
                value={this.state.cost}
                // placeholder={event.cost}
                onChange={this.update("cost")}
                className="event-input"
              />
              <br />
              <input
                type="date"
                value={this.state.date}
                // placeholder={event.date}
                onChange={this.update("date")}
                className="event-input"
              />
              <br />
              <textarea
                // placeholder={event.description}
                value={this.state.description}
                onChange={this.update("description")}
                className="event-description-input"
              />
              <br />
              <input className="event-submit" type="submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default EditEvent;
