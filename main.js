function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
canvas = createCanvas(550, 550);
canvas.position(560,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    background('#960A98')
}
function modelLoaded(){
    console.log('Posenet Is Initialised✅')
}
function gotPoses(){
    if(results.length > 0)
        {
            console.log(results);
        }
}