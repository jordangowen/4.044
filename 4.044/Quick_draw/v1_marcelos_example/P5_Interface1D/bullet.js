
// This holds some player information, like color and position.
// It also has some player methods for managing how a player moves.


class Bullet {
  
    constructor(_color, _position, _displaySize) {
        this.playerColor = _color;
        this.position = _position;
        this.score = 0;
        this.displaySize = _displaySize;
    }



    // Move player based on keyboard input
    move(_direction) {

        // increments or decrements player position
        this.position = this.position + _direction;
      
        // // if player hits the edge of display, loop around
        // if (this.position == -1) {
        //     this.position = this.displaySize - 1;
        // } else if (this.position == this.displaySize) {
        //     this.position = 0;
        // } 

          // if player hits the edge of display, STOP
          if (this.position == -1) {
            this.position = 0;
        } else if (this.position >= this.displaySize) {
            this.position = this.displaySize - 1;
        } 
    
    // move(_speed) {
    //     this.position = 

    // }
         
    } 
  }



  class Bubble {
    constructor(x, y, r = 50) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.brightness = 0;
    }
    
    intersects(other) {
      let d = dist(this.x, this.y, other.x, other.y);
      if (d < other.r + other.r) {
      background(200, 0, 100, 80);
      }
      }
  
    changeColor(bright) {
      this.brightness = bright;
    }
  
    //   contains(px, py) {
    //     let d = dist(px, py, this.x, this.y)
    //     if (d < this.r) {
    //       return true;
    //     } else {
    //       return false;
    //     }
  
    //   }
  
    move() {
      this.x = this.x + random(-2, 2);
      this.y = this.y + random(-2, 2);
    }
  
    // clicked(px, py){ 
    //   let d = dist(px, py, this.x, this.y)
    //   if (d < this.r) {
    //   this.brightness = 255;
    //   }
    // }
  
    show() {
      stroke(255);
      strokeWeight(4);
      fill(this.brightness, 100, 100, 80);
      // fill(100);
      ellipseMode(CENTER);
      ellipse(this.x, this.y, this.r * 2);
    }
  }