def on_button_pressed_a():
    global A
    # when A is pressed the "A" variable increases by 1
    A += 1
    # if "A"=4 the system resets and the normal light cycle starts again
    if A == 4:
        # resets the system
        control.reset()
input.on_button_pressed(Button.A, on_button_pressed_a)

A = 0
# On start the audio pin is set to p3
pins.set_audio_pin(AnalogPin.P3)
# loops inside code forever
while True:
    # if "a"=0 the inside code is run
    if A == 0:
        # displays an x to function as a do not walk sign
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        # turns off p1 (yellow light)
        pins.digital_write_pin(DigitalPin.P1, 0)
        # turns on p0 (red light)
        pins.digital_write_pin(DigitalPin.P0, 1)
        # pauses for 60s
        basic.pause(60000)
    # functions the same as previous if statement, multiple are used so that the entire cycle doesn't have to finish before a malfunction can be triggered.
    if A == 0:
        # turns off p0(red light)
        pins.digital_write_pin(DigitalPin.P0, 0)
        # turns on p2(green light)
        pins.digital_write_pin(DigitalPin.P2, 1)
        # displays a walk symbol
        basic.show_leds("""
            . . # . .
            . # # # .
            . # # . #
            . . # # .
            . # . # .
            """)
        # loops inside code 19 times
        for index in range(19):
            # plays High A# for 1/16 beat
            music.play_tone(932, music.beat(BeatFraction.SIXTEENTH))
            # pauses for 2 beats
            music.rest(music.beat(BeatFraction.DOUBLE))
        # loops inside code 8 times
        for index2 in range(9):
            # counts down from 9 to 1
            basic.show_string("" + str((9 - index2)))
            # plays High A# for 4x the normal duration during the countdown so that visually impaired pedestrians know the walk cycle is ending soon
            music.play_tone(932, music.beat(BeatFraction.QUARTER))
            # pauses for 1/2 beat
            music.rest(music.beat(BeatFraction.HALF))
        # displays an "X" to function as a do not walk sign
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        # pauses for 29.5 seconds
        basic.pause(29500)
    # functions the same as previous if statement, multiple are used so that the entire cycle doesn't have to finish before a malfunction can be triggered.
    if A == 0:
        # loops inside code 10 times
        for index3 in range(10):
            # pauses for half a second
            basic.pause(500)
            # turns on p2 (green light)
            pins.digital_write_pin(DigitalPin.P2, 1)
            # pauses for half a second
            basic.pause(500)
            # turns off p2 (green light)
            pins.digital_write_pin(DigitalPin.P2, 0)
        # turns on p1 (yellow light)
        pins.digital_write_pin(DigitalPin.P1, 1)
        # pauses for 3.6 seconds
        basic.pause(3600)
    if pins.digital_read_pin(DigitalPin.P0) == 1 or pins.digital_read_pin(DigitalPin.P2) == 1:
        # turns off p2 (green light)
        pins.digital_write_pin(DigitalPin.P2, 0)
        # turns off p0(red light)
        pins.digital_write_pin(DigitalPin.P0, 0)
    # if "A"=1 the yellow light flashing malfunction is triggered
    # If "A"=2 the red light flashing malfunction is triggered
    # If "A"=3 the loop deactivates
    if A == 1:
        # turns on p1(yellow light)
        pins.digital_write_pin(DigitalPin.P1, 1)
        # pauses for .5 seconds
        basic.pause(500)
        # turns off p1 (yellow light)
        pins.digital_write_pin(DigitalPin.P1, 0)
        # pauses for .5 seconds
        basic.pause(500)
    elif A == 2:
        # turns on p0(red light)
        pins.digital_write_pin(DigitalPin.P0, 1)
        # pauses for .5 seconds
        basic.pause(500)
        # turns off p0(red light)
        pins.digital_write_pin(DigitalPin.P0, 0)
        # pauses for .5 seconds
        basic.pause(500)
    elif A == 3:
        # clears the screen
        basic.clear_screen()
        # breaks (stops) the loop
        break