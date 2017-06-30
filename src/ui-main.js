import React, { Component } from 'react';
import config from './config';
import { Progress, Button } from 'semantic-ui-react'
import MainMenu from './components/MainMenu'
import LevelSelectionContainer from './containers/LevelSelectionContainer'
import InGameMenuContainer from './containers/InGameMenuContainer'

const style = {
    width: config.gameWidth,
    height: config.gameHeight
}

class UIMain extends Component {

    constructor(props) {
        super(props)

        this.state = {
            display: 'main',
        }
        this.handlePlayGame = this.handlePlayGame.bind(this);
        this.handleCreateRoom = this.handleCreateRoom.bind(this);
        this.handleJoinRoom = this.handleJoinRoom.bind(this);
    }

    handlePlayGame() {
        this.setState({
          display: 'levels',
        })
    }

    handleCreateRoom() {
        this.setState({
          display: 'Create Room',
          displayMainMenu: false
        })
        console.log('clicked create room')
    }

    handleJoinRoom() {
        this.setState({
          display: 'Join Room',
        })
        console.log('clicked join room')
    }


    render() {
        const isMainMenu = this.state.displayMainMenu;
        const isLevelSelection = this.state.displayLevelSelection;
        const display = this.state.display;
        let menu = null;
        if (display === 'main') {
          menu = <MainMenu onPlayGame={this.handlePlayGame} onCreateRoom={this.handleCreateRoom} onJoinRoom={this.handleJoinRoom}/>
        } else if (display === 'levels') {
          menu = <LevelSelectionContainer game={this.props.game} mainUI={this}/>
        } else if (display === 'play') {
          menu = <InGameMenuContainer game={this.props.game} mainUI={this}/>
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

export default UIMain;
