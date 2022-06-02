'use strict'
/*globals define*/
define([], () => class Text {
    constructor(options) {
        Object.assign(this, options)
        this.setElement()
    }
    setElement() {
        const elem = this.$el
        elem.classList.add(this.className)
        document.getElementById('game').appendChild(elem)
        this.refresh()
        elem.style.top = `${this.pos.y}px`
        elem.style.left = `${this.pos.x}px`
    }
    refresh() {
        this.fn()
    }
})