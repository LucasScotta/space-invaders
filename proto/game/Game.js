'use strict'
/*globals define*/
define(['factory/Nav',
    'proto/manager/Enemy-manager',
    'factory/Enemy',
    'proto/manager/Shot-Manager',
    'proto/object/util/create-buttons',
    'proto/object/util/create-texts'],
    (Nav, EnemyManager, Enemy, ShotManager, createButtons, createTexts) => class Game {
    constructor() {
        this.enemyM = new EnemyManager()
        this.shotM = new ShotManager()
        this.size = {
            width: 700,
            height: 700,
            border: 10,
        }
        this.pos = {x:0, y:0}
        this.nav = Nav(this.size.height, this.pos.y)
        this.config = {
            level: 1,
            lifes: 3,
            pause: 1,
            points: 0,
        }
        this.buttons = createButtons({x:this.size.width + this.size.border, y:this.pos.y}, this)
        this.texts = createTexts(this)
        this.start()
    }
    start() {
        const game = document.createElement('div')
        game.id = 'game'
        game.style.width = `${this.size.width}px`
        game.style.height = `${this.size.height}px`
        document.getElementsByTagName('main')[0].append(game)
        this.initLvl()
        this.config.level = 1
    }
    /**
     * Init game on lvl 1
     */
     initLvl() {
        const width = this.size.width + this.size.border - 50
        const height = (this.size.height + this.size.border) / 2
        for (let i = 0;i < 7;i += 1) {
            for (let i = 0;i < 7;i += 1) {
                this.enemyM.add(Enemy(this.size))
            }
        }
    }
    addShot(shot) {
        this.shotM.add(shot)
    }
    /**
     * 
     * @param {Object} shot 
     */
    removeShot(shot) {
        this.shotM.remove(shot)
    }
    /**
     * 
     * @param {Object} enemy 
     */
    removeEnemy(enemy) {
        this.config.points += 100
        this.enemyM.remove(enemy)
        if (this.enemyM.isEmpty()) {
            this.removeShots()
            this.win()
        }
    }
    removeAll() {
        this.enemyM.removeAll()
        this.shotM.removeAll()
    }
    removeShots() {
        this.shotM.removeAll()
    }
    /**
     * ...
     */
    win() {
        this.removeAll()
        this.config.level += 1
        this.config.points += 1000
        this.removeShots()
        this.initLvl()
        this.nav.restoreGun()
        this.pause()
    }
    restart() {
        this.enemyM.removeAll()
        this.shotM.removeAll()
        this.nav.restoreGun()
        const config = this.config
        config.level = 1
        config.points = 0
        this.initLvl()
        if (!config.pause && config.lifes) {
            this.pause()
        }
        config.lifes = 3
    }
    updateTexts() {
        for (const text of this.texts) {
            text.refresh()
        }
    }
    pause() {
        this.buttons.pause.refresh()
        this.updateTexts()
    }
    /**
     * ...
     */
    loss() {
        this.config.lifes -= 1
    }
    // update...
    update() {
        for (const shot of this.shotM.getItems()) {
            shot.update(this, this.nav)
        }
        for (const enemy of this.enemyM.getItems()) {
            enemy.update()
        }
        this.updateTexts()
    }
})