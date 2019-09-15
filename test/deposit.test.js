
let assert = require('assert');
const Deposit = require('../app/domain/deposit/deposit');

describe('Test class Deposit', function () {

    let deposit, deposit1;

    beforeEach(()=> {
        deposit = new Deposit(100, "05/04/1991");
        deposit1 = new Deposit();
    });

    // deposit

    it('should test getAmount return 100', function () {

        assert.equal(100, deposit.getAmount());
    });

    it('should test getDateOperation return new Date(1991,4,5)', function () {
        let result = new Date(1991,4,5);
        let depositDate = deposit.getDateOperation();
        assert.equal(result.getTime(), depositDate.getTime());
    });

    it('should test getAction return 100', function () {
        assert.equal(100, deposit.getAction());
    });

    // deposit1

    it('should test getAmount return 0', function () {

        assert.equal(0, deposit1.getAmount());
    });

    it('should test getDateOperation return new Date()', function () {
        let result = new Date();
        let depositDate = deposit1.getDateOperation();
        assert.equal(result.getTime(), depositDate.getTime());
    });

    it('should test getAction return 0', function () {
        assert.equal(0, deposit1.getAction());
    });
});