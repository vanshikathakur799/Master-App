var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  home = new Home();
  home.mousePress();
}

function draw() {
 background('#1F2833');  

  drawSprites();
  fill("#66fcf1");
textSize(70);
text('Master App',width / 2 - 180 ,height - 560)
}



 