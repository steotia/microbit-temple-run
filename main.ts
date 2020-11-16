input.onButtonPressed(Button.A, function () {
    car.change(LedSpriteProperty.X, -1)
})
function createBullet () {
    return game.createSprite(randint(1, 3), 0)
}
input.onButtonPressed(Button.B, function () {
    car.change(LedSpriteProperty.X, 1)
})
let car: game.LedSprite = null
car = game.createSprite(2, 4)
let bullet = createBullet()
game.setLife(5)
let left: game.LedSprite[] = []
let right: game.LedSprite[] = []
for (let index = 0; index <= 4; index++) {
    left.push(game.createSprite(0, index))
    right.push(game.createSprite(4, index))
}
basic.forever(function () {
    bullet.change(LedSpriteProperty.Y, 1)
    if (bullet.isTouching(car)) {
        game.removeLife(1)
        bullet.delete()
        bullet = createBullet()
    }
    if (bullet.get(LedSpriteProperty.Y) == 4) {
        bullet.delete()
        bullet = createBullet()
    }
    basic.pause(200)
})
