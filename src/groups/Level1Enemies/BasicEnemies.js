import Phaser from 'phaser'
import Alien from '../../sprites/Alien'

export default class Aliens extends Phaser.Group {
  constructor ({ game, parent, name, addToStage, enableBody, physicsBodyType }) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType)
    this.firingTimer = this.game.time.now;
    this.livingAliens = [];
    this.setAll('outOfBoundsKill', true);
    this.setAll('checkWorldBounds', true);
    this.createWave(30, 2);
  }

  update() {
    this.game.physics.arcade.overlap(this.game.bullets, this, this.bulletCollisionHandler, null, this.game);
    if (this.game.time.now > this.firingTimer) {
        this.enemyFires();
    }
  }

  createWave (size, health) {
    const ENEMY_SPEED = this.game.rnd.integerInRange(50, 100);
    const ENEMY_HEALTH = health
    const waveSize = size;
    const y = -20;
    const WaveCreation = this.game.time.events.repeat(Phaser.Timer.SECOND / 2, waveSize, function(){
      let x = this.game.rnd.integerInRange(100, this.game.world.width - 100);
      const enemy = new Alien({
        game: this.game,
        x: x,
        y: y,
        asset: 'invader',
        health: ENEMY_HEALTH,
        xVelocity: this.game.rnd.integerInRange(-200, 200),
        yVelocity: ENEMY_SPEED,
        xDrag: 100
      });
      this.game.add.existing(enemy);
    }, this);

  }

  bulletCollisionHandler (bullet, alien) {

    //  When a bullet hits an alien reduce hp by 50
    if (alien.alive) alien.health -= 50;
    if (alien.health <= 0) alien.kill()
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
    this.firingTimer += this.game.time.now + 100;
  }


}
