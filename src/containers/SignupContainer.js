import React, { Component } from 'react';
import Signup from '../components/Signup'


class SignupContainer extends Component {

    constructor(props) {
      super(props)
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
      this.handleBackToLogin = this.handleBackToLogin.bind(this);
    }

    handleUsernameChange(evt, data) {
      const name = data.value;
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

    handleSignup() {
      console.log('sign up')
    }

    handleBackToLogin() {
      this.props.mainUI.setState({
        display: 'login'
      })
    }

    render() {
      return(
        <Signup
          game={this.props.game}
          onUsernameChange={this.handleUsernameChange}
          onPasswordChange={this.handlePasswordChange}
          onSignup={this.handleSignup}
          backToLogin={this.handleBackToLogin}
        />
      )
    }
}

export default SignupContainer;
