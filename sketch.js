var cat ,mouse,cat_img1,mouse_img1,bg_img,cat_img2,mouse_img2;
var garden;
function preload() {
    //load the images here
    bg_img = loadImage("images/garden.png");
    cat_img1 = loadImage("images/cat1.png");
    mouse_img1 = loadImage("images/mouse1.png");
    cat_img2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouse_img2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat_finalImg = loadAnimation("images/cat4.png");
    mouse_finalImg = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    //garden =createSprite(200,400,50,50);
   // garden.addImage(bg_img);

    cat = createSprite(870,600);
    cat.addImage(cat_img1);
    cat.scale = 0.2;
    

    mouse = createSprite(200,600);
    mouse.addImage(mouse_img1);
    mouse.scale=0.15;
  

}

function draw() {

    background(bg_img);
    if(cat.x-mouse.x< cat.width/2 - mouse.width/2)
   {
      cat.velocityX = 0;
     cat.addAnimation("final_catIMG",cat_finalImg);
     cat.changeAnimation("final_catIMG");
     mouse.addAnimation("final_mouseImg",mouse_finalImg);
     mouse.changeAnimation("final_mouseImg");
     cat.x =300;
     cat.scale = 0.2;
     mouse.scale=0.15;

    }
    

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode == LEFT_ARROW){
      cat.velocityX =-4;
      cat.addAnimation("cat_animated",cat_img2);
      cat.changeAnimation("cat_animated");
      mouse.addAnimation("mouse_animated",mouse_img2);
      mouse.changeAnimation("mouse_animated");
  }

}
