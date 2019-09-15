
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Deposit = require('../app/domain/deposit/deposit');
const Withdrawal = require('../app/domain/withdrawal/withdrawal');
const Transaction = require('../app/domain/transaction/transaction');


describe('Test class Account', function () {

    let account, account1, client, deposit, deposit1, transaction, transaction1, transaction2, withdrawal;

    beforeEach(()=> {
        account = new Account("heihong",100);
        client = new Client("heihong", account);

        deposit = new Deposit(200, "14/09/2019");
        deposit1 =  new Deposit(200, "14/09/2019");
        withdrawal =  new Withdrawal(50, "14/09/2019");

        transaction  = new Transaction(deposit, account);
        transaction1  = new Transaction(deposit1, account);
        transaction2  = new Transaction(withdrawal, account);

        account.setTransactions(transaction);
        account.setTransactions(transaction1);
        account.setTransactions(transaction2);

        account1 = new Account();

    });

    // account

    it('should test getNameClient and return heihong', function () {
        assert.equal("heihong", account.getNameClient())
    });

    it('should test getAmount and return 450', function () {
        assert.equal(450, account.getAmount())
    });

    it('should test getTransactions and return 3', function () {
        assert.equal(3, account.getTransactions().length)
    });

    it('should test getTransactions()[0] and return transaction', function () {
        assert.equal(transaction, account.getTransactions()[0])
    });


    it('should test getAmountTransaction and return [ 300, 500 , 450]', function () {
        assert.equal(300, account.getAmountTransaction()[0]);
        assert.equal(500, account.getAmountTransaction()[1]);
        assert.equal(450, account.getAmountTransaction()[2]);
    });


    // acount1
    it('should test getAmount and return 0', function () {
        assert.equal(0, account1.getAmount())
    });

    it('should test getNameClient and return ', function () {
        assert.equal("", account1.getNameClient())
    });

    it('should test getAmount and return 350', function () {
        account1.setTransactions(transaction);
        account1.setTransactions(transaction1);
        account1.setTransactions(transaction2);
        assert.equal(350, account1.getAmount())
    });

    it('should test getAmountTransaction and return [ 200, 400 , 350]', function () {
        account1.setTransactions(transaction);
        account1.setTransactions(transaction1);
        account1.setTransactions(transaction2);
        assert.equal(200, account1.getAmountTransaction()[0]);
        assert.equal(400, account1.getAmountTransaction()[1]);
        assert.equal(350, account1.getAmountTransaction()[2]);
    });
});