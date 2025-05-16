@namespace
class SpriteKind:
    Athlete = SpriteKind.create()
scene.set_background_color(14)
mySprite = sprites.create(assets.image("""
    Cake
    """), SpriteKind.player)
controller.move_sprite(mySprite)
mySprite.scale = 2.5
mySprite2 = sprites.create(assets.image("""
    Pizza
    """), SpriteKind.Athlete)
mySprite2.scale = 2.5
mySprite2.set_bounce_on_wall(True)
mySprite2.follow(mySprite)
game.splash("Annoy the bakers!", "Try playing while you should be still at baking time!")
mySprite.say_text("Weeee! Pizza, this is fun!")

    