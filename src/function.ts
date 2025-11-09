function add(a: number, b: number): number {
    return a + b
};

const sum = (a: number, b: number): number => a + b
add(2, 2);

//object => function => method

const poorUser = {
    name: "Shantunu",
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value
        return totalBalance;
    }

}

poorUser.addBalance(100000);

const arr: number[] = [1, 4, 6];

const sqrArr = arr.map((item: number): number => {
    return item * item
});
console.log(sqrArr);