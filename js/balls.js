/* jshint esversion:6 */
class Balls {
    constructor() {
        this.tab = [];
    }

    act() {
        for (const ball of this.tab) {
            ball.show();
            ball.move();
            ball.changePointer();
        }
    }
}