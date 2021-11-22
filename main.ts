let faiseau = 0
let active = 0
basic.forever(function () {
    faiseau = pins.digitalReadPin(DigitalPin.P16)
    if (faiseau == 1) {
        faiseau = active
    }
    if (faiseau == active) {
        basic.showIcon(IconNames.Ghost)
    }
})
