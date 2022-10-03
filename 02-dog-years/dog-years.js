// This is my age.
const myAge = 16;
// Some early years.
let earlyYears = 2;
earlyYears *= 10.5;
// Some later years.
let laterYears = myAge - 2;
// The number of dog years accounted for by later years.
laterYears *= 4;
// This is my age in dog years.
let myAgeInDogYears = earlyYears + laterYears;
// My name in lower case.
let myName = "Janička Hanušová".toLowerCase();

console.log(earlyYears);
console.log(laterYears);

// My name, age and an equivalent of my age in dog years.
console.log(
  "My name is " +
    myName +
    ". I am " +
    myAge +
    " years old in human years which is " +
    myAgeInDogYears +
    " years old in dog years."
);
