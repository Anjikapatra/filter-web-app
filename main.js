function preload(){
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
}
function draw(){
}
function take_snapshot(){
    save("Thephoto.png")
}
Webcam. set({ width: 320, height: 240, image_format: 'jpeg', jpeg_quality: 90 });
 Webcam. attach( '#my_camera' );
