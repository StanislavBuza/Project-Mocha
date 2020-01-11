function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function isAdult(age) {
    return age >= 21;
}

function sortArray(array) {
    return array.sort((a, b) => a - b);
}

function permuteAPalindrome(input) {
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
    return (num % 2 === 1);
}

function isEvenNumber(num) {
    return (num % 2 === 0);
}

module.exports = {sum, mult, isAdult, sortArray, permuteAPalindrome, isOddNumber, isEvenNumber};
