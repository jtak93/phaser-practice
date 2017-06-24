import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, weaponLevel, firingRateLevel }) {
    super(game, x, y, asset, weaponLevel, firingRateLevel)
    this.anchor.setTo(0.5, 0.5)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.bulletTime = 0;
    this.weaponLevel = weaponLevel;
    this.firingRateLevel = (firingRateLevel) ? firingRateLevel : 0;
    this.firingRate = 400 - (this.firingRateLevel * 20);
  }

  update () {
    if (this.alive) {
        //  Reset the player, then check for movement keys
        this.body.velocity.setTo(0, 0);

        if (this.game.cursors.left.isDown) {
            // Limit left side to bounds
            if (this.body.position.x < this.game.world.bounds.x) {
                this.body.velocity.x = 0
            } else {
                this.body.velocity.x = -200;
            }
        } else if (this.game.cursors.right.isDown) {
            // Limit right side to bounds
            if (this.body.position.x > this.game.world.bounds.width - this.body.width) {
                this.body.velocity.x = 0
            } else {
                this.body.velocity.x = 200;
            }
        }

        if (this.game.cursors.up.isDown) {
          // Limit top side to bounds
          if (this.body.position.y < this.game.world.bounds.y) {
              this.body.velocity.y = 0
          } else {
              this.body.velocity.y = -200;
          }
        } else if (this.game.cursors.down.isDown) {
          // Limit bottom side to bounds
          if (this.body.position.y > this.game.world.bounds.height - this.body.height) {
              this.body.velocity.y = 0
          } else {
              this.body.velocity.y = 200;
          }
        }

        //  Firing?
        if (this.game.fireButton.isDown) {
            this.fireBullet();
        }

        // if (game.time.now > firingTimer)
        // {
        //     enemyFires();
        // }

        // //  Run collision
        // game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
        // game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
    }
  }

  fireBullet() {
    console.log('fired bullet', this.firingTime)

        //  To avoid them being allowed to fire too fast we set a time limit
    if (this.game.time.now > this.bulletTime) {
        //  Grab the first bullet we can from the pool
        if (this.weaponLevel === 1) {
          this.bullet = this.game.bullets.getFirstExists(false);

          if (this.bullet) {
            //  And fire it
            this.bullet.reset(this.x, this.y + 8);
            this.bullet.body.velocity.y = -400;
            this.bulletTime = this.game.time.now + this.firingRate;
          }
        }

        if (this.weaponLevel >= 2) {
          this.bullets = [];
          for (let i = 0; i < this.weaponLevel; i++) {
            this.bullets.push(this.game.bullets.getTop());
            this.game.bullets.getTop().sendToBack()
          }

          if (this.bullets.length === 2) {
            //  Fire two bullets
            this.bullets[0].reset(this.x - 8, this.y + 8);
            this.bullets[0].body.velocity.y = -400;
            this.bullets[1].reset(this.x + 8, this.y + 8);
            this.bullets[1].body.velocity.y = -400;
            this.bulletTime = this.game.time.now + this.firingRate;
          }
        }

    }

  }
}
