var cat,cat1img,cat2img,cat3img,cat4img;
var mouse,mouse1img ,mouse2img ;
var background, backgroundImg;


function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png")
    cat1img =  loadAnimation("images/cat1.png")
    cat2img =  loadAnimation("images/cat2.png","images/cat3.png")
    cat3img = loadAnimation("images/cat4.png")

    mouse1img =  loadAnimation("images/mouse1.png")
    mouse2img =  loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3img = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);

    scene = createSprite(500,400,);
    scene.addImage(backgroundImg);
    scene.scale = 1.2;
    
    cat=createSprite(920,700) 
    cat.addAnimation("cat",cat1img)
    cat.scale=0.20

    mouse=createSprite(120,700) 
    mouse.addAnimation("mouse",mouse1img)
    mouse.scale=0.20
}

function draw() {

    background(255);
    
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x < (cat.width - mouse.width)/2 ){
      
    
    mouse.addAnimation("mouse3",mouse3img)
    mouse.changeAnimation("mouse3")
    
    
   }


  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW)
 mouse.addAnimation("mouse",mouse2img)
 mouse.changeAnimation("mouse")

 cat.addAnimation("cat2",cat2img)
  cat.changeAnimation("cat2")
  cat.x+1
  
    cat.velocityX=-2
}


