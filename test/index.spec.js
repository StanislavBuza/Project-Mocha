const assert = require('assert');
const {expect} = require('chai');
const {sum, mult, isAdult, sortArray, permuteAPalindrome, isOddNumber,isEvenNumber} = require('../index.js');

describe ('function sum', () => {
    it('should function sum equals 10',() => {
        assert.equal(sum(2,8),10);
        expect(sum(2,8)).eq(10);

    } );

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2,4),0);
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

describe ('isAdult', () => {
    it('should function isAdult be true', () => {
        // assert.equal(isAdult(32), true);
        expect(isAdult(22)).to.be.true;

    });


    it('should function isAdult be false', () => {
        // assert.notEqual(isAdult(17), true);
        expect(isAdult(16)).false;
    });
})

assert.equal = function (sortArray, numbers) {
    
}
describe ('sortArray', () => {
    it('should function sortArray be equal to sorted array', () => {
        assert.equal(sortArray([5,4,3,2,6,7]), [2,3,4,5,6,7]);

    });
})

describe ('permuteAPalindrome', () => {
    it('should function permuteAPalindrome be equal to true', () => {
        assert.equal(permuteAPalindrome('amdam'), true );

    });
})
describe ('evenOrOddNumbers', () => {
    it('should function isEvenNumber check if is Even',() => {
        assert.equal(isEvenNumber(6),true);

    } );

    it('should function isEvenNumber check if is Odd', () => {
        assert.notEqual(sum(7),true);
    });
})