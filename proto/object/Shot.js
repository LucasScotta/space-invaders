'use strict'
/*globals define*/
define(['proto/object/util/setup-element'], (setupElement) => class Shot {
    constructor(elem) {
        this.$el = setupElement('shot')
        this.pos = {x: elem.pos.x + elem.size.width/2, y: elem.pos.y}
        this.size = {width: 2, height: 16}
        this.shotDir = elem.shotDir
        this.paint()
    }
    isHitting(elem) {
        return (this.isHittingTop(elem) || this.isHittingBottom(elem))
    }
    isHittingTop(elem) {
        const elemTop = elem.pos.y
        const elemBottom = elemTop + elem.size.height
        const elemLeft = elem.pos.x
        const elemRight = elemLeft + elem.size.width

        const top = this.pos.y
        const left = this.pos.x
        const right = left + this.size.width
        return top >= elemTop && top <= elemBottom && right >= elemLeft && left <= elemRight
    }
    isHittingBottom(elem) {
        const elemTop = elem.pos.y
        const elemBottom = elemTop + elem.size.height
        const elemLeft = elem.pos.x
        const elemRight = elemLeft + elem.size.width

        const top = this.pos.y
        const bottom = top + this.size.height
        const left = this.pos.x
        const right = left + this.size.width
        return bottom >= elemTop && bottom <= elemBottom && right >= elemLeft && left <= elemRight
    }
    shot(game) {
        game.addShot(Shot())
    }
    /**
    /**
     * Remove element from HTML
     */
    remove() {
        this.$el.remove()
    }
    /**
     * 
     * paint Shot
     */
    paint() {
        const colors = ['red', 'blue', 'green', 'yellow', 'white', 'pink', 'gray', 'violet', 'rebeccapurple']
            const color = colors[Math.floor(Math.random() * colors.length)]
            this.$el.style.background = color
            this.$el.style.boxShadow = `0 0 10px ${color}`
        this.$el.style.top = `${this.pos.y}px`
        this.$el.style.left = `${this.pos.x}px`
    }
})