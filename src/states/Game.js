/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import Starfield from '../tilesprites/Starfield'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.player = new Player({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'player'
    })

    this.starfield = new Starfield({
      game: this,
      x: 0,
      y: 0,
      width: 760,
      height: 400,
      key: 'starfield'
    })

    this.game.add.existing(this.player)
    // creat background and send to back
    this.game.add.existing(this.starfield)
    this.world.sendToBack(this.starfield)
    this.cursors = this.input.keyboard.createCursorKeys();


  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}
