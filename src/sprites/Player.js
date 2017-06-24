import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5, 0)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
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

        // //  Firing?
        // if (fireButton.isDown)
        // {
        //     fireBullet();
        // }
        //
        // if (game.time.now > firingTimer)
        // {
        //     enemyFires();
        // }

        // //  Run collision
        // game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
        // game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
    }
  }
}
