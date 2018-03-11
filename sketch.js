var bg; 
var counter1;
var counter2; 
var counter3, counter4; 
var pistol; 
function preload(){
  bg = loadImage("images/duckhunt-uncleaned2.jpg");
  coin = loadImage("images/coin.png");
  pistol = loadImage("images/pistol.png");
  pistolFlip = loadImage("images/pistolFlip.png");  

  // hammer = loadImage("images/hammer.png");
  // evil = loadSound("sound/evil.wav");


}
function setup() {
  bg.resize(640,480);
  coin.resize(20,20);
  pistol.resize(200,200);
  pistolFlip.resize(200,200);
  createCanvas(640, 480);
  counter1 = 0;
  counter2 = 2500;
  counter3 = 1; 
  counter4 = 3; 
  myFont = loadFont('assets/AvenirNextLTPro-Demi.otf');



}

function draw(){
  imageMode(CORNER);
  background(bg);

  push();
    translate(0,0);
    rotate(radians(45));
    image(coin, 290,-280 );
  pop();
  textFont('Monospace');
  fill(255,255,255);
  stroke(1);
  strokeWeight(3);
  textSize(18);
  text('X',416,28);
  textSize(20);
  strokeWeight(4);
  text(counter1,440,28);
  text(counter2,408,50);
  fill(255,0,0);
  text(counter3+"UP",182,32);
  fill(255,255,255);
  text("x"+counter4,222,32);

  var gun = new Gun("pistol",1.0);
  gun.display();



}

class Gun{
  constructor(name, speed){
    this.type = name;
    this.bullets = 3;
    this.speed = speed;
    if (name == "pistol"){
      this.image = pistol;
      this.imageFlip = pistolFlip;
    }
  }


shot(){

} 

display(){
  imageMode(CENTER);
  push();
  translate(300,460);
  if (mouseX > 500){
    rotate(radians(310));
    image(this.imageFlip,0,0);
  }
  if (mouseX > 400 && mouseX < 500){
    rotate(radians(300));
    image(this.imageFlip,0,0);
  }
  if (mouseX > 300 && mouseX < 400){
    rotate(radians(280));
    image(this.imageFlip,0,0);
  }  
  if (mouseX > 200 && mouseX < 300){
    rotate(radians(90));
    image(this.image,0,0);
  }
  if (mouseX > 100 & mouseX < 200){
    rotate(radians(70));
    image(this.image,0,0);

  }
  if (mouseX < 100){
    rotate(radians(50));
    image(this.image,0,0);

  }  
  pop();


} 



}

class Duck{
  constructor(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

display(){

} 

move(){

} 

checkHit(){

}


}