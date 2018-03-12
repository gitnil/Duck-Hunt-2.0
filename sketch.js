var bg; 
var counter1;
var counter2; 
var counter3, counter4; 
var pistol; 
var gun;
var bul; 
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
  gun = new Gun("pistol",1.0);
  fill(255);



}

function draw(){
  imageMode(CORNER);
  background(bg);
  bul = ellipse(400,360,50,50);

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



  gun.display();
  if (gun.bulletMove == true){
   gun.move();
  }


}

class Gun{
  constructor(name, speed){
    this.type = name;
    this.bullets = 3;
    this.speed = speed;
    this.shotX = 320;
    this.shotY = 420; 
    this.travelX = 0;
    this.travelY = 0; 
    this.sizeX = 25;
    this.sizeY = 25; 
    this.bulletMove = false;
    if (name == "pistol"){
      this.image = pistol;
      this.imageFlip = pistolFlip;
    }
  }


shoot(mX, mY){
  this.bullets--;
  console.log("bullets now "+this.bullets);
  push();
  translate(300,460);
  ellipse(this.shotX,this.shotY,25,25);
  this.travelX = mX;
  this.travelY = mY; 
  pop();
} 

move(){
  var calc = dist(this.shotX,this.shotY,this.travelX,this.travelY);
  if (calc > 25){
    this.bulletMove = true; 
    console.log("bullet will move");
  }
  if (calc < 25){
    this.bulletMove = false; 
    console.log("bullet will NOT move");
       // checkHit(); 
    this.shotX = 320;
    this.shotY = 420;
    this.sizeX = 25;
    this.sizeY = 25; 
  }  
  if (this.bulletMove == true){
  if(this.shotX < this.travelX){
    this.shotX += this.speed;
  }
  if(this.shotX > this.travelX){
    this.shotX -= this.speed;
  }
  if(this.shotY < this.travelY){
    this.shotY += this.speed;
  }
  if(this.shotY > this.travelY){
    this.shotY -= this.speed;
  }
  // if( (this.travelX - this.shotX) > (this.travelY - this.shotX)){
  //   this.shotX 
  // }
  if (calc > 300){
    this.sizeX = 25;
    this.sizeY = 25; 
  }
  if (calc > 200 && calc < 300){
    this.sizeX = 20;
    this.sizeY = 20; 
  }
  if (calc > 125 && calc < 150){
    this.sizeX = 15;
    this.sizeY = 15; 
  }
  if (calc > 100 && calc < 125){
    this.sizeX = 12;
    this.sizeY = 12; 
  }
  if (calc > 75 && calc < 100){
    this.sizeX = 9;
    this.sizeY = 9; 
  }
  if (calc > 50 && calc < 75){
    this.sizeX = 7;
    this.sizeY = 7; 
  }  
  if (calc > 25 && calc < 50){
    this.sizeX = 5; 
    this.sizeY = 5; 

  }

}
text("X,Y is "+this.shotX+"and "+this.shotY,10,200);
text("X,Y is "+this.travelX+"and "+this.travelY,10,300);
}

display(){
  text("Bullets"+this.bullets,10,400);
  imageMode(CENTER);

  ellipse(this.shotX,this.shotY,this.sizeX,this.sizeY);
  this.travelX = mouseX;
  this.travelY = mouseY; 

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


function mouseClicked(){
  console.log("how many times is this running?");
  if (gun.bullets > 0){
    var paramX = mouseX;
    var paramY = mouseY;
  gun.shoot(paramX,paramY);
  gun.bulletMove = true; 
}
}