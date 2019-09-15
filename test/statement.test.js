
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Deposit = require('../app/domain/deposit/deposit');
const Withdrawal = require('../app/domain/withdrawal/withdrawal');
const Transaction = require('../app/domain/transaction/transaction');
const Statement = require('../app/domain/statement/statement');


describe('Test class Statement', function () {

    let account, client, deposit, deposit1, transaction, transaction1, transaction2, statement, withdrawal;

    beforeEach(()=> {
        account = new Account("heihong");
        client = new Client("heihong", account);
        deposit = new Deposit(200, "14/09/2019");
        deposit1 =  new Deposit(300, "14/11/2019");
        withdrawal =  new Withdrawal(50, "14/09/2019");
        transaction  = new Transaction(deposit, account);
        transaction1  = new Transaction(deposit1, account);
        transaction2  = new Transaction(withdrawal, account);
        account.setTransactions(transaction);
        account.setTransactions(transaction1);
        account.setTransactions(transaction2);
        statement = new Statement(client);
    });

    it('should test makeHeader return the result', function () {
        let result = "Transaction for heihong\n";
        assert.equal(result, statement.makeHeader());
    });

    it('should test printdate return 14/9/2019', function () {
        let result = '14/9/2019';
        assert.equal(result, statement.printDate(account.getTransactions()[0].getTransaction().getDateOperation()));
    });

    it('should test statementDeposit return result', function () {
        let result = 'Deposit 200 the 14/9/2019 and the balance is 200\n';
        assert.equal(result, statement.statementDeposit(transaction, 0));
    });

    it('should test statementWithdrawal return result', function () {
        let result = 'Withdrawal 50 the 14/9/2019 and the balance is 450\n';
        assert.equal(result, statement.statementWithdrawal(transaction2, 2));
    });


    it('should test makeContainer return result', function () {
        let result = 'Deposit 200 the 14/9/2019 and the balance is 200\n'+
            'Deposit 300 the 14/11/2019 and the balance is 500\n' +
            'Withdrawal 50 the 14/9/2019 and the balance is 450\n';
        assert.equal(result, statement.makeContainer());
    });

    it('should test makeStatement return result', function () {
        let result = 'Transaction for heihong\n' +
            'Deposit 200 the 14/9/2019 and the balance is 200\n'+
            'Deposit 300 the 14/11/2019 and the balance is 500\n' +
            'Withdrawal 50 the 14/9/2019 and the balance is 450\n';
        assert.equal(result, statement.makeStatement());
    });
});