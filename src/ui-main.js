import React, { Component } from 'react';
import config from './config';
import { Progress, Button } from 'semantic-ui-react'

const style = {
    width: config.gameWidth,
    height: config.gameHeight
}

class UIMain extends Component {

    constructor(props) {
        super(props)

        this.state = {
            display: 'startScreen'
        }
        this.handlePlayGame = this.handlePlayGame.bind(this);
    }
    handlePlayGame() {
        this.props.game.state.start('Splash')
        this.setState({
          display: 'Level1'
        })
    }

    render() {
        return (
            <div style={style} className="ui-main">
                <Button onClick={this.handlePlayGame}>PlayGame</Button>
            </div>
      );
    }
}

export default UIMain;
