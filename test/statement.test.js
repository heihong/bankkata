
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Deposit = require('../app/domain/operation/operation');
const Withdrawal = require('../app/domain/operation/operation');
const Operation = require('../app/domain/operation/operation');
const Statement = require('../app/domain/statement/statement');


describe('Test class Statement', function () {

    let account, client , deposit, withdrawal, statement, deposit1;

    beforeEach(()=> {
        account = new Account("heihong");
        client = new Client("heihong", account);
        deposit = new Operation("deposit", 100, account);
        withdrawal = new Operation("Withdrawal", 50, account);
        deposit1 = new Operation("deposit", 200, account);
        statement = new Statement();
        statement.setStatements(deposit, deposit.setBalance());
        statement.setStatements(withdrawal, withdrawal.setBalance());
        statement.setStatements(deposit1, deposit1.setBalance());
    });

    it('should test getOperations and return 2', function () {
        let result = `Deposit 100 the ${new Date()} and the balance is 100 \n`+
            `Withdrawal 50 the ${new Date()} and the balance is 50 \n`+
            `Deposit 200 the ${new Date()} and the balance is 250 \n`;
        assert.equal(result, statement.getStatements());
    });


});