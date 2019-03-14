var img;
var f;

function preload() {
  img = loadImage('fortnite1.png');
}

function setup() {
  createCanvas(400, 400);
  f = new Fortnite();
}

function draw() {
  background(220);
  f.mostrar();
  if (keyIsPressed && keyCode == RIGHT_ARROW){
    f.derecha();
  }
  if (keyIsPressed && keyCode == LEFT_ARROW){
    f.izquierda();
  }
  if (keyIsPressed && keyCode == DOWN_ARROW){
    f.abajo();
  }

  if (keyIsPressed && keyCode == UP_ARROW){
    f.arriba();
  }

}



class Fortnite {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.vely = 10;
    
  }
  mostrar() {
    imageMode(CENTER);
    image(img, this.x, this.y, 450, 450);
  }


  derecha() {
    this.x = this.x + this.vely;
  }
  izquierda() {
    this.x = this.x - this.vely;
  }
  arriba (){
  this.y = this.y - this.vely;
  }
  abajo (){
  this.y = this.y+this.vely;
  }
}
