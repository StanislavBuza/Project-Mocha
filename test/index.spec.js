

const {expect} = require('chai');
const {sum, mult, isAdult, sortArray, permuteAPalindrome, isOddNumber,isEvenNumber} = require('../index.js');

describe ('function sum must only accept numbers', () => {
  it('should function sum not be NaN',() => {
    expect(sum(2,NaN), 'Input is NaN').be.NaN;
  } );
  it('should function sum inputs be numbers',() => {
    expect(sum(2,'a8'), 'Not a Number').not.be.a('number');
  } );
});

describe ('function sum', () => {
  it('should function sum equals 10',() => {
    expect(sum(2,8)).equal(10);
  } );

  it('should function sum equals 25',() => {
    expect(sum(2,23)).equal(25);
  } );

  it('should function sum not equals 0', () => {
    expect(sum(2,9)).not.eq(0);
  });
});

describe ('function mult must only accept numbers', () => {
  it('should function mult not be NaN',() => {
    expect(mult(2,NaN), 'Not a Number').be.NaN;
  } );
  it('should function sum inputs be numbers',() => {
    expect(mult(2,'a8'), 'Not a Number').to.be.a('number');
  } );
});

describe ('function mult', () => {
  it('should function mult equals 10', () => {
    // assert.equal(mult(2, 7), 14);
    expect(mult(2,5)).eq(10);
  });

  it('should function mult equals 18', () => {
    // assert.notEqual(mult(2, 4), 6);
    expect(mult(2,9)).eq(18);
  });

  it('should function mult not equals 0', () => {
    //   assert.notEqual(mult(2, 4), 6);
    expect(mult(2,3)).not.eq(0);
  });
});

describe ('function isAdult must only accept numbers', () => {
  it('should function isAdult input not be NaN',() => {
    expect(isAdult(15)).not.equal('Error input');
  } );

  it('should function isAdult inputs be numbers',() => {
    expect(isAdult(23)).not.equal('Error input');
  } );
});

describe ('isAdult', () => {
  it('should function isAdult be true', () => {
    // assert.equal(isAdult(32), true);
    expect(isAdult(22)).true;
  });

  it('should function isAdult be false', () => {
    // assert.notEqual(isAdult(17), true);
    expect(isAdult(16)).false;
  });
});

describe ('should function sortArray input be Array', () => {
  it('Is input of function sortArray Array?', () => {
    expect(sortArray([1,2,3,6,5,8,9,0]),'Input not Array').not.equal('Error input');
  });
});
    
describe ('sortArray', () => {
  it('should function sortArray be equal to sorted array', () => {
    expect(sortArray([5,4,3,2,6,7])).deep.equal([2,3,4,5,6,7]);
  });
    
  it('should function sortArray be equal to sorted array', () => {
    expect(sortArray([9,0,7,8,5,6,4,3,2,1])).deep.equal([0,1,2,3,4,5,6,7,8,9]);
  });

  it('should function sortArray be equal to sorted array', () => {
    expect(sortArray([5,4,3,2,6,7])).deep.equal([2,3,4,5,6,7]);
  });
});

describe ('Should input of function permuteAPalindrome be string', () => {
  it('Is input of function permuteAPalindrome string?', () => {
    expect(permuteAPalindrome(123456), 'Not a string').eq('Input not a String');
  });
});

describe ('permuteAPalindrome', () => {
  it('should function permuteAPalindrome be equal to true', () => {
    //    assert.equal(permuteAPalindrome('amdam'), true );
    expect(permuteAPalindrome('adkladklg')).true;
  });

  it('should function permuteAPalindrome be equal to false', () => {
    //    assert.equal(permuteAPalindrome('amdam'), true );
    expect(permuteAPalindrome('adkladklgt')).false;
  });
});

describe('Should input of function isEvenNumber be a number', () =>{
  it('Is input of function isEvenNumber NaN?',() => {
    expect(isEvenNumber(NaN)).eq('Input is NaN');
  });
  it('Is input of function isEvenNumber number?',() => {
    expect(isEvenNumber('12')).eq('Input not a Number');
  });
});

describe ('isEvenNumber', () => {
  it('should function isEvenNumber check if is true',() => {
    //    assert.equal(isEvenNumber(6),true);
    expect(isEvenNumber(12)).true;
  } );

  it('should function isEvenNumber check if is even', () => {
    //    assert.notEqual(sum(7),true);
    expect(isEvenNumber(11)).false;
  });
});

describe('Should input of function isOddNumber be a number', () =>{
  it('Is input of function isOddNumber NaN?',() => {
    expect(isOddNumber(NaN)).eq('Input is NaN');
  });
  it('Is input of function isOddNumber number?',() => {
    expect(isOddNumber('12')).eq('Input not a Number');
  });
});

describe ('isOddNumber', () => {
  it('should function isOddNumber check if is true',() => {
    //    assert.equal(isEvenNumber(6),true);
    expect(isOddNumber(12)).false;
  } );

  it('should function isOddNumber check if is even', () => {
    //    assert.notEqual(sum(7),true);
    expect(isOddNumber(11)).true;
  });
});