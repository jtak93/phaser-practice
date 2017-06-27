import 'pixi'
import 'p2'
import Phaser from 'phaser'
import React from 'react';
import ReactDOM from 'react-dom';
import UIMain from './ui-main';

import BootState from './states/Boot'
import SplashState from './states/Splash'
import Level1State from './states/Level1'
import StartState from './states/Start'

import config from './config'
import io from 'socket.io-client';
var socket = io('http://localhost:4000');
socket.emit('user connected', { clientId: socket.id})
socket.on('test', function(data) {
  console.log(data)
})

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Start', StartState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Level1', Level1State, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
ReactDOM.render(<UIMain game={window.game}/>, document.getElementById('content'));
