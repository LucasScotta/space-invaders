'use strict'
require(['proto/game/Game',
    'control/handler'], (Game, handler) => {
        let game
        const mouse = {
            x:0,
            y:0,
            click: 0,
            change:false,
        }
        const startGame = () => {
            if (!!game) return
            game = new Game()
            window.game = game
        }
        const start = document.getElementById('start')

        start.onclick = (e) => {
            startGame()
            start.remove()
        }

        document.onmousemove = (event) => {
            if (!!game) return handler.moveNav(event, mouse)
        }
        document.onkeydown = (event) => {
            if (!!game) return handler.press(event.key, game)
        }
        document.onclick = () => {
            if (!!game) return handler.click(mouse, game)
        }
        const loop = () => {
            if (!game) return
            game.updateTexts()
            if (!game.config.lifes) return
            if (!game.config.pause) return update()
            game.nav.update(mouse.x, game)
            if (mouse.click) {
                game.pause()
                mouse.click = !mouse.click
                mouse.change = !mouse.change
            }
        }
        const update = () => {
                game.nav.update(mouse.x, game)
                if(mouse.click) {
                    game.nav.shot(game)
                    mouse.click = !mouse.click
            }
            game.update()
        }
        let time = 1000 / 100
        setInterval(loop, time)
})