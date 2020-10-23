let number = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
})
input.onButtonPressed(Button.B, function () {
    magicbit.MotorRun(magicbit.Motors.A01A02, 255)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 5)
    if (number == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    } else if (number == 4) {
        basic.showIcon(IconNames.Heart)
    } else if (number == 5) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # . #
            # # # # #
            . # . # .
            `)
    } else {
        basic.showIcon(IconNames.Meh)
    }
})
