
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Deposit = require('../app/domain/deposit/deposit');
const Transaction = require('../app/domain/transaction/transaction');


describe('Test class Transaction', function () {

    let account, client, deposit, deposit1, transaction, transaction1;

    beforeEach(()=> {
        account = new Account("heihong");
        client = new Client("heihong", account);
        deposit = new Deposit(200, "14/09/2019");
        transaction  = new Transaction(deposit, account);


    });

    it('should test getTransaction and return deposit', function () {
        assert.equal(deposit, transaction.getTransaction());
    });

    it('should test getAccount and return account', function () {
        assert.equal(account, transaction.getAccount());
    });






});