
import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, health, xVelocity, yVelocity, xDrag}) {
    super(game, x, y, asset, health, xVelocity, yVelocity, xDrag)
    this.anchor.setTo(0.5, 0.5)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.firingStraightTimer = this.game.time.now;
    this.firingTimer = this.game.time.now;
    this.health = health ? health : 1;
    this.xVelocity = xVelocity;
    this.body.velocity.x = xVelocity;
    this.body.velocity.y = yVelocity;
    this.body.drag.x = xDrag;
    this.damage = 1;
  }

  update() {
    if (this.alive) {
      if (this.body.velocity.x === 0) {
        this.body.velocity.x = this.xVelocity;
        this.xVelocity = -(this.xVelocity);
      }
      this.angle = this.game.math.radToDeg(Math.atan2(this.body.velocity.x, this.body.velocity.y));
      this.game.physics.arcade.overlap(this, this.game.player, this.alienHitsPlayer, null, this);
      this.game.physics.arcade.overlap(this, this.game.bullets, this.bulletHitsAlien, null, this);
      if (this.game.player.alive && this.game.time.now > this.firingStraightTimer) {

          this.fireStraightBullet();

      }

      if (this.game.player.alive && this.game.time.now > this.firingTimer) {

          this.fireBulletToPlayer();

      }
    }
  }

  bulletHitsAlien (alien, bullet) {
    // kill bullet
    bullet.kill()
    //  When a bullet hits an alien reduce hp by 50
    if (alien.alive) {
      alien.health -= bullet.damage;
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

  fireStraightBullet() {
    this.alienBullet = this.game.alienBullets.getFirstExists(false);
    if (this.alienBullet) {
      let shooter = this;
      this.alienBullet.reset(shooter.body.x, shooter.body.y + 10);
      this.alienBullet.damage = this.damage;
      this.alienBullet.body.velocity.y = 200;
      this.firingStraightTimer = this.game.time.now + this.game.rnd.integerInRange(1000, 3000);
    }
  }

  fireBulletToPlayer() {
    this.alienBullet = this.game.alienBullets.getFirstExists(false);
    if (this.alienBullet) {
      let shooter = this;
      this.alienBullet.reset(shooter.body.x, shooter.body.y + 10);
      this.alienBullet.damage = this.damage;
      this.game.physics.arcade.moveToObject(this.alienBullet, this.game.player, 120);
      this.firingTimer = this.game.time.now + this.game.rnd.integerInRange(4000, 6000);
    }
  }

}
