import React, { Component } from 'react';
import LevelSelection from '../components/LevelSelection'


class LevelSelectionContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
        this.handleBackToMainMenu = this.handleBackToMainMenu.bind(this);
        this.handleStart = this.handleStart.bind(this);
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
        <LevelSelection
          onBackToMainMenu={this.handleBackToMainMenu}
          onStart={this.handleStart}
          game={this.props.game}
        />
      )
    }
}

export default LevelSelectionContainer;
