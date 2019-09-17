'use strict';

class Account{

    constructor(nameClient) {
        this.nameClient = nameClient || "";
        this.amount = 0;
    }

    getNameClient() {
        return this.nameClient;
    }

    getAmount(){
        return this.amount;
    }

    setAmount(amount){
        this.amount = amount;
    }

}

module.exports = Account;