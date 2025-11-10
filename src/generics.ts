// dynamically generalze : Generic

type GenericArray<T> = Array<T>;

// const friends: string[] = ['a', 'b', 'c'];
const friends: GenericArray<string> = ['a', 'b', 'c'];

// const rollNumber: number[] = [4, 2, 1, 11];
const rollNumber: GenericArray<number> = [4, 2, 1, 11];

// const isEligibleList: boolean[] = [true, false, true]; 
const isEligibleList: GenericArray<boolean> = [true, false, true];


type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ['20', '30'];

type User = { name: string, age: number }

const userList: GenericArray<User> = [
    {
        name: 'shantunu',
        age: 30
    },
    {
        name: 'supta',
        age: 23
    }
]
