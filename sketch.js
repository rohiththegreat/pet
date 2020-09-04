var dog,dogimage,dogHappy;
var database,foodstock;
var FoodS
function preload()
{
  dogimage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(400,500,100,100);
  dog.addImage(dogimage);
  dog.scale=0.3;
  database = firebase.database();
  foodstock = database.ref("food");
  foodstock.on("value",readstock);
}


function draw() {  
background("green")
if(keyWentDown(UP_ARROW)){
  writeStock(FoodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here

}

function writePosition(x,y){
  database.ref("food").set({
      'x':position.x+x,
      'y':position.y+y
  })

}
function readstock(data){
    FoodS = data.val();
}

function writeStock(x){ 
  if(x<=0){ x=0; }
  else{ x=x-1; } 
  database.ref('/').update({ Food:x }) }