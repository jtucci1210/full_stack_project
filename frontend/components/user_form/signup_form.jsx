import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            bio: '',
            location: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    handleDemo(e) {
        let demoUser = {
            email: "demo@gmail.com",
            password: "123456"
        };
        this.setState(demoUser)
        this.props.login(demoUser).then(this.props.closeModal);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user).then(this.props.closeModal);
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

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <h2>Welcome to Feetup</h2>
          <br />
                    <div className="signup-errors">{this.renderErrors()}</div>
                    <div className="signup-form">
                        <br />
                                <input type="text"
                                placeholder="Choose username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="signup-input"
                            />
                        <br />
                                <input type="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                            />
                        <br />
                                <input type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"
                            />
                        <br />
                                <textarea
                                placeholder="Bio (optional)"
                                value={this.state.bio}
                                onChange={this.update('bio')}
                                className="signup-input"
                            />
                        <br />
                        <label>
                            <br/>
                                <select 
                                    value={this.state.location ? this.state.location : "Choose a location"}
                                    onChange={(e) => this.setState({location: e.target.value})} 
                                    className="signup-input">
                                    <option value="Choose a location" disabled>Choose a location</option>
                                    <option value="San Francisco, CA">San Francisco, CA</option>
                                    <option value="Los Angeles, CA">Los Angeles, CA</option>
                                    <option value="New York, NY">New York, NY</option>
                                    <option value="Averill Park, NY">Averill Park, NY</option>
                                </select>
                        </label>
                        <br />
                        <div className="session-buttons-div">
                            <input className="signup-submit" type="submit" value={this.props.formType} />
                            <input onClick={this.handleDemo} className="login-demo-user" type="submit" value="Demo" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;