let Hatjes = 0
let time = 0
input.onButtonPressed(Button.A, function () {
    Hatjes = 0
    time = 20
    for (let index = 0; index < 20; index++) {
        time += 0 - 1
        basic.showNumber(time)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    Hatjes = 0
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(Hatjes)
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) > 30) {
        Hatjes += 1
        music.playMelody("- D B G - F - - ", 260)
    }
})
