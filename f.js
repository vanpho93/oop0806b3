function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log('Xin chao, toi la ' + this.name);
}

const pho = new Person('Pho', 18);

pho.sayHello();
pho.age = pho.age + 1;

pho.mail = 'vanpho01@gmail.com';

const khoa = new Person('Khoa', 30);
// console.log(khoa.sayHello);
khoa.sayHello();

// console.log(pho.height());
