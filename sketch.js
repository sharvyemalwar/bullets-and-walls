var bullet1,bullet2,bullet3,bullet4,wall1,wall2,wall3,wall4;
var speed1,speed2,speed3,speed4;
var weight1,weight2,weight3,weight4;
var deform;
var thickness1;

function setup() {
  createCanvas(1600,400);
  bullet1=createSprite(50, 50, 40, 10);
  bullet2=createSprite(50, 150, 40, 10);
  bullet3=createSprite(50, 250, 40, 10);
  bullet4=createSprite(50, 350, 40, 10);

  thickness1 = random(22,83);
  
  wall1=createSprite(10,100,3500,5);
  wall2=createSprite(10,200,3500,5);
  wall3=createSprite(10,300,3500,5);
  wall4=createSprite(1200,200,thickness1,400);
  
  
  wall1.shapeColor= color(180,200,80);
  wall2.shapeColor= color(180,200,80);
  wall3.shapeColor= color(180,200,80);
  wall4.shapeColor= color(250,100,70);

  
  speed1 = random(223,321);  
  speed2 = random(55,110);
  speed3 = random(55,150);
  speed4= random(55,190);

  weight1 = random(30,52);
  weight2 = random(300,1000);
  weight3 = random(500,2500);
  weight4 = random(200,3500);

  
}

function draw() {
  background(0); 
  
  

  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;
  bullet4.velocityX = speed4;

//crash test 
  
if(hascollided1(bullet1,wall4)){
  bullet1.velocityX=0
  var deform = (0.5*weight1*speed1*speed1)/(thickness1*thickness1*thickness1);
  if(deform>10){
    wall4.shapeColor=color(255,0,0);
  }

  if(deform<10){
    wall4.shapeColor=color(0,255,0);
  }
}

if(hascollided2(bullet2,wall4)){
  bullet2.velocityX=0
  var deform = (0.5*weight2*speed2*speed2)/(thickness1*thickness1*thickness1);
  if(deform>10){
    wall4.shapeColor=color(255,0,0);
  }

  if(deform<10){
    wall4.shapeColor=color(0,255,0);
  }
}

if(hascollided3(bullet3,wall4)){
  bullet3.velocityX=0
  var deform = (0.5*weight3*speed3*speed3)/(thickness1*thickness1*thickness1);
  if(deform>10){
    wall4.shapeColor=color(255,0,0);
  }

  if(deform<10){
    wall4.shapeColor=color(0,255,0);
  }


}


if(hascollided4(bullet4,wall4)){
  bullet4.velocityX=0
  var deform = (0.5*weight4*speed4*speed4)/(thickness1*thickness1*thickness1);
  if(deform>10){
    wall4.shapeColor=color(255,0,0);
  }

  if(deform<10){
    wall4.shapeColor=color(0,255,0);
  }
}
drawSprites();
}

function hascollided1(lbullet,lwall){
bullet1RightEdge=lbullet.x+lbullet.width;
wall4LeftEdge =lwall.x;
if(bullet1RightEdge>=wall4LeftEdge){
return true;
}

return false;
}

function hascollided2(lbullet,lwall){
  bullet2RightEdge=lbullet.x+lbullet.width;
  wall4LeftEdge =lwall.x;
  if(bullet2RightEdge>=wall4LeftEdge){
  return true;
  }
  
  return false;
  }
  

  function hascollided3(lbullet,lwall){
    bullet3RightEdge=lbullet.x+lbullet.width;
    wall4LeftEdge =lwall.x;
    if(bullet3RightEdge>=wall4LeftEdge){
    return true;
    }
    
    return false;
    }


    function hascollided4(lbullet,lwall){
      bullet4RightEdge=lbullet.x+lbullet.width;
      wall4LeftEdge =lwall.x;
      if(bullet4RightEdge>=wall4LeftEdge){
      return true;
      }
      
      return false;
      }



