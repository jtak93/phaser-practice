import Phaser from 'phaser-ce'
import Alien from '../../sprites/Alien'

export default class Aliens extends Phaser.Group {
  constructor ({ game, parent, name, addToStage, enableBody, physicsBodyType }) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType)
    this.firingTimer = this.game.time.now;
    this.livingAliens = [];
    this.setAll('outOfBoundsKill', true);
    this.setAll('checkWorldBounds', true);
    this.waveNumber = 1;
    this.createWave(30, 2);
    this.gameState = this.game.state.getCurrentState();
  }

  update() {
    this.game.physics.arcade.overlap(this.gameState.bullets, this, this.bulletCollisionHandler, null, this.game);
    this.game.physics.arcade.overlap(this.gameState.player, this, this.playerCollisionHandler, null, this.game);
    if (this.game.time.now > this.firingTimer) {
      console.log(this.gameState)
      if (this.gameState.player.alive) {
          this.enemyFires();
        }
    }
  }

  createWave (size, health) {
    const waveSize = size;
    const WaveCreation = this.game.time.events.repeat(Phaser.Timer.SECOND / 2, waveSize, this.createAlien.bind(this, health), this);

  }

  createAlien(health) {
    const ENEMY_SPEED = this.game.rnd.integerInRange(50, 100);
    let x = this.game.rnd.integerInRange(100, this.game.world.width - 100);
    const y = -20;
    const ENEMY_HEALTH = health
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
    this.add(enemy);
  }

  bulletCollisionHandler (bullet, alien) {

    //  When a bullet hits an alien reduce hp by 50
    if (alien.alive) alien.health -= 50;
    if (alien.health <= 0) alien.kill()
    bullet.kill();

  }

  playerCollisionHandler (player, alien) {

    // when player hits alien, kill alien and damage player
    alien.kill()
    console.log(player)
    if (player.alive) {
      player.health -= 10
      if (player.health <= 0) player.kill()
    }

  }

  enemyFires() {
    this.livingAliens = [];
    this.alienBullet = this.gameState.alienBullets.getFirstExists(false);
    this.forEachAlive(alien => {
      this.livingAliens.push(alien)
    })

    if(this.alienBullet && this.livingAliens.length > 0) {
      let random = this.game.rnd.integerInRange(0, this.livingAliens.length-1);
      let shooter = this.livingAliens[random];
      this.alienBullet.reset(shooter.body.x, shooter.body.y);
      this.game.physics.arcade.moveToObject(this.alienBullet, this.gameState.player,120);
    }
    this.firingTimer = this.game.time.now + 1000;
  }


}
