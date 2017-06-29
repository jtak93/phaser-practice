import React, { Component } from 'react';
import LevelSelection from '../components/LevelSelection'


class LevelSelectionContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
        this.handleBackToMainMenu = this.handleBackToMainMenu.bind(this);
    }

    handleBackToMainMenu() {
      this.props.mainUI.setState({
        displayMainMenu: true,
        displayLevelSelection: false,
      })
    }


    render() {
      return(
        <LevelSelection onBackToMainMenu={this.handleBackToMainMenu}/>
      )
    }
}

export default LevelSelectionContainer;
