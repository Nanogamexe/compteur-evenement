let faiseau = 0
let active = 0
basic.forever(function () {
    faiseau = pins.digitalReadPin(DigitalPin.P16)
    if (input.buttonIsPressed(Button.A)) {
        active = 0
    }
    if (faiseau == 1) {
        active = 1
    }
    if (active == 1) {
        basic.showLeds(`
            . # # # .
            . . # # #
            . # # # #
            . # # # #
            . # . # .
            `)
    } else {
        basic.clearScreen()
    }
})
