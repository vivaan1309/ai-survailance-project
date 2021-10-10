status="";

function setup(){}
 canvas=createCanvas(480,380)
 canvas.center();
 canvas.hide();

function start(){
 objectDetector=ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("status").innerHTML="STATUS:DETECTING OBJECTS";
}

function modelLoaded(){
 console.log("modelLoaded");
 status=true;
}

function draw()
{
image(video,0,0,480,380);
}