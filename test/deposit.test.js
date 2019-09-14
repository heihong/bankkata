
let assert = require('assert');
const Deposit = require('../app/domain/deposit/deposit');

describe('Test class Deposit', function () {

    let deposit;

    beforeEach(()=> {
        deposit = new Deposit(100, "05/04/1991");

    });

    it('should test getAmount return 100', function () {

        assert.equal(100, deposit.getAmount());
    });

    it('should test getDateOperation return date', function () {
        let result = new Date(1991,4,5);
        let depositDate = deposit.getDateOperation();
        assert.equal(result.getTime(), depositDate.getTime());
    });
});