'use strict'
/*globals define*/
define(['proto/object/util/setup-element',
    'proto/object/Shot'], (setupElement, Shot) => class NavShot extends Shot {
    constructor(nav) {
        super(nav)
    }
    /**
     * 
     * @param {number} gameBorder 
     * @returns Boolean
     */
    isTop(gameBorder) {
        return this.pos.y === gameBorder
    }
    /**
     * update...
     * @param {Object} game
     */
    update(game, nav) {
        const gameBorder = game.size.border
        if (this.isTop(gameBorder)) {
            this.remove()
            nav.sumAmmo()
            game.removeShot(this)
            return
        }
        for (const enemy of game.enemyM.getItems()) {
            if (this.isHitting(enemy)) {
                this.remove()
                nav.sumAmmo()
                enemy.hit(game)
                game.removeShot(this)
                return
            }
        }
        this.pos.y += this.shotDir
        this.paint()
    }
})