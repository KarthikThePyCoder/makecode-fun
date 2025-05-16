namespace SpriteKind {
    export const Athlete = SpriteKind.create()
}

scene.setBackgroundColor(14)
let mySprite = sprites.create(assets.image`
    Cake
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.scale = 2.5
let mySprite2 = sprites.create(assets.image`
    Pizza
    `, SpriteKind.Athlete)
mySprite2.scale = 2.5
mySprite2.setBounceOnWall(true)
mySprite2.follow(mySprite)
game.splash("Annoy the bakers!", "Try playing while you should be still at baking time!")
mySprite.sayText("Weeee! Pizza, this is fun!")
