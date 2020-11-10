let indeks = 0
let strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
let range = strip.range(0, 5)
basic.forever(function () {
    for (let index = 0; index < 80; index++) {
        indeks = indeks + 2
        strip.setBrightness(indeks)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(10)
    }
    for (let index = 0; index < 80; index++) {
        indeks = indeks - 2
        strip.setBrightness(indeks)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(10)
    }
    for (let index = 0; index < 80; index++) {
        indeks = indeks + 2
        strip.setBrightness(indeks)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(10)
    }
    for (let index = 0; index < 80; index++) {
        indeks = indeks - 2
        strip.setBrightness(indeks)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(10)
    }
})
