import React, { Component } from 'react';
import config from './config'

const style = {
  width: config.gameWidth,
  height: config.gameHeight
}

class UIMain extends Component {
  render() {
    return (
      <div style={style} className="ui-main">
        <button onClick={() => {window.game.state.start('Splash')}}>Play Game</button>
      </div>
    );
  }
}

export default UIMain;
