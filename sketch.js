var img;
var img2

function preload() {
  img = loadImage('img/download.jpg');
}

function setup() {
  createCanvas(800,800);
  background(200);
  img.loadPixels();
  for(var i=0; i<img.pixels.length; i+=4) {
    console.log(img.pixels[i]);
    //img.pixels[i] = img.pixels[i] / 2;
    
    img.pixels[i+1] = 0;
    img.pixels[i+2] = 0;
    
    /*if(i%4 == 0) {
      //keep it
    } else {
      img.pixels[i] = 255;
    }*/
  }
  img.updatePixels();
  
  
  
  
  image(img,0,0,100,100);
}

function draw() {
  
}