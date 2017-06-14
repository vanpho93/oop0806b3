function Empolyee (ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function() {
        console.log('Hello, I am ' + this.name);
    }
    this.getBornYear = function() {
        return new Date().getFullYear() - this.age;
    }
}

const pho = new Empolyee('Pho', 18);
const khoa = new Empolyee('Khoa', 30);
// console.log(pho.name);
// console.log(khoa);
pho.sayHello();
khoa.sayHello();
console.log(pho.getBornYear());
console.log(khoa.getBornYear());

// console.log(new Date().getFullYear());
