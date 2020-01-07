import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            bio: '',
            location: 'San Francisco, CA'
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
                    Welcome to Feetup!
          <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="signup-form">
                        <br />
                        <label>Username:
                                <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                                <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <label>Email:
                                <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <label>Bio:
                                <textarea
                                placeholder="optional"
                                value={this.state.bio}
                                onChange={this.update('bio')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <label>Location:
                                <select onChange={this.update('location')} className="signup-input">
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