/* /////////////////////////////////////

  4.043 / 4.044 Design Studio: Advanced Interactions
  February  18, 2021
  Marcelo Coelho

  If you come from Processing, there is a Processing version here. 
  Keep in mind that there are some differences between both versions:
  https://github.com/marcelocoelho/Interface1D

*/ /////////////////////////////////////


let displaySize = 30;   // how many pixels are visible in the game
let pixelSize = 20;     // how big should they look on screen

let playerOne;    // Adding 2 players to the game
let playerTwo;
// let playerThree;

// let bulletOne;
// let bulletTwo;

let target;       // add one target to left of screen.
let targetTwo;    // one to the right of the screen

let display;      // Aggregates our final visual output before showing it on the screen

let controller;   // This is where the state machine and software logic lives

let collisionAnimation;   // Where we store and manage the collision animation

// let score;        // Where we keep track of score and winner

let fired1 = 0; 
let fired2 = 0;// New variable for who pressed a key — boolean. 0 or 1. Name of the player or other player.
    // Empty until it is filled by information from the key press
    //Happens in the Ready to Draw state. Switches states after

let pixel0;
let pixel29;//New variable for pixel0 and pixel29 — pass the information of who is in it. 
    //When someone fires, we know who's in the pixel. Who fired tells you which pixel to start animation from.

//In next State, you reference that variable and tell Animation function how to animate
    //Just needs location of pixel to start the animation from. Not the key press.


function setup() {

  createCanvas((displaySize*pixelSize), pixelSize);     // dynamically sets canvas size

  display = new Display(displaySize, pixelSize);        //Initializing the display

  // playerOne = new Player(color(255,0,0), parseInt(random(0,displaySize)), displaySize);   // Initializing players
  // playerTwo = new Player(color(0,0,255), parseInt(random(0,displaySize)), displaySize);

  target = new Player(color(100), 0, displaySize);    // Initializing target using the Player class 
  targetTwo = new Player(color(100), 29, displaySize);      // Initializing second target called 

  playerOne = new Player(color(255,0,0), 14, displaySize);   // Initializing players at CENTER
  playerTwo = new Player(color(0,0,255), 15, displaySize);
  // playerTrhree = new Player(color(0,255,0), 5, displaySize);

  collisionAnimation = new Animation();     // Initializing animation

  controller = new Controller();            // Initializing controller

  score = {max:3, winner:color(0,0,0)};     // score stores max number of points, and color 

}

function draw() {

  // start with a blank screen
  background(0, 0, 0);    

  // Runs state machine at determined framerate
  controller.update();

  // After we've updated our states, we show the current one 
  display.show();


}


