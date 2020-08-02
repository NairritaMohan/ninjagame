var ninja
var ground
var stone;
var diesound;
var jumpsound;
function preload(){
  bg=loadImage("woods.jpg");
  ninja_img=loadAnimation("ninja1.png","ninja2.png","ninja3.png","ninja4.png")
  stone_img=loadImage("stone.png")
  diesound.loadSound("")
  jumpsound.loadSound("")
  
}
function setup() {
  createCanvas(1700,400);
  ninja=createSprite(150,270,20,20)
  ninja.addAnimation("ninja",ninja_img);
  ninja.scale=0.5;
  ground=createSprite(850,380,1400,10);
  stone=createSprite(1600,330,20,20)
}


function draw() {
  background(bg);
  stone();
  ground.visible=false;
  if(keyDown(UP_ARROW) && ninja.y < 200){
    jumpsound.play()
  ninja.velocityY=-10;
  }
  ninja.velocityY=ninja.velocityY+0.5; 
  ninja.collide(ground);
 // if(ninja.isTouching()){}

 //collision detection

 if(ninja.x-stone.x < ninja.width/2 + stone.width/2
  && stone.x- ninja.x< ninja.width/2 + stone.width/2
  && ninja.y -  stone.y < ninja.height/2 + stone.height/2
  && stone.y - ninja.y < ninja.height/2 + stone.height/2){
 
    ninja.changeImage("staticninja")
    sound.play()

 }
 
  drawSprites();
  

}
function stone(){
  if(World.frameCount%100===0){

stone.addImage("stone",stone_img);
stone.scale=0.3;
stone.velocityX=-9;
}
}