import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5, 0.5)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
  }

  update() {
    if (this.alive) {
      this.body.velocity.y = 20
    }
  }

}
