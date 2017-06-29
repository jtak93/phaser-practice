import 'pixi'
import 'p2'
import Phaser from 'phaser'
import React from 'react';
import ReactDOM from 'react-dom';
import UIMain from './ui-main';

import BootState from './states/Boot'
import Level1SplashState from './states/Level1/Splash'
import Level1State from './states/Level1'
import StartState from './states/Start'
import PVPState from './states/PVP'
import PVPSplashState from './states/PVPSplash'

import config from './config'


class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Start', StartState, false)
    this.state.add('Level1Splash', Level1SplashState, false)
    this.state.add('Level1', Level1State, false)
    this.state.add('PVP', PVPState, false)
    this.state.add('PVPSplash', PVPSplashState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()

// inject React DOM
ReactDOM.render(<UIMain game={window.game}/>, document.getElementById('content'));
