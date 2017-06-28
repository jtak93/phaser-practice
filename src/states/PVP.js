/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import EnemyPlayer from '../sprites/EnemyPlayer'
import Starfield from '../tilesprites/Starfield'
import Bullets from '../groups/Bullets'
import Lasers from '../groups/Lasers'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // Create Player 1 Ship
    this.player1 = new Player({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY + 200,
      asset: 'player1',
      weaponLevel: 4,
      maxHealth: 100,
      firingRateLevel: 1
    })

    this.game.add.existing(this.player1)

    // Create Player 2 Ship
    this.player2 = new EnemyPlayer({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY - 100,
      asset: 'player2',
      weaponLevel: 1,
      maxHealth: 100,
      firingRateLevel: 1
    })

    this.game.add.existing(this.player2)

    this.starfield = new Starfield({
      game: this,
      x: 0,
      y: 0,
      width: this.world.width,
      height: this.world.height,
      key: 'starfield'
    })

    // creat background and send to back
    this.game.add.existing(this.starfield)
    this.world.sendToBack(this.starfield)

    // Create Inputs
    this.cursors = this.input.keyboard.createCursorKeys();
    this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.player1, 32, 32)
    }
  }
}
