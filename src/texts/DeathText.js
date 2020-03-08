import Phaser from 'phaser-ce'

export default class extends Phaser.Text {
  constructor ({ game, x, y, text, style }) {
    super(game, x, y, text, style)
    this.anchor.setTo(0.5, 0.5)
  }

}
