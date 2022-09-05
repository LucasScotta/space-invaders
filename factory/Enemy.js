'use strict'
/*globals define*/
define(['proto/object/Enemy'], (Enemy) => (size) => {
    return new Enemy(size)
})