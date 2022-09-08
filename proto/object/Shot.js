'use strict'
/*globals define*/
define(['proto/object/util/setup-element'], (setupElement) => class Shot {
    constructor(elem) {
        this.$el = setupElement('shot')
        this.pos = { x: elem.pos.x + elem.size.width / 2, y: elem.pos.y }
        this.size = { width: 2, height: 16 }
        this.shotDir = elem.shotDir
        this.paint()
    }
    isHitting(elem) {
        const upOrDown = this.isHittingTop(elem) || this.isHittingBottom(elem)
        const rightOrLeft = this.isHittingRight(elem) || this.isHittingLeft(elem)
        return upOrDown && rightOrLeft
    }
    isHittingTop(elem) {
        const elemTop = elem.pos.y
        const elemBottom = elemTop + elem.size.height
        return this.pos.y >= elemTop && this.pos.y <= elemBottom
    }
    isHittingBottom(elem) {
        const bottom = this.pos.y + this.size.height
        const elemTop = elem.pos.y
        const elemBottom = elemTop + elem.size.height
        return bottom >= elemTop && bottom <= elemBottom
    }
    isHittingLeft(elem) {
        const elemLeft = elem.pos.x
        const elemRight = elem.pos.x + elem.size.width
        return this.pos.x >= elemLeft && this.pos.x <= elemRight
    }
    isHittingRight(elem) {
        const elemLeft = elem.pos.x
        const elemRight = elemLeft + elem.size.width
        return this.pos.x + this.size.width >= elemLeft && this.pos.x + this.size.width <= elemRight
    }
    shot(game) {
        game.addShot(Shot())
    }
    /**
     *
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