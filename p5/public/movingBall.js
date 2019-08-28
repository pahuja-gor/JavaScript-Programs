function setup() {
    createCanvas(500, 500);
    background(64);
}

function draw() {
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    var a = random(0, 1000);
    fill(r, g, b), a;
    ellipse(mouseX, mouseY, 20, 20);
}