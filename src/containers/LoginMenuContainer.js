import React, { Component } from 'react';
import LoginMenu from '../components/LoginMenu'


class LoginMenuContainer extends Component {

    constructor(props) {
      super(props)
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
    }

    handleNameChange(evt, data) {
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
      console.log('sign up')
    }

    render() {
      return(
        <LoginMenu
          game={this.props.game}
          onNameChange={this.handleNameChange}
          onPasswordChange={this.handlePasswordChange}
          onSignup={this.handleSignup}
        />
      )
    }
}

export default LoginMenuContainer;
