import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h2>Welcome to Feetup</h2>
          <br />
                    <div className="login-errors">{this.renderErrors()}</div>
                    <div className="login-form">
                        <br />
                                <input type="text"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        <br />
                                <input type="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;