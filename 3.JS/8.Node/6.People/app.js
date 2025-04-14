class Person {
    // name = '';

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`안녕하세요. 저는 ${this.name} 입니다`);
    }
}

const john = new Person('John'));
john.name = 'John';
john.greet();

const smith = new Person('Smith');
smith.name='Smith';
smith.greet();

// import Person from './Person.js';
// import Student from './Student.js';
// import Employee from './Employee.js';

// const person = new Person('안태현');
// const student = new Student('홍길동', '컴퓨터공학');
// const employee = new Employee('안직원', '사원원');

// person.sayHello();    // 안녕하세요, 제 이름은 홍길동입니다.
// student.sayHello();   // 안녕하세요, 제 이름은 김학생이고 전공은 컴퓨터공학입니다.
// employee.sayHello();  // 안녕하세요, 제 이름은 이직원이고 직급은 대리입니다.
