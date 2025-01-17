noseX=0
noseY=0
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
canvas = createCanvas(550, 550);
canvas.position(560,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    background('#960A98');
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY, difference);
    document.getElementById("square_side").innerHTML = "Width And Height of a Square = " +difference+"px"
}
function modelLoaded(){
    console.log('Posenet Is Initialised✅')
}
function gotPoses(results){
    if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            
            leftWristX = results[0].pose.leftWrist.x
            rightWristX = results[0].pose.rightWrist.x
            difference = floor(leftWristX - rightWristX)
        }
}