function Point(pX, pY) {
    this.x = pX;
    this.y = pY;
    this.getDistance = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

function Line(pointA, pointB) {
    this.pointA = pointA;
    this.pointB = pointB;

    this.getLength = function() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const diemA = new Point(0, 1);
const diemB = new Point(1, 0);

const doanAB = new Line(diemA, diemB);
console.log(doanAB.getLength());
