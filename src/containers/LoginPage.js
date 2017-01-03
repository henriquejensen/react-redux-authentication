import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "../actions/usersActions";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: ""
        }
    }

    onFormSubmit(evt) {
        evt.preventDefault();
        
        this.props.login(this.state.user);
    }

    onChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <div>
                <p>Login Page</p>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <label>User name </label>
                    <input name="user" value={this.state.user} onChange={this.onChange.bind(this)} /><br />
                    <button type="submit">Entrar</button>
                </form>

                {this.state.user}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginPage);