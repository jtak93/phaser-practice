import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5, 0)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
  }

  update () {
    if (this.alive)
    {
        //  Reset the player, then check for movement keys
        this.body.velocity.setTo(0, 0);

        if (this.game.cursors.left.isDown)
        {
            this.body.velocity.x = -200;
        }
        else if (this.game.cursors.right.isDown)
        {
            this.body.velocity.x = 200;
        }

        if (this.game.cursors.up.isDown)
        {
            this.body.velocity.y = -200;
        }
        else if (this.game.cursors.down.isDown)
        {
            this.body.velocity.y = 200;
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
