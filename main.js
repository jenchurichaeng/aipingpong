function preload(){

}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    camera=createCapture(VIDEO);
    camera.hide();
    poseNet=ml5.poseNet
}

function draw(){
image(camera,0,0,500,500);
}

function takesnapshot(){
    save("filterpic.png")
}