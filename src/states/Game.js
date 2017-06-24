/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import Starfield from '../tilesprites/Starfield'
import Bullets from '../groups/Bullets'
import Aliens from '../groups/Aliens'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.player = new Player({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY + 150,
      asset: 'player',
      weaponLevel: 2,
      firingRateLevel: 1
    })

    this.starfield = new Starfield({
      game: this,
      x: 0,
      y: 0,
      width: 760,
      height: 400,
      key: 'starfield'
    })

    this.bullets = new Bullets({
      game: this,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE
    })

    this.aliens = new Aliens({
      game: this,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE
    })

    this.game.add.existing(this.player)
    // creat background and send to back
    this.game.add.existing(this.starfield)
    this.game.add.existing(this.bullets)
    this.game.add.existing(this.aliens)
    this.aliens.createAliens()
    this.world.sendToBack(this.starfield)
    this.cursors = this.input.keyboard.createCursorKeys();
    this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}
