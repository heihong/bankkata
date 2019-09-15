
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');


describe('Test class Client', function () {

    let account, client, client1;

    beforeEach(()=> {
        account = new Account("heihong");
        client = new Client("heihong", account);
        client1 = new Client();
    });

   it('should test getName and return heihong', function () {

        assert.equal("heihong", client.getName())
    });

    it('should test getAccount and return account', function () {
        assert.equal(account, client.getAccount());
    });

    it('should test getName and return ', function () {

        assert.equal("", client1.getName())
    });

    it('should test getAccount and return null', function () {
        assert.equal(null, client1.getAccount());
    });
});