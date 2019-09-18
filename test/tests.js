
let assert = require('assert');
const Account = require('../app/domain/account/account');


describe('Test class Account', function () {

    let account, client, account1;

    beforeEach(()=> {
        account = new Account();
    });

    it('should make 3 deposit', function () {
        let account = new Account("jean");
        account.applyDeposit(100);
        account.applyWithdrawal(50);
        account.applyDeposit(20);

        assert.equal(3, account.history.length);
    });

    it('should make 3 deposit return 70', function () {
        let account = new Account("jean");
        account.applyDeposit(100);
        account.applyWithdrawal(50);
        account.applyDeposit(20);

        assert.equal(70, account.balance);
    });

    it('should throw exception and negative amount', function () {
        let account = new Account("jean");

        assert.throws(function () {
            account.applyDeposit(-1)
        }, Error);
    });

    it('should throw exception and negative amount', function () {
        let account = new Account("jean");

        assert.throws(function () {
            account.applyWithdrawal(-1)
        }, Error);
    });




});