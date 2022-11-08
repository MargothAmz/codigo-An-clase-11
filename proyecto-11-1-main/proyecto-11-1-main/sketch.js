var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bombaimg,monedaimg,sodaimg;
var bomba, moneda, soda;
var count=0;
//crea una varible para el grupo
var M;
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombaimg = loadImage("bomb.png");
  monedaimg = loadImage("coin.png");
  sodaimg = loadImage("energyDrink.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//crear sprite de niño corriendo
boy = createSprite(180,340,100,100);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
//leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

//Genera un nuevo grupo donde meter a tus monedas
M=new Group();

}

function draw() {
  background(0);
  path.velocityY = 4;

  boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  if(path.y > 400 ){ 
    path.y = height/2;
  }
  // la estructura correra es groupl.isTouching(sprite);
  if(M.isTouching(boy)){
    count=count+1;
   
    console.log(count);
    }

  monedas();
  sodas();
  bombas();
  
  drawSprites();
}

function bombas(){
 if(frameCount%120==0){
  bomba= createSprite(650,20,40,10);
  bomba.addImage(bombaimg);
  bomba.scale=0.1
  bomba.velocityY=4;
  bomba.x=Math.round(random(40,360));

 }
}
function monedas(){
  if(frameCount%150==0){
   moneda= createSprite(650,20,40,10);
   moneda.addImage(monedaimg);
   moneda.scale=0.5
   moneda.velocityY=4;
   moneda.x=Math.round(random(40,360));
   //Metes en un grupo cada sprite de manera independiente
   M.add(moneda);

   
  }
 }function sodas(){
  if(frameCount%100==0){
   soda= createSprite(650,20,40,10);
   soda.addImage(sodaimg);
   soda.scale=0.1
   soda.velocityY=4;
   soda.x=Math.round(random(40,360));
  }
 }
