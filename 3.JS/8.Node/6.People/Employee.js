import Person from './Person.js';

export default class Employee extends Person {
    constructor(name, jobTitle) {
        super(name);
        this.jobTitle = jobTitle;
    }

    sayHello() {
        console.log(`안녕하세요, 제 이름은 ${this.name}이고 직급은 ${this.jobTitle}입니다.`);
    }
}
