const assert = require('assert');
const [sum, mult] = require('../index.js');

describe ('function sum', () => {
    it('should function sum equals 10',() => {
        assert.equal(sum(2,7),9);

    } );

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2,4),6);
    });
})

describe ('function mult', () => {
    it('should function mult equals 10', () => {
        assert.equal(mult(2, 7), 14);

    });

    it('should function mult not equals 0', () => {
        assert.notEqual(mult(2, 4), 6);
    });
})
