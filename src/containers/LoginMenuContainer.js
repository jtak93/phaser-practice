import React, { Component } from 'react';
import LoginMenu from '../components/LoginMenu'


class LoginMenuContainer extends Component {

    constructor(props) {
      super(props)
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
    }

    handleUsernameChange(evt, data) {
      const name = data.value;
      this.setState({
        name
      })
    }

    handlePasswordChange(evt, data) {
      const password = data.value;
      this.setState({
        password
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
        />
      )
    }
}

export default LoginMenuContainer;