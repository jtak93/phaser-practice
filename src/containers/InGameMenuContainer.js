import React, { Component } from 'react';
import InGameMenu from '../components/InGameMenu'

class InGameMenuContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isPaused: false
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handlePauseKeyDown = this.handlePauseKeyDown.bind(this);
    this.togglePauseGame = this.togglePauseGame.bind(this);
  }

  componentDidMount() {
    // create pause hotkey
     window.addEventListener("keydown", this.handlePauseKeyDown);
  }

  handlePauseKeyDown(event) {
    // check for user pressing 'p'
    if (event.keyCode === 80) {
      this.togglePauseGame()
      this.setState({
        isPaused: !this.state.isPaused
      })
    }
  }

  handleMenuClick() {
    this.togglePauseGame()
    this.setState({
      isPaused: !this.state.isPaused
    })
  }

  togglePauseGame() {
    this.props.game.paused = !this.props.game.paused;
  }

  render() {
    return(
      <InGameMenu
        onMenuClick={this.handleMenuClick}
        isPaused={this.state.isPaused}
      />
    )
  }
}

export default InGameMenuContainer;
