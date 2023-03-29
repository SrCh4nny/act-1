let Dado = 0
input.onButtonPressed(Button.A, function () {
    Dado = randint(1, 6)
    if (Dado == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else if (Dado == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (Dado == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (Dado == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (Dado == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
