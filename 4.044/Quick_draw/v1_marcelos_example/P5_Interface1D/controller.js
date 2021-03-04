
// This is where your state machines and game logic lives


class Controller {

    // This is the state we start with.
    constructor() {
        this.gameState = "PACE";
       
    }
    
    // 
    update() {

        // STATE MACHINE ////////////////////////////////////////////////
        // This is where your game logic lives
        /////////////////////////////////////////////////////////////////
        switch(this.gameState) {

            // This is the main game state, where the playing actually happens
            case "PACE":

                // clear screen at frame rate so we always start fresh      
                display.clear();
            
                // // now add the target
                display.setPixel(target.position, target.playerColor);
                display.setPixel(targetTwo.position, targetTwo.playerColor);
                // display.setPixel(targetTwo.position, targetTwo.playerColor);

                // show all players in the right place, by adding them to display buffer
                display.setPixel(playerOne.position, playerOne.playerColor);
                display.setPixel(playerTwo.position, playerTwo.playerColor);
                

                // display.setPixel(bulletOne.position, bulletOne.playerColor);
                
                if (playerOne.position == 0 && playerTwo.position == 29) { // check if players are at designated ends
                    this.gameState = "READYDRAW"; // got to READYDRAW state
                    console.log ("ReadyDraw");
                } 
                
                // } 
                //check if pixel0 AND pixel 29 have a player in them. OR check location of players.
                //Check once every frame. Switch this.gamestate
                    //where do store this information? Don't need a variable. It's a conditional statement. If these conditions are satisfied, advance the state
                // if true, NEXT STATE

            case "READYDRAW":
             if ((key == 'w' || key == 'W') && (playerOne.position == 0 && playerTwo.position == 29)) {
                 this.gameState = "FIRED";
                 console.log ("playerOne fired")
                 this.fired1 == true
             }

             if ((key == 'i' || key == 'I') && (playerOne.position == 0 && playerTwo.position == 29)) {
                this.gameState = "FIRED";
                console.log ("playerTwo fired")
                this.fired2 == true
            }
            //     //Both pixel0 and pixel29 are occupied by a Player
            //     //Lock players in place
            //     //Listen for a key press
            //     //Record first key press
            //     //If a key press happens, the state changes again
            //         //Information to pass —> Which player presses. If statement:
            //             //If playerOne presses, pass pixel0. Assign Pixel0 to global variable. 
            //             //If playerTwo, assign Pixel29 (or display size).
            //     //Move to "Fired" STATE
            
            case "FIRED":

            //     display.clear();
            //     //Get player who press info. Which side/player pressed first
                //Animate according to information. Direction of motion
                    //Function — argument could be player or the side of the board that fired. Left or Right.
                    
                //State Chage. Back to beginning

            
            // This state is used to play an animation, after a target has been caught by a player 
            // case "FIRED":
                
            //      // clear screen at frame rate so we always start fresh      
            //      display.clear();

            //     // play explosion animation one frame at a time.
            //     // first figure out what frame to show
            //     let frameToShow = collisionAnimation.currentFrame();    // this grabs number of current frame and increments it 
                
            //     // then grab every pixel of frame and put it into the display buffer
            //     for(let i = 0; i < collisionAnimation.pixels; i++) {
            //         display.setPixel(i,collisionAnimation.animation[frameToShow][i]);                    
            //     }

            //     //check if animation is done and we should move on to another state
            //     if (frameToShow == collisionAnimation.animation.length-1)  {
                
            //         this.gameState = "PACE"; // Game is OVER
            //     }

        }
    }
}



// test

// This function gets called when a key on the keyboard is pressed
function keyPressed() {

    // Move player one to the left if letter A is pressed
    if (key == 'A' || key == 'a') {
        playerOne.move(-1);
      }
    
    // And so on...
    if (key == 'D' || key == 'd') {
    playerOne.move(1);
    }    

    if (key == 'J' || key == 'j') {
    playerTwo.move(-1);
    }
    
    if (key == 'L' || key == 'l') {
    playerTwo.move(1);
    }

    // if (key == 'W' || key == 'w') {
    //     this.gameState = "FIRED";
    //     console.log ("playOne Fired");
    //     console.log ("Move to FIRED state")
    //     } else {
    //         this.gameState = "PACE"
    //     }
    
    // if (key == 'I' || key == 'i') {
    //     this.gameState = "FIRED"
    //     console.log ("playerTwo Fired");
    //     console.log ("Move to FIRED state")
    //     } else {
    //         this.gameState = "PACE"
    //     }

    // When you press the letter R, the game resets back to the play state
    if (key == 'R' || key == 'r') {
    controller.gameState = "PACE";
    }
  }