var red = r;
var green = g;
var blue = b;
var xPos = x;
var yPos = y;
var size = s;

function setup() {
    createCanvas(1500, 730);
    background(0);
}

function colorSplitter() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    s = 30;
    /*random(10, 25);*/

    if (r > g && r > b) {
        x = random(0, 499);
        y = random(0, 730);
        fill(r, g, b);
        ellipse(x, y, s, s);
    }

    if (g > r && g > b) {
        x = random(500, 999);
        y = random(0, 730);
        fill(r, g, b);
        ellipse(x, y, s, s);
    }

    if (b > g && b > r) {
        x = random(1000, 1500);
        y = random(0, 730);
        fill(r, g, b);
        ellipse(x, y, s, s);
    }
}

function draw() {
    colorSplitter();
}
// function mouseMoved() {
//     noStroke();
//     fill('white');
//     ellipse(mouseX, mouseY, s, s);
// }