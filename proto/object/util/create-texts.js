'use strict'
/*globals define*/
define(['proto/object/util/texts',
    'factory/Text'], (texts, Text) => (game) => {
        const textObjs = []
    for (const text of texts(game)) {
        textObjs.push(Text(text))
    }
    return textObjs
})