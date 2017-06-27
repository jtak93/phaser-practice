import Phaser from 'phaser'
import Alien from '../sprites/Alien'

export default class Aliens extends Phaser.Group {
  constructor ({ game, parent, name, addToStage, enableBody, physicsBodyType }) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType)
    this.firingTimer = this.game.time.now;
    this.livingAliens = [];
  }

  update() {
    this.game.physics.arcade.overlap(this.game.bullets, this, this.bulletCollisionHandler, null, this.game);
    this.game.physics.arcade.overlap(this.game.lasers, this, this.laserCollisionHandler, null, this.game);
    if (this.game.time.now > this.firingTimer) {
        this.enemyFires();
    }
  }

  createAliens (rows, columns, hp) {

    for (let y = 0; y < ((rows) ? rows : 4); y++)
    {
        for (let x = 0; x < ((columns) ? columns : 10); x++)
        {
            let alien = new Alien({
              game: this.game,
              x: 30 * x,
              y: 30 * y,
              asset: 'invader',
            })
            this.game.add.existing(alien)
            alien.anchor.setTo(0.5, 0.5);
            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            // alien.play('fly');
            alien.health = (hp) ? hp : 1;
        }
    }

    this.x = 100;
    this.y = 50;

    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
    var tween = this.game.add.tween(this).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    // //  When the tween loops it calls descend
    // tween.onLoop.add(descend, this);
  }

  bulletCollisionHandler (bullet, alien) {

    //  When a bullet hits an alien reduce hp by 50
    if (alien.alive) alien.hp -= 50;
    if (alien.hp <= 0) alien.kill()
    bullet.kill();

  }

  laserCollisionHandler (laser, alien) {

    //  When a laser hits an alien reduce hp by 5
    if (alien.alive) alien.hp -= 5;
    if (alien.hp <= 0) alien.kill()
    laser.kill();

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
    this.firingTimer += 500;
  }


}
