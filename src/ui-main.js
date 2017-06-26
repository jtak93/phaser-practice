import React, { Component } from 'react';
import config from './config';
import { Progress, Button } from 'semantic-ui-react'

const style = {
    width: config.gameWidth,
    height: config.gameHeight
}

let HPBar;

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

    componentWillReceiveProps(nextProps) {
      console.log('comp will update')
      if (nextProps.game.state.states.Level1.player)
        this.setState({
          startingHP: this.props.game.state.states.Level1.player.startingHP,
          hp: this.props.game.state.states.Level1.player.hp
        })
    }

    render() {
        console.log('render')
        if (this.state.display === 'Level1' && window.game.state.states.Level1.player) {
          console.log('player', window.game.state.states.Level1.player)
          const START_HP = this.state.startingHP;
          const HP = this.state.hp
          HPBar = <Progress color='red' percent={ HP / START_HP * 100 } />
        }
        console.log(this.props.game)
        // const percent = this.props.game.
        return (
            <div style={style} className="ui-main">
                <Button onClick={this.handlePlayGame}>PlayGame</Button>
                {HPBar}
            </div>
      );
    }
}

export default UIMain;
