//key of: type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";

type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "ship";


type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}

const user: User = {
    id: 222,
    name: 'shantunu',
    address: {
        city: 'ctg'
    }
};

// const myName = user.name
// const myId = user['id'];
// const address = user['address'];

// console.log(myId, address);


const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key]
};

const result1 = getPropertyFromObj(user, 'address');

console.log(result1);

const product = {
    brand: 'hp'
};

const result2 = getPropertyFromObj(product, 'brand');
console.log(result2);

const student = {
    id: 12,
    class: 'four'
};

const result3 = getPropertyFromObj(student, 'class');
console.log(result3);