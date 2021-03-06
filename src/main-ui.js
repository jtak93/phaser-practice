import React, { Component } from 'react';
import config from './config';
import { Progress, Button } from 'semantic-ui-react'
import LoginMenuContainer from './containers/LoginMenuContainer'
import SignupContainer from './containers/SignupContainer'
import MainMenuContainer from './containers/MainMenuContainer'
import LevelSelectionContainer from './containers/LevelSelectionContainer'
import InGameMenuContainer from './containers/InGameMenuContainer'
import CreateRoomMenuContainer from './containers/CreateRoomMenuContainer'

const style = {
    width: config.gameWidth,
    height: config.gameHeight
}

class MainUI extends Component {

    constructor(props) {
      super(props)

      this.state = {
          display: 'play',
          user: null,
      }

      this.setDisplay = this.setDisplay.bind(this)
    }

    setDisplay(display) {
      this.setState({
        display
      })
    }

    render() {
        const isMainMenu = this.state.displayMainMenu;
        const isLevelSelection = this.state.displayLevelSelection;
        const display = this.state.display;
        let menu = null;
        // TODO: refactor this into a switch statement or something better
        if (display === 'login') {
          menu = <LoginMenuContainer game={this.props.game} mainUI={this} />
        } else if (display === 'signup') {
          menu = <SignupContainer game={this.props.game} mainUI={this}/>
        } else if (display === 'main') {
          menu = <MainMenuContainer game={this.props.game} mainUI={this}/>
        } else if (display === 'levels') {
          menu = <LevelSelectionContainer game={this.props.game} mainUI={this}/>
        } else if (display === 'play') {
          menu = <InGameMenuContainer game={this.props.game} mainUI={this}/>
        } else if (display === 'create room') {
          menu = <CreateRoomMenuContainer game={this.props.game} mainUI={this}/>
        } else {
          // TODO: add more ui
          menu = <h1>hello</h1>
        }
        return (
            <div style={style} className="ui-main">
                { menu }
            </div>
      );
    }
}

export default MainUI;
