import React, { Component } from 'react';
import axios from "axios";



export default class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
       isLoggedIn: false
    };

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  ComponentDidMount(){
    console.log(this.state)
    if(this.props.isLoggedIn) {
      this.setState({isLoggedIn: true})
    }
  }

  setUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  setPassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleLogin(event) {
    console.log('hello')
    console.log(this.state.username, this.state.password)
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(function (response) {
        console.log(response);
      })
  }
  render() {
    return (

        <div className="container jumbotron bg-white">
          <div className="row justify-content-center align-items-center">
            <div className="col-4 align-self-center">
          <h4>Login</h4>
          <div className="input-group mb-3">
          <input
            className="rounded form-control"
            value={this.state.username}
            type="text"
            placeholder="username"
            onChange={this.setUsername} />
          <br></br>
          </div>
          <div className="input-group mb-3">
          <input
            className="rounded form-control"
            value={this.state.password}
            type="text"
            placeholder="password"
            onChange={this.setPassword} />
          <br></br>
          </div>
          <button className="btn btn-light"  onClick={this.handleLogin}>Login</button>
          <hr className="my-4"/>
          <div>
            <a className="btn btn-primary" href="auth/google">Log in with Google</a>
          </div>
          </div>
          </div>
        </div>
    )
  }
}
