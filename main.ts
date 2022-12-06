input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("forward")
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("stop")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.clearScreen()
radio.setGroup(82)
basic.showString("READY")
basic.showIcon(IconNames.Yes)
