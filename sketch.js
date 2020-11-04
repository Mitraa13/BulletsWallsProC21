
var bullet,wall,bullet1,wall1,bullet2,wall2,bullet3,wall3;
var speed,weight,speed1,weight1,speed2,weight2,speed3,weight3;
var thickness,thickness1,thickness2,thickness3;
var line1,line2,line3;
var top,bottom,left,right;

function setup() {
  
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  speed1=random(223,321);
  weight1=random(30,52);
  speed2=random(223,321);
  weight2=random(30,52);
  speed3=random(223,321);
  weight3=random(30,52);

  thickness=random(22,83);
  thickness1=random(22,83);
  thickness2=random(22,83);
  thickness3=random(22,83);

  bullet = createSprite(50,50,30,10);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  bullet1 = createSprite(50,150,30,10);
  bullet1.velocityX=speed1;
  bullet1.shapeColor="white";
  bullet2 = createSprite(50,250,30,10);
  bullet2.velocityX=speed2;
  bullet2.shapeColor="white";
  bullet3 = createSprite(50,350,30,10);
  bullet3.velocityX=speed3;
  bullet3.shapeColor="white";

  wall = createSprite(1200,50,thickness,40);
  wall.shapeColor=(80,80,80);
  wall1 = createSprite(1200,150,thickness1,40);
  wall1.shapeColor=(80,80,80);
  wall2 = createSprite(1200,250,thickness2,40);
  wall2.shapeColor=(80,80,80);
  wall3 = createSprite(1200,350,thickness3,40);
  wall3.shapeColor=(80,80,80);

  line1 = createSprite(800,100,1600,5);
  line1.shapeColor="lightblue";
  line2 = createSprite(800,200,1600,5);
  line2.shapeColor="lightblue";
  line3 = createSprite(800,300,1600,5);
  line3.shapeColor="lightblue";
  
  top = createSprite(800,0,1600,10);
  bottom = createSprite(800,400,1600,10);  
  left = createSprite(1600,200,10,400);
  right = createSprite(0,200,10,400);


} 

function draw() {
  
  background(0);  

  if(bullet.x>=1200){
    bullet.x=wall.x-20;
    bullet.velocityX=0;
  }

  if(bullet1.x>=1200){
    bullet1.x=wall.x-20;
    bullet1.velocityX=0;
  }

  if(bullet2.x>=1200){
    bullet2.x=wall.x-20;
    bullet2.velocityX=0;
  }

  if(bullet3.x>=1200){
    bullet3.x=wall.x-20;
    bullet3.velocityX=0;
  }

  if(collide(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      bullet.shapeColor=color(255,0,0);
      fill("red");
      stroke("red");
      textSize(20);
      text("Not Effective",1400,50);
      textSize(10);
      text("Speed:"+speed,1400,60);
      text("Thickness:"+thickness,1400,70);
      text("Weight:"+weight,1400,80);
    }
    if(damage<10){
      bullet.shapeColor=color(0,255,0);
      fill("green");
      stroke("green");
      textSize(20);
      text("Effective",1400,50);
      textSize(10);
      text("Speed:"+speed,1400,60);
      text("Thickness:"+thickness,1400,70);
      text("Weight:"+weight,1400,80);
    }
  }

  if(collide(bullet1,wall1)){
    bullet1.velocityX=0;
    var damage1=0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1);

    if(damage1>10){
      bullet1.shapeColor=color(255,0,0);      
      fill("red");
      stroke("red");
      textSize(20);
      text("Not Effective",1400,150);
      textSize(10);
      text("Speed:"+speed1,1400,160);
      text("Thickness:"+thickness1,1400,170);
      text("Weight:"+weight1,1400,180);
    }
    if(damage1<10){
      bullet1.shapeColor=color(0,255,0);
      fill("green");
      stroke("green");
      textSize(20);
      text("Effective",1400,150);
      textSize(10);
      text("Speed:"+speed1,1400,160);
      text("Thickness:"+thickness1,1400,170);
      text("Weight:"+weight1,1400,180);
    }
  }

  if(collide(bullet2,wall2)){
    bullet2.velocityX=0;
    var damage2=0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2);

    if(damage2>10){
      bullet2.shapeColor=color(255,0,0);
      fill("red");
      stroke("red");
      textSize(20);
      text("Not Effective",1400,250);      
      textSize(10);
      text("Speed:"+speed2,1400,260);
      text("Thickness:"+thickness2,1400,270);
      text("Weight:"+weight2,1400,280);
    }
    if(damage2<10){
      bullet2.shapeColor=color(0,255,0);
      fill("green");
      stroke("green");
      textSize(20);
      text("Effective",1400,250);
      textSize(10);
      text("Speed:"+speed2,1400,260);
      text("Thickness:"+thickness2,1400,270);
      text("Weight:"+weight2,1400,280);
    }
  }

  if(collide(bullet3,wall3)){
    bullet3.velocityX=0;
    var damage3=0.5*weight3*speed3*speed3/(thickness3*thickness3*thickness3);

    if(damage3>10){
      bullet3.shapeColor=color(255,0,0);
      fill("red");
      stroke("red");
      textSize(15);
      text("Not Effective",1400,350);
      textSize(10);
      text("Speed:"+speed3,1400,360);
      text("Thickness:"+thickness3,1400,370);
      text("Weight:"+weight3,1400,380);
    }
    if(damage3<10){
      bullet3.shapeColor=color(0,255,0);
      fill("green");
      stroke("green");
      textSize(15);
      text("Effective",1400,350);
      textSize(10);
      text("Speed:"+speed3,1400,360);
      text("Thickness:"+thickness3,1400,370);
      text("Weight:"+weight3,1400,380);
    }
  }

  bullet.depth=wall.depth;
  bullet.depth=wall.depth+1;
  bullet1.depth=wall1.depth;
  bullet1.depth=wall1.depth+1;
  bullet2.depth=wall2.depth;
  bullet2.depth=wall2.depth+1;
  bullet3.depth=wall3.depth;
  bullet3.depth=wall3.depth+1;

  drawSprites();

}

function collide(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
}
