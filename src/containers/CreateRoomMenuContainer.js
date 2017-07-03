import React, { Component } from 'react';
import CreateRoomMenu from '../components/CreateRoomMenu'


class CreateRoomMenuContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
        this.handleBackToMainMenu = this.handleBackToMainMenu.bind(this);
    }

    handleBackToMainMenu() {
      console.log('back to main menu')
      this.props.mainUI.setState({
        display: 'main'
      })
    }

    handleStart(level) {
      console.log('start level')
      this.props.mainUI.setState({
        display: 'play',
      })
      this.props.game.state.start(`Level${level}Splash`)
    }


    render() {
      return(
        <CreateRoomMenu
          onBackToMainMenu={this.handleBackToMainMenu}
          game={this.props.game}
        />
      )
    }
}

export default CreateRoomMenuContainer;
