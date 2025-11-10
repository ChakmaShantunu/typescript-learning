//Spread operator

const friends = ["Vivian", "Supen", "Sutangshu"];

const arsesFriends = ["Ishon", "Munu", "Swrup"];

friends.push(...arsesFriends);
console.log(friends);

const user = {
    name: "Shantunu",
    phoneNo: "01518313916"
};

const otherInfo = {
    hobby: "Music",
    status: "Unemployed",
};

const userInfo = { ...user, ...otherInfo };
console.log(userInfo);

//Rest Operator

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Sent Invitation to ${friend}`));

}

sendInvite("Pintu", "Mintu", "Chintu", "Chulbul");

//Spread with immutable update

const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];
console.log(newNumbers);

//Spread in function arguments

const sum = (a: number, b: number, c: number): number => a + b + c;
const num: [number, number, number] = [2, 4, 6];
const result = sum(...num);
console.log(result);
