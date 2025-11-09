//object destructuring
//array destructuring

const user = {
    userId: 123,
    name: {
        firstName: "Shantunu",
        middleName: "Nei",
        lastName: "Chakma"
    },
    gender: 'Male',
    favouriteHobby: "Music",
    favouriteColor: "white",

};

// const myFavouriteColor = user.favouriteColor
// const myMiddleName = user.name.middleName

const { favouriteColor, name: { middleName } } = user; //Name alias
console.log(middleName, favouriteColor);

const friends = ["Vivian", "Supen", "Sutangshu"];


const [, , c] = friends;

console.log(c);
