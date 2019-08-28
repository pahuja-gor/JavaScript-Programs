//create a global variable
var capture;

//Get a stream of video from the user and store attach it to capture
function setup() {
  createCanvas(1400,680);
  capture = createCapture(VIDEO)
  capture.size(1400,680)
}

//Continously draw the pixels on th canvas using the data stored in capture
function draw() {
  //Original video slides horizontally
  capture.position(mouseX,0);

  //pixels drawn on canvas using image function remains static and inverted(filter);
  // image(capture,0,0,200,200);
  // filter(INVERT);
}