import React, { Component } from 'react';
import MainMenu from '../components/MainMenu';

class MainMenuContainer extends Component {

  constructor(props) {
    super(props)

    this.handlePlayGame = this.handlePlayGame.bind(this);
    this.handleCreateRoom = this.handleCreateRoom.bind(this);
    this.handleJoinRoom = this.handleJoinRoom.bind(this);
}

  handlePlayGame() {
    this.props.mainUI.setState({
      display: 'levels',
    })
  }

  handleCreateRoom() {
    this.props.mainUI.setState({
      display: 'create room',
    })
    console.log('clicked create room')
  }

  handleJoinRoom() {
    this.props.mainUI.setState({
      display: 'Join Room',
    })
    console.log('clicked join room')
  }

  render() {
    return(
      <MainMenu
        onPlayGame={this.handlePlayGame}
        onCreateRoom={this.handleCreateRoom}
        onJoinRoom={this.handleJoinRoom}
        game={this.props.game}
      />
    )
  }
}

export default MainMenuContainer;
