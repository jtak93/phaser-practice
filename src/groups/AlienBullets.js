import Phaser from 'phaser'

export default class AlienBullets extends Phaser.Group {
  constructor ({ game, parent, name, addToStage, enableBody, physicsBodyType, damage }) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType, damage)

    this.createMultiple(200, 'alien-bullet');
    this.setAll('anchor.x', 0.5);
    this.setAll('anchor.y', 0.5);
    this.setAll('outOfBoundsKill', true);
    this.setAll('checkWorldBounds', true);
    this.damage = damage;
  }
}
