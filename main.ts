namespace SpriteKind {
    export const enemy_projectile = SpriteKind.create()
    export const friendly_projectile = SpriteKind.create()
    export const temporary_message = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.friendly_projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
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
`, Player_1, 0, -10)
    Primary.setKind(SpriteKind.friendly_projectile)
})
sprites.onOverlap(SpriteKind.enemy_projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let enemy_projectile_1: Sprite = null
let enemy_projectile_2: Sprite = null
let Primary: Sprite = null
let Player_1: Sprite = null
scene.setBackgroundColor(13)
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
let input2 = game.askForString("ARE YOU READY ?", 1)
pause(5000)
let Boss_level_1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f f . . 
. . . f f f f f f f f f f f . . 
. . . f f 2 1 f f f 1 2 f f . . 
. . . f f f f f f f f f f f . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . 2 f 1 f 1 f 1 f 1 f 2 . . 
. . . 2 1 f 1 f 1 f 1 f 1 2 . . 
. . . 2 2 2 f 1 f 1 f 2 2 2 . . 
. . . 2 2 2 2 f 1 f 2 2 2 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 
. 2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 
. f . f . f . f . f . f . f . f 
`, SpriteKind.Enemy)
Boss_level_1.setPosition(78, 7)
Player_1.setFlag(SpriteFlag.StayInScreen, false)
controller.moveSprite(Player_1)
Boss_level_1.setFlag(SpriteFlag.BounceOnWall, true)
forever(function () {
    if (Boss_level_1.x == -100 || Boss_level_1.x == 100) {
        Boss_level_1.x += -5
    }
    pause(100)
})
forever(function () {
    if (info.score() < 3) {
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
    }
})
forever(function () {
    if (info.score() > 3) {
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
    pause(500)
})
