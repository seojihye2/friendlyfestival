var num=0;
var size;
function setup() {
  createCanvas(500,498);
  size = 10;
}

function draw() {
  background(62,142,125);
  frameRate(5);
  drawing();
  
  if(num==1) {
   points();
   }
  
  drawCircle();
}

function keyTyped() {
  if(key === 'a') {
    if(num==0) num=1;
    else if(num==1) num=0;
  }
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
   
    size+=10;
  }
  if(keyCode === DOWN_ARROW) {
    
    size-=10;
  }
}

function points() {
  //point
  for(var i=0; i<200; i++) {
    stroke(0);
    strokeWeight(int(random(8)));
    point(random(0,500),random(0,498));
    stroke(175,91,76);
    strokeWeight(int(random(8)));
    point(random(0,500),random(0,498));
    stroke(80,95,188);
    strokeWeight(int(random(8)));
    point(random(0,500),random(0,498));
  }
  
  
}
function drawing() {
  //circle
  fill(198,189,114);
  strokeWeight(18);
  stroke(95,203,234);
  ellipse(128,118,180,180);
  noStroke();
  fill(193,181,84);
  ellipse(128,118,150,150);
  fill(188,176,85);
  ellipse(128,118,130,130);
  fill(175,165,88);
  ellipse(128,118,110,110);
  fill(165,156,87);
  ellipse(128,118,90,90);
  fill(142,134,83);
  ellipse(128,118,70,70);
  fill(131,125,81);
  ellipse(128,118,50,50);
  fill(121,116,79);
  ellipse(128,118,30,30);
  fill(108,104,74);
  ellipse(128,118,10,10);
  fill(93,90,68);
  ellipse(128,118,3,3);
  
  //rectangle
  for(var i=1; i<8; i++) {
    for(var j =1; j<9; j++) {
      fill(random(100,255),random(0,100),random(0,100));
      stroke(255);
      strokeWeight(1);
      rect(i*20+250,j*20+60,20,20);
    }
  }
  
  for(var i=0; i<6; i++) {
    fill(100,100,random(0,255));
    stroke(255);
    strokeWeight(1);
    rect(i*10+120,360,10,80);
  }
  
  for(var i=1; i<9; i++) {
    fill(128,random(0,200),128);
    stroke(255);
    strokeWeight(1);
    rect(80,i*8+250,60,8);
  }
  
  for(var i=0; i<6;i++) {
    fill(random(0,255),100,100);
    stroke(255);
    strokeWeight(1);
    rect(i*10+400,300,10,60);
  }  
  
  for(var i=0; i<6; i++) {
    for(var j=0; j<6; j++) {
      fill(random(150,255),128,200);
      stroke(255);
      strokeWeight(1);
      rect(i*10+250,j*10+280,10,10);
    }
  }
  
}

function drawCircle() {
  fill(169,219,104,180);
  noStroke();
  ellipse(random(500),random(498),size,size);
}