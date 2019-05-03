/* jshint esversion:6 */
let balls;

function setup() {
    // put setup code here
    const canvas = createCanvas(window.innerWidth, window.innerHeight);
    background('white');
    canvas.parent('sketch-holder');
    balls = new Balls();

    balls.tab.push(new Ball(width / 2, height / 2, 40, color("purple"), "http://drawingbot.boredkid.io", "DrawingBot"));
    balls.tab.push(new Ball(width, height, 40, color("blue"), "https://www.linkedin.com/in/cisskane/", "LinkedIn"));
    balls.tab.push(new Ball(width / 5, height, 40, color("#333"), "https://github.com/BoredKid", "Github "));
    balls.tab.push(new Ball( 4 * width / 5, 4 * height / 7, 40, color("#5C4236"), "https://asgal.fandom.com/fr/wiki/Asgal", "  Asgal  "));
}

function draw() {
    // put drawing code here
    document.getElementsByTagName("body")[0].style.cursor = "auto";
    background('#7D3705');
    balls.act();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
    background('#7D3705');
}

function mousePressed() {
    for (const ball of balls.tab) {
        if (ball.isUnderMouse()) {
            ball.goToUrl();
        }
    }
}