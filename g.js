class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Xin chao, toi la ' + this.name);
    }
}

class Child extends Person {

    static getAllChild() {
        return 10;    
    };

    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }

    sayHello() {
        super.sayHello();
        console.log('Nam nay ' + this.age + ' tuoi.');
    }
}

const pho = new Person('Pho', 18);
// pho.sayHello(); LOI

const teo = new Child('Teo', 5, 'Plane');
console.log(teo);
teo.sayHello();

console.log(Child.getAllChild());

// Person.prototype.sayHello = function() {
//     console.log('Xin chao, toi la ' + this.name);
// }

// const pho = new Person('Pho Nguyen', 18);
// // console.log(pho);
// pho.sayHello();
