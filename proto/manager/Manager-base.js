'use strict'
/*globals define*/
define([], () => class ManagerBase {
    constructor() {
        this.items = []
    }
    add(item) {
        this.items.push(item)
    }
    remove(item) {
        const index = this.items.indexOf(item)
        const exists = index >= 0
        if (exists) {
            this.items.splice(index, 1)
        }
        return exists
    }
    getItems() {
        return this.items
    }
    getItem(item) {
        return this.items[this.items.indexOf(item)]
    }
    removeAll() {
        while(this.getItems().length > 0) {
            const item = this.items.pop()
            item.remove()
        }
    }
    isEmpty() {
        return this.items.length === 0
    }
})