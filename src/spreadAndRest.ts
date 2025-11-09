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