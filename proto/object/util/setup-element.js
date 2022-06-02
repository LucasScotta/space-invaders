'use strict'
/*globals define*/
define([], () => {
    return (classTipe) => {
        const $el = document.createElement('div')
        $el.classList.add(classTipe)
        document.getElementById('game').appendChild($el)
        return $el
    }
})