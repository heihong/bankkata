'use strict';

const Deposit = require('../deposit/deposit');


class Statement{
    constructor(client){
        this.client = client;
    }

    makeHeader() {
        return `Transaction for ${this.client.getName()}\n`;
    }

    printDate(transaction){
        return `${transaction.getDate()}/${transaction.getMonth()}/${transaction.getFullYear()}`;
    }

    statementDeposit(transaction, index) {
        return `Deposit ${transaction.getTransaction().getAmount()} the ${this.printDate(transaction.getTransaction().getDateOperation())} and the balance is ${this.client.getAccount().getAmountTransaction()[index]}\n`;
    }

    statementWithdrawal(transaction, index) {
        return `Withdrawal ${transaction.getTransaction().getAmount()} the ${this.printDate(transaction.getTransaction().getDateOperation())} and the balance is ${this.client.getAccount().getAmountTransaction()[index]}\n`;
    }

    makeContainer() {
        let result = "";
        for (let i =0; i< this.client.getAccount().getTransactions().length ;i++) {
            if(this.client.getAccount().getTransactions()[i].getTransaction() instanceof Deposit){
                result += this.statementDeposit(this.client.getAccount().getTransactions()[i], i);
            }
            else {
                result += this.statementWithdrawal(this.client.getAccount().getTransactions()[i], i);
            }

        }
        return result;
    }

    makeStatement(){
        return this.makeHeader() + this.makeContainer();
    }
}

module.exports = Statement;