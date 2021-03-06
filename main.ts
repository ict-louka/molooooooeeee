input.onGesture(Gesture.Shake, function () {
    const p = 100
    basic.showNumber(3)
    basic.pause(p)
    basic.showNumber(2)
    basic.pause(p)
    basic.showNumber(1)
    basic.pause(p)
    basic.showString("Go!")
    basic.pause(100)
    let spelbezig=true
    let startTijd = 0

    while (spelbezig==true){
        let mol = Math.randomRange(1, 2)
        if (mol==1) {
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
        startTijd = input.runningTime() ;
        while ((knopingeduwd==0 ) && spelbezig) {
            if (input.buttonIsPressed(Button.A)) {knopingeduwd=1;}
            if (input.buttonIsPressed(Button.B)) {knopingeduwd=2;}
            if (input.runningTime() - startTijd > 2000) {
                spelbezig = false;
                music.playTone(Note.F, music.beat())
            } 
        }
        if (mol==knopingeduwd)      {
            music.playTone(Note.A, music.beat())
        }
        else {
            music.playTone(Note.C, music.beat())
            spelbezig=false
        }	
    }  
    basic.showString("Game over!")
})