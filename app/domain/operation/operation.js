'use strict'

const Deposit = "deposit";

class Operation {
    constructor(typeOperation, amount, account){
        this.typeOperation = typeOperation;
        this.amount = amount;
        this.balance = 0;
        this.account = account;

    }

    getTypeOperation(){
        return this.typeOperation;
    }

    getAmount(){
        return this.amount;
    }

    setBalance(){
        if(this.typeOperation == Deposit){
            this.account.setAmount(this.account.getAmount() + this.amount);
        }
        else {
            this.account.setAmount(this.account.getAmount() - this.amount);
        }
        return this.account.getAmount();

    }


}

module.exports = Operation;