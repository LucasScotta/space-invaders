'use strict'
/*globals define*/

define([], () => {
    const moveNav = (event, mouse) => {
        mouse.x = event.x
        mouse.y = event.y
        mouse.change = !mouse.change
    }
    const press = (key, game) => {
        if (key === 'p') {
            game.pause()
        }
        if (key === 'r') {
            game.restart()
        }
    }
    const click = (mouse, game) => {
        if(mouse.x > game.size.width || mouse.y > game.size.height) {
            return
        }
        mouse.click = !mouse.click
        mouse.change = !mouse.change
    }
    const handler = {
        moveNav,
        press,
        click,
    }
    return handler
})