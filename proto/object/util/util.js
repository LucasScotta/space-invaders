'use strict'
/*globals define*/
define([], () => {
    const buttons = {
        className: 'button'
    }
    const fn = {}
    const texts = {
        className: 'text'
    }

    buttons.pause = {
        name: 'pause',
        display: 'unpause',
        changeDisplay: 'pause',
    }
    buttons.restart = {
        name: 'restart',
        display: 'restart',
    }
    
    texts.pause = {
        onLoss: 'You Lost. Press R to restart',
        onPause: 'Press click or p to unpause',
        onUnpause: 'Press p to pause',
    }
    fn.createElement = () => document.createElement('div')
    fn.improveY = (pos) => pos.y += 30
    return {buttons, fn, texts}
})