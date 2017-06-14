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



function Trianle (pointA, pointB, pointC) {
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;

    this.getPerimeter = function() {
        const doanAB = new Line(this.pointA, this.pointB);
        const doanAC = new Line(this.pointA, this.pointC);
        const doanBC = new Line(this.pointB, this.pointC);
        return doanAB.getLength() + doanAC.getLength() + doanBC.getLength();
    }
}

const diemA = new Point(0, 1);
const diemB = new Point(1, 0);
const diemC = new Point(0, 0);

// const doanAB = new Line(diemA, diemB);
const tamgiacABC = new Trianle(diemA, diemB, diemC);
console.log(tamgiacABC.getPerimeter());
