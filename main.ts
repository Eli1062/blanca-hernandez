let pot = 0
basic.forever(function () {
    pot = pins.analogReadPin(AnalogReadWritePin.P1)
    pins.analogWritePin(AnalogPin.P2, pot)
    if (pot >= 0 && pot <= 255) {
        basic.showNumber(1)
        music.ringTone(262)
    } else if (pot >= 256 && pot <= 512) {
        basic.showNumber(2)
        music.ringTone(294)
    } else if (pot >= 513 && pot <= 765) {
        basic.showNumber(3)
        music.ringTone(330)
    } else if (pot >= 766 && pot <= 1023) {
        basic.showNumber(4)
        music.ringTone(349)
    }
})
