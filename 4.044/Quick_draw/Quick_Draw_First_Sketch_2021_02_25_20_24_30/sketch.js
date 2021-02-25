var pOne = 300;
var pTwo = 300;
var y = 200;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  noStroke();
  fill(0, 100, 100);
  rectMode(CENTER)
  rect(pOne, y, 30, 30);

  noStroke();
  fill(100, 0, 0);
  rectMode(CENTER)
  rect(pTwo, y, 30, 30);

  //x = x + 1;


  if (pOne < 0) {
    pOne = 15;
  }

  if (pOne > 285) {
    pOne = 285
  }
  
  if (pTwo > 600) {
    pTwo = width - 15
  }
  
  if (pTwo < 315) {
      
     pTwo = 315 }

}


function keyPressed() {
  // if (keyCode === UP_ARROW) {
  //   y = y - 10;
  // } else if (keyCode === DOWN_ARROW) {
  //  y = y + 10;
  // }
  if (key == 'a' || key == 'A') {
    pOne = pOne - 30;
  } else if (key == 'd' || key == 'D') {
    pOne = pOne + 30;
  }


  if (key == 'j' || key == 'J') {
    pTwo = pTwo - 30;
  } else if (key == 'l' || key == 'L') {
    pTwo = pTwo + 30;
  }

  //     if (keyCode === LEFT_ARROW) {
  //     x = x - 30;
  //   } else if (keyCode === RIGHT_ARROW) {
  //     x = x + 30;
  //   }

}