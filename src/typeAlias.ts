//

type User = {
    id: number,
    name: {
        firstName: string;
        lastName: string;
    },
    gender: 'male' | 'female',
    contactNo: string,
    address: {
        division: string,
        city: string
    }
}


const user1: User = {
    id: 10,
    name: {
        firstName: "Shantunu",
        lastName: "Chakma"
    },
    gender: "male",
    contactNo: '01518313916',
    address: {
        division: "Chittagong",
        city: "Rangamati"
    }
};

const user2: User = {
    id: 11,
    name: {
        firstName: "Supta",
        lastName: "Chakma"
    },
    gender: "female",
    contactNo: '01518313916',
    address: {
        division: "Chittagong",
        city: "Khagrachari"
    }
};

type IsAdmin = true
const isAdmin: IsAdmin = true;

type Name = string

const myName: Name = "Shantunu";

//In function type alias

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => {
    return num1 + num2
}