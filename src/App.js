import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchUser } from "./actions/usersActions";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      data: "",
      error: false
    }
  }

  onChangeInput(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.props.searchUser(this.state.name);

    this.setState({
      name: ""
    })    

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <label>
              Digite
            </label>
            <input placeholder="Type the github user name" name="name" value={this.state.name} onChange={this.onChangeInput.bind(this)} />
            <button type="submit">Procurar</button>
          </form>
        </div> 

        {this.props.users.error ? <div id="error">User not found</div> : ""}<br/>

        <p className="App-intro">
          {this.props.users ? 
            this.props.users.data.map((user, i) => {
              return (
                <div key={i} className="App-card">
                  <a href={user.html_url} target="_blank" >
                    <img src={user.avatar_url} width="80" role="presentation" />
                  </a>
                  <p>id: {user.id}</p>
                  <p>Name: {user.name}</p>
                  <p>Type: {user.type}</p>
                  <p>login: {user.login}</p>
                  <p>Repos: {user.public_repos}</p>
                </div>
              )
            })
            : ""}

        
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
