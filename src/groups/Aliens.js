import Phaser from 'phaser'

export default class Aliens extends Phaser.Group {
  constructor ({ game, parent, name, addToStage, enableBody, physicsBodyType }) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType)
  }

  update() {
    this.game.physics.arcade.overlap(this.game.bullets, this, this.collisionHandler, null, this.game);
  }

  createAliens (rows, columns, hp) {

    for (let y = 0; y < ((rows) ? rows : 4); y++)
    {
        for (let x = 0; x < ((columns) ? columns : 10); x++)
        {
            let alien = this.create(x * 48, y * 50, 'invader');
            alien.anchor.setTo(0.5, 0.5);
            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            // alien.play('fly');
            alien.hp = (hp) ? hp : 1;
            alien.body.moves = false;
        }
    }

    this.x = 100;
    this.y = 50;

    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
    var tween = this.game.add.tween(this).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    // //  When the tween loops it calls descend
    // tween.onLoop.add(descend, this);
  }

  collisionHandler (bullet, alien) {

    //  When a bullet hits an alien we kill them both
    if (alien.alive) alien.hp -= 1;
    if (alien.hp <= 0) alien.kill()
    bullet.kill();

    // //  Increase the score
    // score += 20;
    // scoreText.text = scoreString + score;
    //
    // //  And create an explosion :)
    // var explosion = explosions.getFirstExists(false);
    // explosion.reset(alien.body.x, alien.body.y);
    // explosion.play('kaboom', 30, false, true);
    //
    // if (aliens.countLiving() == 0)
    // {
    //     score += 1000;
    //     scoreText.text = scoreString + score;
    //
    //     enemyBullets.callAll('kill',this);
    //     stateText.text = " You Won, \n Click to restart";
    //     stateText.visible = true;
    //
    //     //the "click to restart" handler
    //     game.input.onTap.addOnce(restart,this);
    // }

    }

}
