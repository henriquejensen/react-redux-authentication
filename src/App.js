import React, { Component } from 'react';
import axios from "axios";
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

    let response = 
                axios.get("https://api.github.com/users/"+this.state.name)
                      .then((response) => {
                        this.setState({
                          data: response.data,
                          error: false
                        })
                      })
                      .catch((error) => {
                        this.setState({
                          data: "",
                          error: true
                        })
                      });

    console.log(response);

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
            <input placeholder="Digite o nome do usuário" name="name" value={this.state.name} onChange={this.onChangeInput.bind(this)} />
            <button type="submit">Procurar</button>
          </form>
        </div> 
        <p className="App-intro">
          {this.state.data !== "" ? 
            <div>
              <img src={this.state.data.avatar_url} width="80" role="presentation" />
              <p>id: {this.state.data.id}</p>
              <p>Name: {this.state.data.name}</p>
              <p>Type: {this.state.data.type}</p>
              <p>login: {this.state.data.login}</p>
              <p>Repos: {this.state.data.public_repos}</p>
            </div> : ""}

        {this.state.error ? <div>User not found</div> : ""}
        </p>
      </div>
    );
  }
}

export default App;
