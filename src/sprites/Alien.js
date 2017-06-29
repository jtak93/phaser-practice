
import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, health}) {
    super(game, x, y, asset, health)
    this.anchor.setTo(0.5, 0.5)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.firingTimer = this.game.time.now + Phaser.Math.random(0, 10000);
    this.health = health ? health : 100
  }

  update() {
    if (this.alive) {
      this.game.physics.arcade.overlap(this, this.game.player, this.alienHitsPlayer, null, this);
      this.game.physics.arcade.overlap(this, this.game.bullets, this.bulletHitsAlien, null, this);
      if (this.game.player.alive && this.game.time.now > this.firingTimer) {

          this.fireBullet();

      }
    }
  }

  bulletHitsAlien (alien, bullet) {
    // kill bullet
    bullet.kill()
    //  When a bullet hits an alien reduce hp by 50
    if (alien.alive) {
      alien.health -= 50;
      if (this.health <= 0) {
        alien.health = 0;
        alien.kill();
      }
    }

  }

  checkHealth() {
    if (this.health <= 0) {
      this.health = 0;
      this.kill();
    }
  }

  alienHitsPlayer (alien, player) {
    alien.health -= 1000
    alien.checkHealth();
    if (player.shieldRef.alive) {
      player.shieldRef.kill();
    } else {
      player.health -= 500;
      player.checkHealth();
    }

  }

  fireBullet() {
    this.alienBullet = this.game.alienBullets.getFirstExists(false);
    if (this.alienBullet) {
      let shooter = this;
      this.alienBullet.reset(shooter.body.x, shooter.body.y + 10);
      this.game.physics.arcade.moveToObject(this.alienBullet, this.game.player,120);
      this.firingTimer = this.game.time.now + this.game.rnd.integerInRange(1000, 3000);
    }
  }

}
