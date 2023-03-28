let Numero = 0
input.onButtonPressed(Button.A, function () {
    Numero = 0
    for (let index = 0; index < 10; index++) {
        basic.pause(100)
        basic.showNumber(Numero)
        Numero += 1
    }
    for (let index = 0; index < 10; index++) {
        basic.pause(100)
        basic.showNumber(Numero)
        Numero += -1
    }
    basic.pause(100)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
