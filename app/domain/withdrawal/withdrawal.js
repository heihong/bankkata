'use strict';

class Withdrawal{

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
        return -this.amount;
    }
}

module.exports = Withdrawal;