import Phaser from 'phaser-ce'

export default class Starfield extends Phaser.TileSprite {
  constructor ({ game, x, y, width, height, key, frame }) {
    super(game, x, y, width, height, key, frame)
    this.anchor.setTo(0, 0)
  }

  update () {
    this.tilePosition.y += 2;
  }
}
