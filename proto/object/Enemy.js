'use strict'
/*globals define*/
define(['proto/object/util/setup-element',
    'factory/Enemy-Shot',
    'proto/object/util/get-random'], (setupElement, Shot, getRandom) => {
    return class Enemy {
        constructor(width, height) {
            this.$el = setupElement('enemy')
            this.pos = {}
            this.gameSize = {width, height}
            this.setPos(this.gameSize)
            this.size = {
                width:30,
                height:30,
            }
            this.movement = {
                dirX: 0.5,
                movesX: 1,
                movesY: 1,
                sumX: 1,
                sumY: 1,
                dirY: 5,
            }
            this.shotDir = 1
            this.paint()
        }
        /**
         * paint enemy
         */
        paint() {
            this.$el.style.top = `${this.pos.y}px`
            this.$el.style.left = `${this.pos.x}px`
        }
        /**
         * 
         * @returns Boolean
         */
        isTop() {
            return this.movement.movesY === 0
        }
        /**
         * 
         * @returns Boolean
         */
        isBottom() {
            return this.movement.movesY === 3
        }
        /**
         * 
         * @returns Boolean
         */
        isRight() {
            return this.movement.movesX === 275
        }
        /**
         * 
         * @returns Boolean
         */
        isLeft() {
            return this.movement.movesX === 0
        }
        /**
         * remove this element from HTML
         */
        remove() {
            this.$el.remove()
        }
        /**
         * kill this enemy
         * @param {Object} game 
         */
        hit(game) {
            this.remove()
            game.removeEnemy(this)
        }
        shot(game) {
            game.addShot(Shot(this))
        }
        /**
         * update enemy
         */
        update() {
            const colors = ['red', 'blue', 'green', 'yellow', 'white', 'pink', 'gray', 'violet', 'rebeccapurple']
            const color = colors[Math.floor(Math.random() * colors.length)]
            this.$el.style.background = color
            this.$el.style.boxShadow = `0 0 10px ${color}`
            if (this.isTop() || this.isBottom()) {
                this.movement.dirY *= -1
                this.movement.sumY *= -1
            }
            if (this.isRight() || this.isLeft()) {
                this.movement.dirX *= -1
                this.pos.y += this.movement.dirY
                this.movement.movesY += this.movement.sumY
                this.movement.movesX *= -1
            }
            if (getRandom() <= 2) {
                this.shot(game)
            }
            this.pos.x += this.movement.dirX
            this.movement.movesX += this.movement.sumX
            this.paint()
        }
    }
})