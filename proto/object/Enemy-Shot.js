'use strict'
/*globals define*/
define(['proto/object/util/setup-element',
    'proto/object/Shot'], (setupElement, Shot) => class EnemyShot extends Shot {
    constructor(Enemy) {
        super(Enemy)
    }
    /**
     * 
     * @returns Boolean
     */
    isBottom() {
        const gameBottom = game.size.height - game.size.border
        return this.pos.y + this.size.height === gameBottom
    }
    /**
     * update...
     * @param {Object} game
     */
    update(game, nav) {
        if (this.isBottom()) {
            this.remove()
            game.removeShot(this)
            return
        }
        if (this.isHitting(nav)) {
            this.remove()
            game.removeShot(this)
            return game.loss()
        }
        this.pos.y += this.shotDir
        this.paint()
    }
})