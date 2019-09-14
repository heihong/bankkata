
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');


describe('Test class Client', function () {

    let account, client;

    beforeEach(()=> {
        account = new Account("heihong");
        client = new Client("heihong", account);
    });

   it('should test getName and return heihong', function () {

        assert.equal("heihong", client.getName())
    });

    it('should test getAccount and return account', function () {
        assert.equal(account, client.getAccount());
    });
});