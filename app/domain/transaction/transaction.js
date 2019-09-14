'use strict';

class Transaction{
    constructor(transaction, account){
        this.transaction = transaction,
        this.account = account;
    }

    getTransaction(){
        return this.transaction;
    }

    getAccount() {
        return this.account;
    }





}

module.exports = Transaction;