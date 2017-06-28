import React, { Component } from 'react';
import config from './config';
import { Progress, Button } from 'semantic-ui-react'
import MainMenu from './components/MainMenu'

const style = {
    width: config.gameWidth,
    height: config.gameHeight
}

class UIMain extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayMainMenu: true,
            display: 'startScreen',
        }
        this.handlePlayGame = this.handlePlayGame.bind(this);
        this.handleCreateRoom = this.handleCreateRoom.bind(this);
        this.handleJoinRoom = this.handleJoinRoom.bind(this);
    }
    
    handlePlayGame() {
        this.setState({
          display: 'Level1',
          displayMainMenu: false
        })
        this.props.game.state.start('Splash')
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
          displayMainMenu: false
        })
        console.log('clicked join room')
    }

    render() {
        const isMainMenu = this.state.displayMainMenu;
        let menu = null;
        if (isMainMenu) {
          menu = <MainMenu onPlayGame={this.handlePlayGame} onCreateRoom={this.handleCreateRoom} onJoinRoom={this.handleJoinRoom}/>
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
