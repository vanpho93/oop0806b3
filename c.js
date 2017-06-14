//Point { x: 0, y: 0 }
function Point(pX, pY) {
    this.x = pX;
    this.y = pY;
    this.getDistance = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

const p1 = new Point(1, 1);
console.log(p1.getDistance());

// const aPerson = {
//     name: 'Teo',
//     age: 5
// };

// const pet = {
//     name: 'Rex',
//     age: 2,
//     owner: aPerson
// };

// console.log(pet.owner.name);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Pet(name, age, owner) {
    this.name = name;
    this.age = age;
    this.owner = owner;
}

const teo = new Person('Teo Nguyen', 5);
const rex = new Pet('Rex', 2, teo);

console.log(rex.owner.name);
