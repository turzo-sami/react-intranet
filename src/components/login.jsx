import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    handleChange(event) {
        this.setState({ username: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username);
        this.nextPath('/');
        event.preventDefault();
    }

    render() {
        return (
            <div className="loginForm">

                <form onSubmit={this.handleSubmit}>
                    <label> User Name </label> 
                    <input type="text" value={this.state.username} onChange={this.handleChange} className="form-control form-control-sm"/> 
                    <button type="submit" value="Submit" className="btn btn-sm btn-primary mt-2">Login</button>
                </form>

            </div>
        );
    }
}

export default Login;