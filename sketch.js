  var redballoon;
  var red;
  var blueballoon;
  var blue;
  var pinkballoon; 
  var pink;
  var greenballoon; 
  var green;
  var bow;
  var scene;
  var arrows;
  var temp_arrow;
var red1,blue1,pink1,green1;
var arrow;
var backgroundscene;
var select_balloon;
  function preload() {

  red1 = loadImage("red_balloon0.png");
  blue1 = loadImage("blue_balloon0.png");
  pink1= loadImage("pink_balloon0.png");
  green1 = loadImage("green_balloon0.png");
  bow0 = loadImage ("bow0.png");
  backgroundscene = loadImage("background0.png", "background20");
  arrows = loadImage("arrow0.png");
  }

  function setup() {
  createCanvas(400, 400);
  bow = createSprite (370,200,20,40);
  bow.addImage ("wood", bow0);
  bow.scale = 1;

  scene = createSprite(0,0,800,800);
  scene.addAnimation ("back", backgroundscene);
  scene.scale = 2;
  scene.x = scene.width/2;
  scene.velocityX = -2;

  }
  function draw() {
   
  background(220);
  createEdgeSprites()

   //spawnBlue()
   //spawnRed()
   //spawnPink()
   //spawnGreen()
  
    bow.y = mouseY;
  
    var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      spawnRed();
    } else if (select_balloon == 2) {
      spawnGreen();
    } else if (select_balloon == 3) {
      spawnBlue();
    } else {
      spawnPink();
    }
  }
  if (scene.x < 0) {
  scene.x = scene.width / 2
  }
  //scene.depth = bow.depth;
  bow.depth = bow.depth+1;

    if (keyDown ("space")){ 
     var temp_arrow = createArrow();
    temp_arrow.addImage(arrows);
     temp_arrow.y = bow.y;
   }

   
   
  drawSprites()

  }
  function createArrow(){  
  arrow = createSprite (327,200,5,10);  
  arrow.scale = 0.3
    arrow.velocityX= -6;
    arrow.lifetime = 390;
    return arrow;
    
      }

  
function spawnPink (){
    if (frameCount %80 === 0){

    pinkballoon = createSprite(0,Math.round(random(40,390)),10,10);
    pinkballoon.addImage (pink1);
    pinkballoon.velocityX = 3
    pinkballoon.lifetime = 300
    pinkballoon.scale= 0.1;
    }
  }

   function spawnGreen(){
    if (frameCount %80 === 0){

    greenballoon = createSprite(0,Math.round(random(50,400)),10,10);
    greenballoon.addImage (green1);
    greenballoon.velocityX = 3
    greenballoon.lifetime = 300
    greenballoon.scale= 0.1;
    }
  }

function spawnRed (){
    if (frameCount %80 === 0){

    redballoon = createSprite(0,Math.round(random(20,370)),10,10);
    redballoon.addImage (red1);
    redballoon.velocityX = 3
    redballoon.lifetime = 300
    redballoon.scale= 0.1;
    }
  }

  
  function spawnBlue (){
    if (frameCount %80 === 0){

    var blue = createSprite(0,Math.round(random(20,370)),10,10);
    blue.addImage ( blue1);
    blue.velocityX = 3;
    blue.lifetime = 300;
    blue.scale= 0.1;
    }
  }

  