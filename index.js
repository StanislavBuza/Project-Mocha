function sum(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

function isAdult(age) {
  if  (isNaN(age))  return 'Error input';
  if (typeof age !== 'number')  return 'Error input';
  return age >= 21;
}

function sortArray(array) {
  if (!(array instanceof Array)) return 'Error input';
  return array.sort((a, b) => a - b);
}

function permuteAPalindrome(input) {
  if (typeof input !== 'string') return 'Input not a String';
  let countOdd = 0;
  let arr = input.split('');
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      countOdd++;
    }
  }
  return countOdd <= 1;
}

function isOddNumber(num) {
  if (isNaN(num)) return 'Input is NaN';
  if (typeof num !== 'number') return 'Input not a Number';
  return (num % 2 === 1);
}

function isEvenNumber(num) {
  if (isNaN(num)) return 'Input is NaN';
  if (typeof num !== 'number') return 'Input not a Number';
  return (num % 2 === 0);
}

module.exports = {sum, mult, isAdult, sortArray, permuteAPalindrome, isOddNumber, isEvenNumber};
