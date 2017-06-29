
import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5, 0.5)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.firingTimer = this.game.time.now + Phaser.Math.random(0, 10000);
  }

  update() {
    if (this.alive) {
      this.game.physics.arcade.overlap(this.game.bullets, this, this.bulletCollisionHandler, null, this.game);
      if (this.game.time.now > this.firingTimer) {

          this.fireBullet();

      }
    }
  }

  bulletCollisionHandler (bullet, alien) {

    //  When a bullet hits an alien reduce hp by 50
    if (alien.alive) alien.health -= 50;
    if (alien.health <= 0) alien.kill()
    bullet.kill();

  }

  fireBullet() {
    this.alienBullet = this.game.alienBullets.getFirstExists(false);
    if (this.alienBullet) {
      let shooter = this;
      this.alienBullet.reset(shooter.body.x, shooter.body.y);
      this.game.physics.arcade.moveToObject(this.alienBullet, this.game.player,120);
      this.firingTimer += 1000;
    }
  }

}
