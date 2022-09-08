'use strict'
/*globals define*/
define(['proto/object/util/setup-element',
    'factory/Nav-Shot'], (setupElement, Shot) => {
    return class Nav {
        constructor(height, width) {
            this.$el = setupElement('nav')
            this.size = {
                width: 100,
                height: 15,
            }
            this.pos = {
                y:height-50,
                x:width/2-this.size.width/2
            }
            this.shotDir = -1
            this.ammo = 3
            this.paint()
        }
        /**
         * 
         * @param {Number} pos 
         * @param {Number} left 
         * @returns Boolean
         */
        isLeft(pos, left) {
            return pos <= left
        }
        /**
         * 
         * @param {Number} pos 
         * @param {Number} right 
         * @returns Boolean
         */
        isRight(pos, right) {
            return right <= pos
        }
        /**
         * 
         * paint nav
         * @param {Number} x 
         * @param {Number} size 
         */
        paint(x, size) {
            this.$el.style.top = `${this.pos.y}px`
            this.$el.style.left = `${this.pos.x}px`
        }
        /**
         * 
         * move nav
         * @param {Number} x 
         * @param {Number} border 
         * @param {Number} width 
         */
        move(x, border, width) {
            const posX = x-this.size.width/2
            if (this.isLeft(posX, border)) {
                this.pos.x = border
                return
            }
            if (this.isRight(posX, width-border-this.size.width)) {
                this.pos.x = width-border-this.size.width
                return
            }
            this.pos.x = posX
        }
        /**
         * 
         * @returns Boolean
         */
        hasAmmo() {
            return this.ammo > 0
        }
        /**
         * substract ammo from gun
         */
        subAmmo() {
            this.ammo -= 1
        }
        /**
         * sum ammo from gun
         */
        sumAmmo() {
            this.ammo += 1
        }
        /**
         * restore the gun
         */
        restoreGun() {
            this.ammo = 3
        }
        /**
         * 
         * @param {Object} game 
         * @returns Object
         */
        shot(game) {
            if (!this.hasAmmo()) {
                return
            }
            this.subAmmo()
            game.addShot(Shot(this))
        }
        /**
         * update nav
         * @param {Number} x 
         * @param {Object} game 
         */
        update(x, game) {
            const colors = ['red', 'blue', 'green', 'yellow', 'white', 'pink', 'gray', 'violet', 'rebeccapurple']
            const color = colors[Math.floor(Math.random() * colors.length)]
            this.$el.style.background = color
            this.$el.style.boxShadow = `0 0 10px ${color}`
            const border = game.size.border
            const width = game.size.width
            this.move(x, border, width)
            this.paint()
        }
    }
})