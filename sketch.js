//Create variables here
var dog,happyDog,sadDog;
var database;
var foodS,foodStock;
function preload(){
  //load images here
  happyDog=loadImage("images/dogImg.png");
  sadDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  var dog=createSprite(250,350,100,200);
  food=new Food()
  dog.scale=0.2;
  dog.addImage(happyDog);
  dog.addImage(sadDog);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
background("cyan");

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  //dog.addImage(happyDog);
}
food.display();

  drawSprites();
  //add styles here
  stroke("white");
  fill("black");
  textSize(20);
  text("Food-  "+foodS,250,70);
  text("Note-Press the up arrow key to feed the dog!",50,30);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<0){
      x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x

   
  })
}


