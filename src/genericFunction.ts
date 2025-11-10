// generic function


// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number, name: string }) => {
//     return [value];
// };

const createArrayWithGeneric = <T>(value: T) => [value]

const arrString = createArrayWithGeneric('apple');
const arrNumber = createArrayWithGeneric(23);
const arrObj = createArrayWithGeneric({
    id: 123,
    name: 'shantunu',
});

// tuple

const createArrayWithTuple = (param1: string, param2: number) => [param1, param2];

const createArryTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2];

const res1 = createArryTupleWithGeneric('shantunu', false);

const res2 = createArryTupleWithGeneric(23, { name: 'shantunu' });


// 

const addStudentToCourse = <T>(studentInfo: T) => {
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

const result = addStudentToCourse(student2);

console.log(result);