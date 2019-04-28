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
        this.drawGradient()

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

    drawGradient() {
        const color = this.color;
        console.log(color);
        for (let gradRad = this.radius; gradRad >= 0; gradRad -= 1) {
            const coef = 1.5 - gradRad/ this.radius;
            fill(color.levels[0]*coef, color.levels[1]*coef, color.levels[2]*coef);
            ellipse(this.x , this.y, gradRad*2, gradRad*2);
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