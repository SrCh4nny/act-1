Numero = 0

def on_button_pressed_a():
    global Numero
    Numero = 0
    for index in range(10):
        basic.pause(100)
        basic.show_number(Numero)
        Numero += 1
    for index2 in range(10):
        basic.pause(100)
        basic.show_number(Numero)
        Numero += -1
    basic.pause(100)
    basic.show_icon(IconNames.YES)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)
