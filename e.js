class Employee {
    constructor(ten, tuoi) {
        this.name = ten;
        this.age = tuoi;
    }

    sayHello() {
        console.log('Hello, I am ' + this.name);
    }

    getBornYear() {
        return new Date().getFullYear() - this.age;
    }
}

const pho = new Employee('Pho', 18);
console.log(pho.getBornYear());
pho.sayHello();
