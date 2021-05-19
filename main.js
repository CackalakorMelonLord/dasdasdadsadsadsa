canvas = document.getElementById("canvas1");

ctx = canvas.getContext("2d");

roverwidth = 100;

roverheight = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

roverx = 10;

rovery = 10;

function add() {
    background_imagenew = new Image();

    background_imagenew.onload = uploadbackground;

    background_imagenew.src = background_image;

    rover_imagenew = new Image();

    rover_imagenew.onload = uploadrover;

    rover_imagenew.src = rover_image;
}

function uploadbackground() {
    ctx.drawImage(background_imagenew, 0, 0, canvas.width, canvas.height)
}

function uploadrover() {
    ctx.drawImage(rover_imagenew, roverx, rovery, roverwidth, roverheight)
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
        console.log("up");
    }
    if(keyPressed == '40') {
        down();
        console.log("down");
    }
    if(keyPressed == '37') {
        left();
        console.log("left");
    }
    if(keyPressed == '39') {
        right();
        console.log("right");
    }
}