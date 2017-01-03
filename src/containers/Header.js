import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import { logOut } from "../actions/usersActions";

class Header extends Component {
    render() {
        return (
            this.props.logged_in ? 
                <nav>
                    <Link to="/users" activeClassName="active">Users</Link>
                    <Link to="/" activeClassName="active" onClick={this.props.logOut}>Log out </Link>
                </nav>
                :
                <nav>
                    <Link to="/dashboard" activeClassName="active">Log in</Link>
                </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        logged_in: state.session
    }
}

export default connect(mapStateToProps, { logOut })(Header);