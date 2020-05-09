controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Secondary_Weapon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 6 . . . . . . . . 
. . . . . . 6 9 6 . . . . . . . 
. . . . . . 6 9 6 . . . . . . . 
. . . . . . 6 9 6 . . . . . . . 
. . . . . . 6 9 6 . . . . . . . 
. . . . . . 6 9 6 . . . . . . . 
. . . . . . 6 9 6 . . . . . . . 
. . . . . . . 6 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    Primary_Weapon.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Primary_Weapon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . 4 4 2 4 4 . . . . . . 
. . . . . 4 2 4 2 4 . . . . . . 
. . . . . 4 4 2 4 4 . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    Secondary_Weapon.destroy()
})
let Primary_Weapon: Sprite = null
let Secondary_Weapon: Sprite = null
let Player_1 = sprites.create(img`
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
let mySprite2 = sprites.create(img`
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
mySprite2.setPosition(78, 7)
Player_1.setFlag(SpriteFlag.StayInScreen, false)
controller.moveSprite(Player_1)
scene.setBackgroundColor(0)
info.setLife(3)
