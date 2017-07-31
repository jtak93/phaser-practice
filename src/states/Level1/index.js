/* globals __DEV__ */
import { mainUI } from '../../main'
import Phaser from 'phaser'
import Player from '../../sprites/Player'
import Starfield from '../../tilesprites/Starfield'
import AlienBullets from '../../groups/AlienBullets'
import Bullets from '../../groups/Bullets'
import Aliens from '../../groups/Aliens'
import BasicEnemies from '../../groups/Level1Enemies/BasicEnemies'
import Lasers from '../../groups/Lasers'
import HealthBar from '../../plugins/HealthBar'

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
      playerStats: {
        weapon: {
          type: 'bullet',
          level: 1
        },
        abilities: [
          { name: 'shield', duration: Phaser.Timer.SECOND * 2, coolDownTimer: 0, coolDownDuration: Phaser.Timer.SECOND * 5 }
        ],
        maxHealth: 10,
        firingRateLevel: 1
      }
    })

    const player = this.game.add.existing(this.player)
    // set event for player death
    const deathTextStyles = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }
    player.events.onKilled.add(() => {
      this.game.add.text(this.world.centerX - 75, this.world.centerY - 50, 'You Died.', deathTextStyles)
      this.game.add.text(this.world.centerX - 175, this.world.centerY, 'Press Enter to continue.', deathTextStyles)

    }, this)


    this.starfield = new Starfield({
      game: this,
      x: 0,
      y: 0,
      width: this.world.width,
      height: this.world.height,
      key: 'starfield'
    })

    // create background and send to back
    this.game.add.existing(this.starfield)
    this.world.sendToBack(this.starfield)

    // Player bullets
    this.bullets = new Bullets({
      game: this,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE
    })

    this.game.add.existing(this.bullets)

    this.healthBar = new HealthBar({
      width: this.world.width * 0.3,
      height: this.world.height * 0.025,
      x: this.world.width * 0.65,
      y: this.world.height * 0.95,
      game: this.game,
      host: this.player,
      state: this,
      watch: {
          host: player,
          value: 'health',
          max: player.maxHealth
      }
    })

    this.game.add.existing(this.healthBar)

    this.lasers = new Lasers({
      game: this,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE
    })

    this.game.add.existing(this.lasers)

    this.basicEnemies = new BasicEnemies({
      game: this,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE
    })
    this.basicEnemy = this.basicEnemies.getTop()

    this.game.add.existing(this.basicEnemies)
    // Make aliens with rows, columns, and hp

    this.alienBullets = new AlienBullets({
      game: this,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE,
      damage: 1
    })

    // Create Inputs
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keyInputs = this.input.keyboard.addKeys({
      'Q': Phaser.KeyCode.Q,
      'W': Phaser.KeyCode.W,
      'E': Phaser.KeyCode.E,
      'P': Phaser.KeyCode.P,
      'ENTER': Phaser.KeyCode.ENTER,
    })
    this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  }

  update () {
    if (!this.player.alive) {
      if (this.keyInputs.ENTER.justUp) {
        //TODO: need to make it so it goes back to level selection
        // mainUI.setDisplay('levels')
        this.game.state.start('Level1Splash')
      }
    }
  }

  render () {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.player, 32, 32)
    // }
  }
}
