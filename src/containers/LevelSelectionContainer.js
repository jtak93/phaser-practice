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
      this.props.mainUI.setState({
        displayMainMenu: true,
        displayLevelSelection: false,
      })
    }

    handleStart(level) {
      this.props.game.state.start(`Level${level}Splash`)
      this.props.mainUI.setState({
        displayLevelSelection: false,
      })
    }


    render() {
      return(
        <LevelSelection
          onBackToMainMenu={this.handleBackToMainMenu}
          onStart={this.handleStart}
        />
      )
    }
}

export default LevelSelectionContainer;
