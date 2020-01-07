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
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
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
                                <select onChange={this.update('location')} className="signup-input">
                                <option selected="selected" disabled="disabled">Choose a location</option>
                                <option value={this.state.location}>San Francisco, CA</option>
                                <option value={this.state.location}>Los Angeles, CA</option>
                                <option value={this.state.location}>New York, NY</option>
                                <option value={this.state.location}>Averill Park, NY</option>
                                </select>
                        </label>
                        <br />
                        <input className="signup-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;