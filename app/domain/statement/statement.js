'use strict';

const Deposit = "deposit";


class Statement{
    constructor(){
        this.statements = [];
    }

    setStatements(operation, balance){
        if(operation.getTypeOperation() == "deposit"){
            this.statements += `Deposit ${operation.getAmount()} the ${new Date()} and the balance is ${balance} \n`;
        }
        else{
            this.statements +=`Withdrawal ${operation.getAmount()} the ${new Date()} and the balance is ${balance} \n`;
        }

    }

    getStatements(){
        return this.statements;
    }
}

module.exports = Statement;