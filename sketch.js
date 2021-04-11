const tot = 500;
let rainDrops = [];
let mvSound;
let bc = 0;
let button;


class rainDrop {
    constructor(x, y, v, sz, c) {
    this.x = x;
    this.y = y;
    this.v = v;
    this.sz = sz;
    this.c = c;
  }
  
  move() {
  this.y += this.v;
  this.k=this.sz/10;
  if (this.y > windowHeight){
    this.y = 0;
  }
  if (mouseIsPressed) {
  if(mouseButton===LEFT){
  this.v = 0;
  this.c =random(0,255);
  bc = random(0,50);
    }
    else{
      this.x += random(-10,10);
      bc = random(0,50);
    }
   
  }
  if (keyIsPressed){
    if (keyCode=== DOWN_ARROW){
    this.v = random(30,70);
    bc = 0;
      
    }
  
    if(keyCode === LEFT_ARROW){
      this.y-=this.v * 1.1;
      this.c =random(0,255);
      bc = random(0,50);
      if (this.y < 0){
      this.y = windowHeight-70;
      }
    }

  }
}
render() {
noStroke();
fill(this.c);
ellipse(this.x, this.y, this.k, this.k);
  }
}

function preload() {
  mvSound = loadSound('nowyouseeme.mp3'); 
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < tot; i++) {
  rainDrops[i] = new rainDrop(
  random(0, windowWidth), random(0, windowHeight),random(30, 100),
  random(30, 100), color(random(100, 255))); 
} 
  {button = createButton('play');
  button.position(10,10);
  button.mousePressed(startsound);

}
}

function draw() { 
  background(bc);
  for (let drop of rainDrops) {
    drop.move();
  drop.render(); 
    }
}
function startsound(){
  mvSound.play();
}
