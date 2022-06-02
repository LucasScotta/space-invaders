'use strict'
/*globals define*/
define(['proto/object/Enemy'], (Enemy) => (x, y) => {
    return new Enemy(x, y)
})