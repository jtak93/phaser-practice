import Phaser from 'phaser'

export default class Aliens extends Phaser.Group {
  constructor ({ game, parent, name, addToStage, enableBody, physicsBodyType }) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType)
  }

  createAliens () {

    for (let y = 0; y < 4; y++)
    {
        for (let x = 0; x < 10; x++)
        {
            let alien = this.create(x * 48, y * 50, 'invader');
            alien.anchor.setTo(0.5, 0.5);
            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            // alien.play('fly');
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
}
