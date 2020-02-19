import React from 'react';


class EventShow extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId)
    }

    render () {
        const { event } = this.props;
        if (!event) return null;
        return (
            <div>
                <div className="event-show-top">
                    <span>{event.date}</span>
                    <span>{event.name}</span>
                    <div>
                        <i className="fas fa-info-circle"></i>
                        <div>
                            <span>Hosted by</span>
                            <span>{event.group}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventShow;