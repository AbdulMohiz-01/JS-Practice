class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Teacher extends Human{
    constructor(name, age, job){
        super(name, age);
        this.job = job;
    }
    sayHello(){
        super.sayHello();
        console.log(`I am a ${this.job}`);
    }
}

class Student extends Human{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    sayHello(){
        super.sayHello();
        console.log(`I am a ${this.grade}`);
    }
}

let t1 = new Teacher("John", 30, "teacher");
let s1 = new Student("Jane", 20, "A");
t1.sayHello();
s1.sayHello();



