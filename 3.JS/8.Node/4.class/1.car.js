class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        return `${this.make} ${this.model} is Driving...`;
    }

    doorOpen() {
        return `${this.make} ${this.model} 의 문이 열립니다.`;
    }

    doorClose() {
        return `${this.make} ${this.model} 의 문이 닫힙니다.`;
    }
}

// 객체 생성
const myCar = new Car('현대', 'K3');
const myNewCar = new Car('BMW', 'M2');

// 메서드 출력
console.log(myCar.drive());
console.log(myCar.doorOpen());
console.log(myCar.doorClose());

console.log(myNewCar.drive());
console.log(myNewCar.doorOpen());
console.log(myNewCar.doorClose());
