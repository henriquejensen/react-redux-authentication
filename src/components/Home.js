import React, { Component } from "react";

import Header from "../containers/Header";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}