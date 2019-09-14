'use strict';

class Deposit{

    constructor(amount, date) {
        this.amount = amount || "";
        this.date = date;
    }

    getAmount(){
        return this.amount;
    }

    getDateOperation() {
        let [day, month, year] = this.date.split("/");
        return new Date(year, month, day);
    }

    getAction(){
        return this.amount;
    }
}

module.exports = Deposit;