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

// export default class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHello() {
//         console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
//     }
// }
