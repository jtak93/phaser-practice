import Phaser from 'phaser'

export default class Aliens extends Phaser.Group {
  constructor ({ game, parent, name, addToStage, enableBody, physicsBodyType }) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType)
    this.firingTimer = this.game.time.now;
    this.livingAliens = [];
  }

  update() {
    this.game.physics.arcade.overlap(this.game.bullets, this, this.collisionHandler, null, this.game);
    if (this.game.time.now > this.firingTimer) {
        this.enemyFires();
    }
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

  }

  enemyFires() {
    this.livingAliens = [];
    this.alienBullet = this.game.alienBullets.getFirstExists(false);
    this.forEachAlive(alien => {
      this.livingAliens.push(alien)
    })

    if(this.alienBullet && this.livingAliens.length > 0) {
      let random = this.game.rnd.integerInRange(0, this.livingAliens.length-1);
      let shooter = this.livingAliens[random];
      this.alienBullet.reset(shooter.body.x, shooter.body.y);
      this.game.physics.arcade.moveToObject(this.alienBullet, this.game.player,120);
    }
    this.firingTimer += 500
  }


}
