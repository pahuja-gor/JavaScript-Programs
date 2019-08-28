var spot = {
    x: 100,
    y: 50
};

var col = {
    r: 255,
    g: 0,
    b: 0
};

var alpha = a;

function setup() {
    createCanvas(1500, 730);
    background(0);
}

function draw() {
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
    spot.x = random(0, width);
    spot.y = random(0, height);
    a = random(0, 999);
    // noStroke();
    fill(col.r, col.g, col.b, a);

    ellipse(spot.x, spot.y, 25, 25);
    // line(spot.x, spot.y, 25, 25);
    // rect(spot.y, spot.x, 25, 25);    
}