'use strict';

class Withdrawal{

    constructor(amount, date) {
        this.amount = amount || 0;
        this.date = date || new Date();
    }

    getAmount(){
        return this.amount;
    }

    getDateOperation() {
        if(!(this.date instanceof Date)){
            let [day, month, year] = this.date.split("/");
            return new Date(year, month, day);
        }
        return this.date;
    }

    getAction(){
        return -this.amount;
    }
}

module.exports = Withdrawal;