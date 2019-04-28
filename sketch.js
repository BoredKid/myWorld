/* jshint esversion:6 */
let balls;

function setup() {
    // put setup code here
    const canvas = createCanvas(window.innerWidth, window.innerHeight);
    background('white');
    canvas.parent('sketch-holder');
    balls = new Balls();

    balls.tab.push(new Ball(width / 2, height / 2, 40, "purple", "http://drawingbot.boredkid.io", "DrawingBot"));
    balls.tab.push(new Ball(width, height, 40, "blue", "https://www.linkedin.com/in/cisskane/", "LinkedIn"));
}

function draw() {
    // put drawing code here
    document.getElementsByTagName("body")[0].style.cursor = "auto";
    background('#D75F09');
    balls.act();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
    background('#D75F09');
}

function mousePressed() {
    for (const ball of balls.tab) {
        if (ball.isUnderMouse()) {
            ball.goToUrl();
        }
    }
}