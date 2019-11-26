var px = 740;
var py = 80;
var pdiameter = 100;
var o1x = 600;
var o1y = 100;
var o1d = 200;
var o2x = 500;
var o2y = 200;
var o2d = 300;
var o3x = 200;
var o3y = 300;
var o3d = 150;
var o4x = 340;
var o4y = 300;
var o4d = 70;
var o5x = 170;
var o5y = 50;
var o5d = 70;
var mousex = 0;
var mousey = 0;
  
  function setup()
  {
    createCanvas(800,600);
  }

  function draw()
  {
    background(30,30,40);
    fill(100,0,0)
    circle(o1x,o1y,o1d);
    fill(120,50,40)
    circle(o2x,o2y,o2d);
    fill(120,120,40)
    circle(o3x,o3y,o3d);
    fill(120,120,120)
    circle(o4x,o4y,o4d);
    fill(120,120,120)
    circle(o5x,o5y,o5d);
    fill(30,400,300);
    rect(20,470,100,100);
    fill(0)
    textSize(16)
    text('Dantes Peak',25,515)
    textSize(16)
    text('Harry Dalton',700,20)
    fill(200,300,400)
    circle(px,py,pdiameter);
    
    if(keyIsDown(68))
    {
      px+=5;
    }
    else if(keyIsDown(65))
    {
      px-=5;
    }
    else if(keyIsDown(83))
    {
      py+=5;
    }
    else if(keyIsDown(87))
    {
      py-=5;
    }
    
    if(px >= 30 && py >= 400)
    {
      textSize(40);
      fill(255,255,255);
      text('Congratulations, YOU Escaped!',27,300);
    }
    
    if(o1x <= 800)
    {
      o1x+=5;
    } 
    else
    {
      o1x=10;
    }
    
    if(o2y <= 600)
    {
      o2y+=5;
    }
    else
    {
      o2y=10;
    }     
     if(o3y <= 600)
    {
      o3y+=10;
    }
    else
    {
      o3y=10;
    }   
    if(o4y <= 400)
    {
      o4y+=3;
    }
    else
    {
      o4y=10;
    }  
    
    fill(100,400,500);
    ellipse(mousex,mousey,70,70);
  }
    function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    }