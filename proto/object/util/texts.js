'use strict'
/*globals define*/

define(['proto/object/util/util'], (util) => (game) => {
    const utilFn = util.fn
    const className = util.texts.className
    const gameConfig = game.config
    const gameSize = game.size
    const posY = gameSize.height + gameSize.border
    const textsUtil = util.texts
    const textsPause = textsUtil.pause
    
    const points = {
        $el: utilFn.createElement(),
        pos: {
            x: gameSize.border,
            y: posY
        },
        className,
        fn: () => {
            points.$el.innerText = `points: ${gameConfig.points}`
        }
    }
    const unpause =  {
        $el: utilFn.createElement(),
        pos: {
            x: gameSize.width / 2 - 100,
            y: posY,
        },
        className,
        fn: () => {
            let display
            if(gameConfig.lifes === 0) {
                display = textsPause.onLoss
            }
            else if (gameConfig.pause) {
                display = textsPause.onPause
            }
            else {
                display = textsPause.onUnpause
            }
            unpause.$el.innerText = display
        }
    }
    const level = {
        $el: utilFn.createElement(),
        pos: {
            x: gameSize.width - gameSize.border - 50,
            y: posY,
        },
        className,
        fn: () => {
            level.$el.innerText = `level: ${gameConfig.level}`
        }
    }
    const lifes = {
        $el: utilFn.createElement(),
        pos: {
            x: gameSize.border * 2,
            y: gameSize.height - gameSize.border *3.5,
        },
        className,
        fn: () => {
            lifes.$el.innerText = `Lifes: ${gameConfig.lifes}`
        },
    }
    return [points, unpause, level, lifes]
})