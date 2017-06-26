import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('starfield', 'assets/images/starfield.png')
    this.load.image('player', 'assets/images/Ship.png')
    this.load.image('bullet', 'assets/images/bullet.png')
    this.load.image('laser', 'assets/images/laser2.png')
    this.load.image('alien-bullet', 'assets/images/enemy-bullet.png')
    game.load.spritesheet('invader', 'assets/images/invader32x32x4.png', 32, 32);
  }

  create () {
    this.state.start('Level1')
  }
}
