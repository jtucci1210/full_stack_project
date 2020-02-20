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
            date: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);

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

    render(){

        return (
            <form action="">

            </form>
        )
    }
}
export default NewEvent;