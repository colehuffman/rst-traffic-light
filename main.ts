input.onButtonPressed(Button.A, function () {
    // when A is pressed the "A" variable increases by 1
    A += 1
    // if "A"=4 the system resets and the normal light cycle starts again
    if (A == 4) {
        // resets the system
        control.reset()
    }
})
let A = 0
// On start the audio pin is set to p3
pins.setAudioPin(AnalogPin.P3)
// loops inside code forever
while (true) {
    // if "a"=0 the inside code is run
    if (A == 0) {
        // displays an x to function as a do not walk sign
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        // turns off p1 (yellow light)
        pins.digitalWritePin(DigitalPin.P1, 0)
        // turns on p0 (red light)
        pins.digitalWritePin(DigitalPin.P0, 1)
        // pauses for 60s(red light stays on for 60 seconds)
        basic.pause(60000)
    }
    // functions the same as previous if statement, multiple are used so that the entire cycle doesn't have to finish before a malfunction can be triggered.
    if (A == 0) {
        // turns off p0(red light)
        pins.digitalWritePin(DigitalPin.P0, 0)
        // turns on p2(green light)
        pins.digitalWritePin(DigitalPin.P2, 1)
        // displays a walk symbol
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # . #
            . . # # .
            . # . # .
            `)
        // loops inside code 19 times
        for (let index = 0; index <= 18; index++) {
            // plays High A# for 1/16 beat
            music.playTone(932, music.beat(BeatFraction.Sixteenth))
            // pauses for 2 beats
            music.rest(music.beat(BeatFraction.Double))
        }
        // loops inside code 8 times
        for (let index = 0; index <= 8; index++) {
            // counts down from 9 to 1
            basic.showString("" + (9 - index))
            // plays High A# for 4x the normal duration during the countdown so that visually impaired pedestrians know the walk cycle is ending soon
            music.playTone(932, music.beat(BeatFraction.Quarter))
            // pauses for 1/2 beat
            music.rest(music.beat(BeatFraction.Half))
        }
        // displays an "X" to function as a do not walk sign
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        // pauses for 29.5 seconds(green light stays on for 29.5 seconds + 30.5 seconds during the previous code)
        basic.pause(29500)
    }
    // functions the same as previous if statement, multiple are used so that the entire cycle doesn't have to finish before a malfunction can be triggered.
    if (A == 0) {
        // loops inside code 10 times
        for (let index = 0; index <= 9; index++) {
            // pauses for half a second
            basic.pause(500)
            // turns on p2 (green light)
            pins.digitalWritePin(DigitalPin.P2, 1)
            // pauses for half a second
            basic.pause(500)
            // turns off p2 (green light)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
        // turns on p1 (yellow light)
        pins.digitalWritePin(DigitalPin.P1, 1)
        // pauses for 3.6 seconds (yellow light stays on for 3.6 seconds)
        basic.pause(3600)
    }
    // 
    if (pins.digitalReadPin(DigitalPin.P0) == 1 || pins.digitalReadPin(DigitalPin.P2) == 1) {
        // turns off p2 (green light)
        pins.digitalWritePin(DigitalPin.P2, 0)
        // turns off p0(red light)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    // if "A"=1 the yellow light flashing malfunction is triggered
    // If "A"=2 the red light flashing malfunction is triggered
    // If "A"=3 the loop deactivates
    if (A == 1) {
        // turns on p1(yellow light)
        pins.digitalWritePin(DigitalPin.P1, 1)
        // pauses for .5 seconds
        basic.pause(500)
        // turns off p1 (yellow light)
        pins.digitalWritePin(DigitalPin.P1, 0)
        // pauses for .5 seconds
        basic.pause(500)
    } else if (A == 2) {
        // turns on p0(red light)
        pins.digitalWritePin(DigitalPin.P0, 1)
        // pauses for .5 seconds
        basic.pause(500)
        // turns off p0(red light)
        pins.digitalWritePin(DigitalPin.P0, 0)
        // pauses for .5 seconds
        basic.pause(500)
    } else if (A == 3) {
        // clears the screen
        basic.clearScreen()
        // breaks (stops) the loop
        break;
    }
}
