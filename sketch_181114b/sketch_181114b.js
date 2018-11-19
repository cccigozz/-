PImage img1;
PImage img2;
PImage img3;
float x=0;
float ax;
float bx; 
float i=0;
float by=50;
float easing=0.01;
float speed=4;
PFont font;
float a;
function setup() {
  createCanvas((745, 950);
  img1=loadImage("2.jpg");
  img2=loadImage("3.png");
  fill(0, 200);
  font=createFont("隶书", 30);
}

function draw() {
  background(0);
  image(img1, 0, 0);
  //word
  textFont(font);
  textAlign(CENTER);
  text("春日嬉戏图", ax, 100);
  ax=ax+2;

  if (a==1) {
    //image1 change bright
    loadPixels();
    img1.loadPixels();
    for (var px=0; px<img1.width; px++) {
      for (var py=0; py<img1.height; py++) {
        var loc=px+py*img1.width;
        float r=red(img1.pixels[loc]);
        float g=green(img1.pixels[loc]);
        float b=blue(img1.pixels[loc]);
        float di=constrain(200-i, 50, 150);
        float adjustBright =map(di, 0, width, 0, 8);
        r*=adjustBright;
        g*=adjustBright;
        b*=adjustBright;
        r=constrain(r, 0, 255);
        g=constrain(g, 0, 255);
        b=constrain(b, 0, 255);
        color c=color(r, g, b);
        pixels[loc]=c;
      }
    }
    updatePixels();

    //sun move
    img3=loadImage("sun.png");
    image(img3, i, i+100);
    i=i+1.5;
    if (i>220) {
      i=0;
    }
  }

  if (ax>width) {
    ax=0;
  }

  //boat move
  if (mouseY>500) {
    float dx= img2.width*1.8*mouseY/height;
    float dy= img2.height*1.8*mouseY/height;
    image(img2, mouseX, mouseY, dx, dy);
  }



  //bird move
  if (mouseY<=500) {
    image(img2, mouseX, 500, img2.width*900/height, img2.height*900/height);
    img3=loadImage("bird.png");
    float targetX=mouseX;
    float targetY=mouseY;
    bx+=(targetX-bx)*easing;
    by+=(targetY-by)*easing;
    image(img3, bx, by);
    image(img3, bx+30, by+30, 40, 23);
    image(img3, bx-30, by+30, 40, 23);
  }
}

function keyPressed() {
    if (keyCode == 32) {
    a= 1;
  }
  else {
    a=0;
  }
}
