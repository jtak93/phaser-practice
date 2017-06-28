import Phaser from 'phaser'

export default class extends Phaser.Sprite {
	constructor (opts) {
		super(opts.game, opts.x || 0, opts.y || 0, opts.key || '', opts.frame || '', opts.state)

        // add 1x1 white pixel to cache if necessary
		if (!opts.game.cache.checkImageKey('white1x1pixel')) {
            // loads 1x1 white gif from data URI
			opts.game.load.image('white1x1pixel', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=')
			opts.game.load.onLoadComplete.add(() => this.runCreation(opts))
			opts.game.load.start()
		} else {
			this.runCreation(opts)
		}
	}

    // this has to be in a separate function so that the white1x1pixel sprite can load asynchronously
	runCreation (opts) {
        // set sprites, if applicable
		if (!opts.bgSprite && opts.sprite) {
			opts.bgSprite = opts.sprite
			opts.fgSprite = opts.sprite
		}

        // Save width
		let width = 0
		if (opts.bgSprite) {
            // Look for the background sprite's width first
			width = this.game.cache.getImage(opts.bgSprite).width
            // Let the user override with the `width` option
			width = opts.width || width
		} else {
			width = opts.width || opts.host.width
		}

        // Save height
		let height = 0
		if (opts.bgSprite) {
            // Look for the background sprite's height first
			height = this.game.cache.getImage(opts.bgSprite).height
            // Let the user override with the `width` option
			height = opts.height || height
		} else {
			height = opts.height || 10
		}

        // Background to progress bar
		const x = opts.x
    const y = opts.y
		this.bg = opts.state.add.sprite(x, y, opts.bgSprite || 'white1x1pixel')
		this.bg.width = width
		this.bg.height = height
		this.bg.tint = opts.hasOwnProperty('bgTint') ? opts.tint : 0x333333

        // Foreground
		let fgSprite = opts.fgSprite || 'white1x1pixel'
		this.bar = opts.state.add.sprite(x, y, fgSprite)
		this.bar.width = width
		this.bar.height = height
		this.bar.tint = opts.hasOwnProperty('fgTint') ? opts.tint : 0x00cc00

        // Crop
		this.cropRect = new Phaser.Rectangle(0, 0, width, height)

        // Save options
		this.opts = opts
	}

	update () {
		super.update()
		if (this.opts && this.opts.watch) {
			const newWidth = this.bg.width * (this.opts.watch.host[this.opts.watch.value] / this.opts.watch.max)

			if (this.opts.resize || (!this.opts.bgSprite && !this.opts.fgSprite)) {
				this.bar.width = newWidth
			} else {
				this.cropRect.width = newWidth
				this.bar.crop(this.cropRect)
			}
		}
	}
}
