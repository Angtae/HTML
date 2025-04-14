export default class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
    }
}
