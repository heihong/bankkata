
let assert = require('assert');
const Withdrawal = require('../app/domain/deposit/deposit');

describe('Test class Withdrawal', function () {

    let withdrawal;

    beforeEach(()=> {
        withdrawal = new Withdrawal(100, "05/04/1991");

    });

    it('should test getAmount return 100', function () {

        assert.equal(100, withdrawal.getAmount());
    });

    it('should test getDateOperation return date', function () {
        let result = new Date(1991,4,5);
        let depositDate = withdrawal.getDateOperation();
        assert.equal(result.getTime(), depositDate.getTime());
    });
});