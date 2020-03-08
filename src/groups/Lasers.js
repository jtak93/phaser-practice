import Phaser from 'phaser-ce'

export default class Lasers extends Phaser.Group {
  constructor ({ game, parent, name, addToStage, enableBody, physicsBodyType }) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType)

    this.createMultiple(400, 'laser');
    this.setAll('anchor.x', 0.5);
    this.setAll('anchor.y', 1);
    this.setAll('outOfBoundsKill', true);
    this.setAll('checkWorldBounds', true);
  }
}
