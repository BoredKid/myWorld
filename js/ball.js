/* jshint esversion:6 */
class Ball {
    constructor(x, y, radius, color, url, name) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.url = url;
        this.name = name;
        this.color = color;
        this.speedx = 1.5;
        this.speedy = 1.5;
    }

    act() {
        this.show();
        this.move();
        this.changePointer();
    }

    show() {
        // draw the circle
        noStroke();
        let ballColor = color(this.color);
        //ballColor.setAlpha(80);
        fill(ballColor);
        ellipse(this.x, this.y, this.radius * 2);
        fill('rgba(0,0,0,0.1)');
        arc(this.x, this.y, this.radius * 2, this.radius*2, PI, 0)

        // write name of app
        fill("#fbefe6");
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        text(this.name, this.x, this.y + this.radius / 6, this.radius, this.radius);
        rectMode(CORNER);
    }

    move() {
        this.x += this.speedx;
        this.y += this.speedy;
        if (this.x < 0 || this.x > width) {
            this.speedx *= -1;
        }
        if (this.y < 0 || this.y > height) {
            this.speedy *= -1;
        }
    }

    changePointer() {
        if (this.isUnderMouse()) {
            document.getElementsByTagName("body")[0].style.cursor = "pointer";
        }
    }

    isUnderMouse() {
        return dist(mouseX, mouseY, this.x, this.y) < this.radius;
    }

    goToUrl() {
        window.location.href = this.url;
    }

}