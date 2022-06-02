'use strict'
require(['proto/game/Game',
    'control/handler'], (Game, handler) => {
        const mouse = {
            x:0,
            y:0,
            click: 0,
            change:false,
        }
        const game = new Game(mouse)
        window.game = game

        document.onmousemove = (event) => handler.moveNav(event, mouse)
        document.onkeydown = (event) => handler.press(event.key, game)
        document.onclick = () => handler.click(mouse, game)
        const loop = () => {
            game.updateTexts()
            if (!game.config.lifes) return
            if (!game.config.pause) return update()
            if (mouse.click) {
                game.pause()
                mouse.click = !mouse.click
                mouse.change = !mouse.change
            }
        }
        const update = () => {
            if (mouse.change) {
                game.nav.update(mouse.x, game)
                mouse.change = !mouse.change
                if(mouse.click) {
                    game.nav.shot(game)
                    mouse.click = !mouse.click
                }
            }
            game.update()
        }
        let time = 5
        setInterval(loop, time)
})