/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import Starfield from '../tilesprites/Starfield'
import AlienBullets from '../groups/AlienBullets'
import Bullets from '../groups/Bullets'
import Aliens from '../groups/Aliens'
import Lasers from '../groups/Lasers'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // Create Player Ship
    this.player = new Player({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY + 150,
      asset: 'player',
      weaponLevel: 4,
      firingRateLevel: 1
    })

    this.game.add.existing(this.player)

    this.starfield = new Starfield({
      game: this,
      x: 0,
      y: 0,
      width: 760,
      height: 400,
      key: 'starfield'
    })

    // creat background and send to back
    this.game.add.existing(this.starfield)
    this.world.sendToBack(this.starfield)

    // Player bullets
    this.bullets = new Bullets({
      game: this,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE
    })

    this.game.add.existing(this.bullets)

    this.lasers = new Lasers({
      game: this,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE
    })

    this.game.add.existing(this.lasers)

    this.aliens = new Aliens({
      game: this,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE
    })

    this.game.add.existing(this.aliens)
    // Make aliens with rows, columns, and hp
    this.aliens.createAliens(3, 10, 100)

    this.alienBullets = new AlienBullets({
      game: this,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE
    })

    // Create Inputs
    this.cursors = this.input.keyboard.createCursorKeys();
    this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}
