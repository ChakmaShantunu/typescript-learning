// polymorphism : bohurupi

class Person {
    getSleep() {
        console.log(`I sleep for 8hours`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`I am a student and I sleep for 10hours`);
    }
}

class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am a Next Level Developer and I sleep for 6hours`);
    }
}


const getSleepingHours = (param: Person) => {
    param.getSleep();
}

const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelDeveloper();

getSleepingHours(person3);

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {

    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {

    height: number
    width: number
    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }
    getArea(): number {
        return this.height * this.width
    }
}

const getArea = (param: Shape) => {
    console.log(param.getArea());
}

const shape1 = new Shape()
const shape2 = new Circle(10)
const shape3 = new Rectangle(10, 10);

getArea(shape2);
