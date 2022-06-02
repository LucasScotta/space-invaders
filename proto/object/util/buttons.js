'use strict'
/*globals define*/

define(['proto/object/util/util'], (util) => (pos, game) => {
    const gameConfig = game.config
    const buttonsUtil = util.buttons
    const pauseUtilButton = buttonsUtil.pause
    const restartUtilButton = buttonsUtil.restart
    const pause = {
        $el: util.fn.createElement(),
        name: pauseUtilButton.name,
        display: pauseUtilButton.display,
        className: buttonsUtil.className,
        pos: {x: pos.x, y: pos.y},
        fn: () => {
            game.config.pause = !game.config.pause
            if (gameConfig.pause) {
                pause.display = pauseUtilButton.display
            }
            else {
                pause.display = pauseUtilButton.changeDisplay
            }
            pause.$el.innerText = pause.display
        }
    }
    util.fn.improveY(pos)
    const restart = {
        $el: util.fn.createElement(),
        name: restartUtilButton.name,
        display: restartUtilButton.display,
        className: buttonsUtil.className,
        pos: {x: pos.x, y:pos.y},
        fn: () => {
            game.restart()
        }
    }
    util.fn.improveY(pos)
    return [pause, restart]
})