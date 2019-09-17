
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Operation = require('../app/domain/operation/operation');


describe('Test class Account', function () {

    let account, client, account1;

    beforeEach(()=> {
        account = new Account("heihong");
        client = new Client("heihong", account);
        account1 = new Account();
    });

    it('should test getNameClient and return heihong', function () {
        assert.equal("heihong", account.getNameClient());
    });

    it('should test getAmount and return 0', function () {
        assert.equal(0, account.getAmount());
    });

    it('should test setAmount and return 200', function () {
        account.setAmount(200);
        assert.equal(200, account.getAmount());
    });

    it('should test getNameClient and return ', function () {
        assert.equal("", account1.getNameClient())
    });



});