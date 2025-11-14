// getter and setter



class BankAccount {
    public readonly userId: number;
    public userName: string;
    private userBalance: number;


    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // addBalance(balance: number) {
    //     this.userBalance = this.userBalance + balance
    // }

    // using setter

    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    }

    // get balance

    // getBalance() {
    //     return this.userBalance;
    // }

    // using getter

    get getBalance() {
        return this.userBalance
    }
}


const shantunuAccount = new BankAccount(111, 'Shantunu', 20);

// shantunuAccount.addBalance(100);
// shantunuAccount.addBalance(100);
// console.log(shantunuAccount);
// console.log(shantunuAccount.getBalance());

shantunuAccount.addBalance = 100;
shantunuAccount.addBalance = 100;
console.log(shantunuAccount.getBalance);