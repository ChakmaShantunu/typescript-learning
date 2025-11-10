//constrain : strict rules deya

type Student = { id: number, name: string, dateOfBirth: string, class: string }

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
    return {
        course: 'Next Level',
        ...studentInfo,
    }
};


const student1 = {
    id: 123,
    name: 'shantunu',
    haspen: true,
};

const student2 = {
    id: 123,
    name: 'supta',
    haspen: false,
    hasCar: true,
    isMarried: true,
};

const student3 = {
    id: 244,
    name: 'ziniya',
    hasWatch: true,
    dateOfBirth: '12-12-12',
    class: '1'
}

const result = addStudentToCourse(student3);

console.log(result);