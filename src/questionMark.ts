// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null or undefined
// ?. optional chaining

// const userAge = 21;

const biyerJonnoEligible = (age: number) => {
    // if (age >= 21) {
    //     console.log('biyer jonno ready')
    // } else {
    //     console.log("tumi biyer jonno ready na");
    // }

    const result = age >= 21 ? 'biyer jonno ready' : 'tumi biyer jonno ready na';
    console.log(result);
};

biyerJonnoEligible(21);

const userTheme = "Green theme";
const selectedTheme = userTheme ?? 'Light theme'
console.log(selectedTheme);

const isAuthenticated = "";

const resultwithTernary = isAuthenticated ? isAuthenticated : 'you are gurest';

const resultWithNulish = isAuthenticated ?? 'You are guest';

console.log({ resultwithTernary }, { resultWithNulish });

//optional chaining

const user: {
    address: {
        city: string;
        town: string;
        postalCode?: string;
    }
} = {
    address: {
        city: "Dhaka",
        town: "Banani",
    }
};

const postalCode = user?.address?.postalCode
console.log(postalCode);




