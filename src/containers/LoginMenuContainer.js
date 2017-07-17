import React, { Component } from 'react';
import LoginMenu from '../components/LoginMenu';
import axios from 'axios';


class LoginMenuContainer extends Component {

    constructor(props) {
      super(props)
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
    }

    handleUsernameChange(evt, data) {
      const username = data.value;
      this.setState({
        username
      })
    }

    handlePasswordChange(evt, data) {
      const password = data.value;
      this.setState({
        password
      })
    }

    handleLogin() {
      axios.post('http://localhost:4000/auth/login', {
        username: this.state.username,
        password: this.state.password,
      }).then(data => {
        console.log(data)
        // TODO: store user object, maybe in local storage?
        this.props.mainUI.setState({
          display: 'main'
        })
      }).catch(err => {
        console.log(err)
      })
    }

    handleSignup() {
      this.props.mainUI.setState({
        display: 'signup'
      })
    }

    render() {
      return(
        <LoginMenu
          game={this.props.game}
          onUsernameChange={this.handleUsernameChange}
          onPasswordChange={this.handlePasswordChange}
          onSignup={this.handleSignup}
          onLogin={this.handleLogin}
        />
      )
    }
}

export default LoginMenuContainer;
