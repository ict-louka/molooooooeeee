input.onGesture(Gesture.Shake, function () {
    basic.showNumber(3)
    basic.pause(500)
    basic.showNumber(2)
    basic.pause(500)
    basic.showNumber(1)
    basic.pause(500)
    basic.showString("Go!")
    basic.pause(100)
    mol = randint(1, 2)
    

    if (mol=2) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            . . . . #
            `)
    }
    let knopingeduwd=0;
    while (knopingeduwd=0) {
    	if (input.buttonIsPressed(Button.A)) {knopingeduwd=1;}
        
        if (input.buttonIsPressed(Button.B)) {knopingeduwd=2;
        }
    
    }
     if ((mol=1) && (knopingeduwd=1))
     {

        music.playTone(Note.C, music.beat())
     }
    if ((mol=2) && (knopingeduwd=2))
     {

        music.playTone(Note.C, music.beat())
     }
    
    
    
    
    
    if (mol=1) {
        input.buttonIsPressed(Button.A)
    } else if (mol=2) {
        input.buttonIsPressed(Button.B)
    } else {
    	
    }
    for (let index = 0; index < aantal; index++) {
    	
    }
})
let aantal = 0
let mol = 0
aantal = 1
