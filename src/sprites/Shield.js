
import Phaser from 'phaser-ce'

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
      // interpolate for movement
      if ( this.host.body.velocity.x || this.host.body.velocity.y ) {
        const xVelocity = this.host.body.velocity.x;
        const yVelocity = this.host.body.velocity.y;
        this.reset(this.host.x + (xVelocity/50), this.host.y + (yVelocity/50))
      } else {
        this.reset(this.host.x, this.host.y)
      }
    }
  }

}
