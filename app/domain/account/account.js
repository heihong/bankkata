'use strict';

class Account{

    constructor(nameClient, amount) {
        this.nameClient = nameClient || "";
        this.amount  = amount || 0;
        this.transactions = [];
        this.amountTransaction = [];
    }

    getNameClient() {
        return this.nameClient;
    }

    getAmount(){
        if(this.getAmountTransaction().length > 0){
            this.amount = this.getAmountTransaction()[this.getAmountTransaction().length-1];
        }
        return  this.amount;

    }

    setTransactions(transaction){
        this.transactions.push(transaction)
    }

    getTransactions(){
        return this.transactions;
    }

    getAmountTransaction(){
        let result = this.amount;
        for(let i = 0; i< this.transactions.length; i++){
            result +=this.transactions[i].getTransaction().getAction();
            this.amountTransaction.push(result);
        }

        return this.amountTransaction;
    }


}

module.exports = Account;