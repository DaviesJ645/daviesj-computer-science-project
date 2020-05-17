namespace SpriteKind {
    export const enemy_projectile = SpriteKind.create()
    export const friendly_projectile = SpriteKind.create()
    export const temporary_message = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.friendly_projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Primary.destroy(effects.fire, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Primary = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 9 . . . . . . . . 
. . . . . . 9 6 9 . . . . . . . 
. . . . . . 9 6 9 . . . . . . . 
. . . . . . 9 6 9 . . . . . . . 
. . . . . . . 9 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Player_1, 0, -100)
    Primary.setKind(SpriteKind.friendly_projectile)
})
sprites.onOverlap(SpriteKind.enemy_projectile, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
info.onCountdownEnd(function () {
	
})
let enemy_projectile_1: Sprite = null
let enemy_projectile_2: Sprite = null
let Primary: Sprite = null
let Player_1: Sprite = null
scene.setBackgroundColor(6)
Player_1 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
info.setScore(0)
game.showLongText("Use the d-pad to move and the A button to shoot. One hit and you're done for ! Are you ready ?    Click A to begin ", DialogLayout.Full)
info.startCountdown(5)
pause(5000)
let Boss_level_1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Player_1.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(Player_1)
Boss_level_1.setFlag(SpriteFlag.BounceOnWall, true)
forever(function () {
    if (info.score() > 50) {
        for (let index = 0; index < 40; index++) {
            Boss_level_1.x += 3
            pause(50)
        }
        pause(100)
        for (let index = 0; index < 40; index++) {
            Boss_level_1.x += -3
            pause(50)
        }
    } else {
    	
    }
})
forever(function () {
    if (info.score() <= 100 && info.score() >= 50) {
        enemy_projectile_2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 4 2 . . . . . . . 
. . . . . . 4 f 4 . . . . . . . 
. . . . . . 2 4 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Boss_level_1, 0, 100)
        enemy_projectile_2.setKind(SpriteKind.enemy_projectile)
        pause(400)
    }
})
forever(function () {
    if (info.score() < 50) {
        Boss_level_1.setPosition(70, 7)
        enemy_projectile_1 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e f e f e . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . e 4 4 4 e . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . e 4 4 4 e . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . e f e f e . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Boss_level_1, Math.randomRange(-100, 100), 100)
        enemy_projectile_1.setKind(SpriteKind.enemy_projectile)
    }
    pause(600)
})
forever(function () {
    if (info.score() > 100) {
        enemy_projectile_2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 4 2 . . . . . . . 
. . . . . . 4 f 4 . . . . . . . 
. . . . . . 2 4 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Boss_level_1, 0, 100)
        enemy_projectile_2.setKind(SpriteKind.enemy_projectile)
        pause(100)
        enemy_projectile_1 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e f e f e . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . e 4 4 4 e . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . e 4 4 4 e . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . e f e f e . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Boss_level_1, Math.randomRange(-100, 100), 100)
        enemy_projectile_1.setKind(SpriteKind.enemy_projectile)
        pause(500)
    }
})
forever(function () {
    if (info.life() <= 0) {
    	
    }
})
