// instance of type gurar or type narrowing

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} sleeps ${numOfHours}`);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }

    doStudy(numOfHours: number) {
        console.log(`${this.name} daily reads ${numOfHours}`);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }

    takeClass(numOfHours: number) {
        console.log(`${this.name} takes ${numOfHours} classes`);
    }
}


//function guard

const isStudent = (user: Person) => {
    return user instanceof Student;
};

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}


const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10);
    } else if(isTeacher(user)) {
        user.takeClass(4);
    } else {
        user.getSleep(8);
    }
}

const student1 = new Student('Shantunu');
const teacher1 = new Teacher('Supta');
const person1 = new Person('Bulbul');

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);