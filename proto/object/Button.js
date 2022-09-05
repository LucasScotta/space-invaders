'use strict'
/*globals define*/
define([], () => class Button {
    constructor(options, game) {
        Object.assign(this, options)
        this.game = game
        this.setButton()
    }
    setButton() {
        const game = document.getElementById('game')
        const elem = this.$el
        elem.classList.add(this.className)
        elem.innerText = this.display
        elem.style.top = `${this.pos.y}px`
        elem.style.left = `${this.pos.x}px`
        elem.onclick = this.fn
        game.appendChild(elem)
    }
    refresh() {
        this.fn()
    }
})