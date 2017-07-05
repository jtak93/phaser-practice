import React, { Component } from 'react';
import CreateRoomMenu from '../components/CreateRoomMenu'


class CreateRoomMenuContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
        this.handleBackToMainMenu = this.handleBackToMainMenu.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCreateRoom = this.handleCreateRoom.bind(this);
    }

    handleBackToMainMenu() {
      this.props.mainUI.setState({
        display: 'main'
      })
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

    handleCreateRoom() {
      console.log('create room clicked')
    }

    render() {
      return(
        <CreateRoomMenu
          onBackToMainMenu={this.handleBackToMainMenu}
          onNameChange={this.handleNameChange}
          onPasswordChange={this.handlePasswordChange}
          onCreateRoom={this.handleCreateRoom}
          game={this.props.game}
        />
      )
    }
}

export default CreateRoomMenuContainer;
