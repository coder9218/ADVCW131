img ="";

function preload(){
    img= loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#GY7829");
    text("Dog, 45,75");
    nofill();
    stroke("FF3913");
    rect(30,60,450,350);
}







