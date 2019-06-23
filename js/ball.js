/* jshint esversion:6 */
class Ball {
    constructor(x, y, radius, color, url, name) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.url = url;
        this.name = name;
        this.color = color;
        this.speedx = 1.2;
        this.speedy = 1.2;
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

        //shadow of circle
        fill(0, 50);
        ellipse(this.x + 4, this.y + 4, this.radius * 2);
        //circle
        fill(ballColor);
        ellipse(this.x, this.y, this.radius * 2);

        // write name of app
        
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        // shadow of text
        // fill(0, 80);
        // for(let i=0;i<6;i++){
        //     text(this.name, this.x + i, this.y + this.radius / 6 + i, this.radius, this.radius);
        // }
        // text
        textFont('Hind Madurai');
        fill("#f5f5f5");
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