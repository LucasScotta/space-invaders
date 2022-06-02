'use strict'
/*globals define*/
define(['proto/object/util/buttons',
    'factory/Button'], (buttons, Button) => (pos, game) => {
    const obj = {}
    for (const button of buttons(pos, game)) {
        obj[button.name] = Button(button, game)
    }
    return obj
})