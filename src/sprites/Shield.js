
import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, host }) {
    super(game, x, y, asset, host)
    this.anchor.setTo(0.5, 0.5)
    this.host = host;
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.width = host.width + 10;
    this.height = host.height + 10;
  }

  update() {
    if (this.alive) {
      this.reset(this.host.x, this.host.y)
    }
  }

}
