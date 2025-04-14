import Person from './Person.js';

export default class Student extends Person {
    constructor(name, major) {
        super(name);
        this.major = major;
    }

    sayHello() {
        console.log(`안녕하세요, 제 이름은 ${this.name}이고 전공은 ${this.major}입니다.`);
    }
}
