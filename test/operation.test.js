
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Operation = require('../app/domain/operation/operation');
const Statement = require('../app/domain/statement/statement');


const Deposit = "deposit";
const Withdrawal = "withdrawal";

describe('Test class Operation', function () {

    let account, client, deposit, withdrawal, statement;

    beforeEach(()=> {
        account = new Account("heihong");
        client = new Client("heihong", account);
        deposit = new Operation(Deposit, 100, account);
        withdrawal = new Operation(Withdrawal, 50, account)
        statement = new Statement();
        statement.setStatements(deposit, deposit.setBalance());
    });

    it('should test getTypeOperation and return Deposit', function () {
        assert.equal(Deposit, deposit.getTypeOperation());
    });

    it('should test getTypeOperation and return Withdrawal', function () {
        assert.equal(Withdrawal, withdrawal.getTypeOperation());
    });

    it('should test getAmount and return 100', function () {
        assert.equal(100, deposit.getAmount());
    });

    it('should test getAmount and return 100', function () {
        assert.equal(100, deposit.getAmount());
    });






});