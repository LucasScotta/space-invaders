'use strict'
/*global define*/
define(['proto/object/Enemy-Shot'], (Shot) => {
    return (enemy) => new Shot(enemy)
})