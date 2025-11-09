//array, object

//ts - tuple

// let bazarList: string[] = ["eggs", "beef", "rice"];
// bazarList.push("apple");

// let mixedArr: (string | number | boolean)[] = [12, true, "banana"];

// let coordinates: [number, number] = [10, 20];

// let couple: [string, string] = ["Husband", "Wife"];

// let nameAndRoll: [string, number] = ["Shantunu", 17];

// let destination: [string, string, number] = ["Dhaka", "Chittagong", 3];

//Refference type -- objec

// const user: {
//     organization: "Programming Hero"; //value => type: literal types
//     firstName: string;
//     middleName?: string;  //optional type define
//     lastName: string;
//     isMarried: boolean;
// } = {
//     organization: "Programming Hero",
//     firstName: "Shantunu",
//     middleName: "",
//     lastName: "Chakma",
//     isMarried: false,
// };
// user.organization = "Programming Hero";

const user: {
    readonly organization: string; //access modifier
    firstName: string;
    middleName?: string;  //optional type define
    lastName: string;
    isMarried: boolean;
} = {
    organization: "Programming Hero",
    firstName: "Shantunu",
    middleName: "",
    lastName: "Chakma",
    isMarried: false,
};
user.organization = "Programming Hero";

console.log(user.organization);