
let assert = require('assert');
const Withdrawal = require('../app/domain/withdrawal/withdrawal');

describe('Test class Withdrawal', function () {

    let withdrawal, withdrawal1;

    beforeEach(()=> {
        withdrawal = new Withdrawal(100, "05/04/1991");
        withdrawal1 = new Withdrawal();
    });

    // withdrawal

    it('should test getAmount return 100', function () {
        assert.equal(100, withdrawal.getAmount());
    });

    it('should test getDateOperation return date', function () {
        let result = new Date(1991,4,5);
        let withdrawalDate = withdrawal.getDateOperation();
        assert.equal(result.getTime(), withdrawalDate.getTime());
    });

    it('should test getAction return 100', function () {
        assert.equal(-100, withdrawal.getAction());
    });

    // withdrawal1

    it('should test getAmount return 100', function () {

        assert.equal(0, withdrawal1.getAmount());
    });

    it('should test getDateOperation return date', function () {
        let result = new Date();
        let withdrawalDate = withdrawal1.getDateOperation();
        assert.equal(result.getTime(), withdrawalDate.getTime());
    });

    it('should test getAction return 100', function () {
        assert.equal(-0, withdrawal1.getAction());
    });
});