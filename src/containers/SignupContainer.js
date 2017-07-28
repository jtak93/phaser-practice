import React, { Component } from 'react';
import Signup from '../components/Signup'
import axios from 'axios'

class SignupContainer extends Component {

    constructor(props) {
      super(props)
      this.state = {
        errorMessage: '',
        hideError: true
      }
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
      this.handleBackToLogin = this.handleBackToLogin.bind(this);
    }

    handleUsernameChange(evt, data) {
      const username = data.value;
      this.setState({
        username
      })
    }

    handleEmailChange(evt, data) {
      const email = data.value;
      this.setState({
        email
      })
    }

    handlePasswordChange(evt, data) {
      const password = data.value;
      this.setState({
        password
      })
    }

    handlePasswordConfirmChange(evt, data) {
      const passwordConfirm = data.value;
      this.setState({
        passwordConfirm
      })
    }

    handleSignup() {
      axios.post('http://localhost:4000/auth/register', {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      }).then(data => {
        // TODO:save user data locally
        this.props.mainUI.setState({
          display: 'main'
        })
        console.log(data)
      }).catch(err => {
        console.log(err.response)
        this.setState({
          errorMessage: err.response.data.message,
          hideError: false
        })
      })
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
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onPasswordConfirmChange={this.handlePasswordConfirmChange}
          onSignup={this.handleSignup}
          backToLogin={this.handleBackToLogin}
          errorMessage={this.state.errorMessage}
          hideError={this.state.hideError}
        />
      )
    }
}

export default SignupContainer;
