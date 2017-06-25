import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, weaponType, weaponLevel, firingRateLevel }) {
    super(game, x, y, asset, weaponType, weaponLevel, firingRateLevel)
    this.anchor.setTo(0.5, 0.5)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.bulletTime = 0;
    this.weapon = {
      type: 'bullet',
      level: weaponLevel
    };
    this.firingRateLevel = (firingRateLevel) ? firingRateLevel : 0;
    this.firingRate = 400 - (this.firingRateLevel * 20);
  }

  update () {
    if (this.alive) {
        if (this.game.lasers) this.game.lasers.align
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
            // check weapon type
            if (this.weapon.type === 'bullet') {
              this.fireBullet();
            } else if (this.weapon.type === 'laser') {
              this.fireLaser();
            }

        }

        //  Run collision
        this.game.physics.arcade.overlap(this.game.alienBullets, this, this.alienBulletHitsPlayer, null, this);
    }
  }

  fireLaser() {
      console.log('laser fired')
      if (this.game.time.now > this.bulletTime) {
        let laser = this.game.lasers.getTop();
        laser.reset(this.x, this.y);
        laser.body.velocity.y = -400;
        laser.sendToBack();
        this.bulletTime = this.game.time.now + 5

      }

  }

  fireBullet() {

        //  To avoid them being allowed to fire too fast we set a time limit
    if (this.game.time.now > this.bulletTime) {
        //  Grab the first bullet we can from the pool
        if (this.weapon.level === 1) {
          this.bullet = this.game.bullets.getFirstExists(false);

          if (this.bullet) {
            //  And fire it
            this.bullet.reset(this.x, this.y + 10);
            this.bullet.body.velocity.y = -400;
            this.bulletTime = this.game.time.now + this.firingRate;
          }
        }

        // Level 2 bullets

        if (this.weapon.level === 2) {
          this.bullets = [];
          for (let i = 0; i < this.weapon.level; i++) {
            this.bullets.push(this.game.bullets.getTop());
            this.game.bullets.getTop().sendToBack()
          }

          if (this.bullets.length === 2) {
            //  Fire two bullets
            this.bullets[0].reset(this.x - 8, this.y + 10);
            this.bullets[0].body.velocity.y = -400;
            this.bullets[1].reset(this.x + 8, this.y + 10);
            this.bullets[1].body.velocity.y = -400;
            this.bulletTime = this.game.time.now + this.firingRate;
          }
        }

        // Level 3 bullets
        if (this.weapon.level === 3) {
          this.bullets = [];
          for (let i = 0; i < this.weapon.level; i++) {
            this.bullets.push(this.game.bullets.getTop());
            this.game.bullets.getTop().sendToBack()
          }

          if (this.bullets.length === 3) {
            //  Fire three bullets
            this.bullets[0].reset(this.x - 10, this.y + 10);
            this.bullets[0].body.velocity.y = -400;
            this.bullets[1].reset(this.x, this.y + 10);
            this.bullets[1].body.velocity.y = -400;
            this.bullets[2].reset(this.x + 10, this.y + 10);
            this.bullets[2].body.velocity.y = -400;
            this.bulletTime = this.game.time.now + this.firingRate;
          }
        }

        // Level 4 bullets
        if (this.weapon.level === 4) {
          this.bullets = [];
          for (let i = 0; i < this.weapon.level; i++) {
            this.bullets.push(this.game.bullets.getTop());
            this.game.bullets.getTop().sendToBack()
          }

          if (this.bullets.length === 4) {
            //  Fire four bullets
            this.bullets[0].reset(this.x - 10, this.y - 8);
            this.bullets[0].body.velocity.y = -350;
            this.bullets[0].body.velocity.x = -50;
            this.bullets[1].reset(this.x - 5, this.y - 8);
            this.bullets[1].body.velocity.y = -400;
            this.bullets[2].reset(this.x + 5, this.y - 8);
            this.bullets[2].body.velocity.y = -400;
            this.bullets[3].reset(this.x + 10, this.y - 8);
            this.bullets[3].body.velocity.y = -350;
            this.bullets[3].body.velocity.x = 50;
            this.bulletTime = this.game.time.now + this.firingRate;
          }
        }

    }

  }


  alienBulletHitsPlayer (player, bullet) {
    // if alien hits player kill player and bullet
    bullet.kill();
    player.kill();
  }
}
