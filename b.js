function Empolyee (ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function() {
        console.log('Hello');
    }
}

const pho = new Empolyee('Pho', 18);
const khoa = new Empolyee('Khoa', 30);
// console.log(pho.name);
// console.log(khoa);
pho.sayHello();
