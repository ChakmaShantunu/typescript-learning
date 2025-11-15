// oop--- Encapsulation



class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected userBalance: number;


    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(balance: number) {
        this.userBalance = this.userBalance + balance
    }
}


// class StudentAccount extends BankAccount {
//     test() {
//         this.userBalance
//     }
// }

const shantunuAccount = new BankAccount(111, 'Shantunu', 20);

shantunuAccount.addBalance(100);
shantunuAccount.addBalance(100);
console.log(shantunuAccount);