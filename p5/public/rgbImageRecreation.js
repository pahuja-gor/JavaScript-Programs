let image;
let height;
let width;

function preload() {
    image = loadImage('images/single_flower.jpg');
}

function setup() {
    createCanvas(1000, 1000);
    background(0);
}

function colorInPicture() {
    image.loadPixels();

    height = image.height;
    width = image.width;

    let numPixels = 4 * width * height;
    let x = 0;
    let y = 0;
    for (let i = 0; i < numPixels; i += 4) {
        let r = image.pixels[i];
        let g = image.pixels[i + 1];
        let b = image.pixels[i + 2];
        let a = image.pixels[i + 3];

        if (x % width == 0) {
            x = 0;
            y ++;
        }

        fill(r, g, b, a);
        ellipse(x, y, 10, 10);

        x ++;
    }
}

function draw() {
    colorInPicture();
    noLoop();
}