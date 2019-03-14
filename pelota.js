var gotas = [];

function setup() {
	createCanvas(400, 400);
	for (var i = 0; i < 150; i++) {
	gotas[i] = new gota();
	}
}

function draw() {
	background(220);
	for (var i = 0; i < gotas.length; i++) {
		gotas[i].mostrar();
		gotas[i].caer();

		if (gotas[i].salir()) {
			gotas[i].retornar();
			console.log(gotas[i].salir());
		}
	}
}







var pelotas = [];

function setup() {
  createCanvas(400, 400);
for(var i = 0; i < 100; i++){
	pelotas[i] = new Ball();
  }
}

function draw() {
  background(220);
  for(var i = 0; i < pelotas.length; i++){
	pelotas[i].mostrar();
	pelotas[i].mover();
	if (pelotas[i].salirx()){
  pelotas[i].botarx();	
	}	
	if (pelotas[i].saliry()){
  pelotas[i].botary();	
	}	
  }	
	
}
class Ball{
constructor (){
	this.x = random (25,375);
	this.y = random (25,375);
	this.tam= 50;
	this.velx = random(1,10);
	this.vely= random(1,10);
	this.colorR = random(0,255);
	this.colorG = random(0,255);
	this.colorB = random(0,255);
}
	mostrar(){
    noStroke();
		fill(this.colorR, this.colorG, this.colorB, 200);
		ellipse(this.x,this.y,this.tam,this.tam);
		
	}
	mover(){
		this.x= this.x + this.velx;
		this.y= this.y + this.vely;
	
	}
	salirx(){
		var res;
	if (this.x < 25 || this.x > 375){
		res = true;
	}
		else{
		res = false;
		}
		return res;
	}
	botarx(){
	this.velx = this.velx*(-1);
	this.colorR = random(0,255);
	this.colorG = random(0,255);
	this.colorB = random(0,255);

	}
	saliry(){
		var res;
	if (this.y < 25 || this.y > 375){
		res = true;
	}
		else{
		res = false;
		}
		return res;
	}
	botary(){
	this.vely = this.vely*(-1);
	this.colorR = random(0,255);
	this.colorG = random(0,255);
	this.colorB = random(0,255);


	}
}
