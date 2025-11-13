

class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name
        this.age = age
        this.address = address
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} ${numOfHours} ghonta ghumai`);
    }
}

class Student extends Person {}

const student1 = new Student('Shantunu', 12, 'college gate');
student1.getSleep(15);

class Teacher extends Person {
    
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }


    takeClass(numOfHours: number) {
        console.log(`${this.name} ${numOfHours} ghonta class nei`);
    }
}

const teacher1 = new Teacher('Supta', 32, 'college gate', 'Senior Teacher');
teacher1.takeClass(4);