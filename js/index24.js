// Lesson 24 Cycles

//1. Calculate the sum of all numbers in a user-specified range.
const btn_241 = document.getElementById('task_24.1');
btn_241.addEventListener('click', () => {
    const lowerLimit = +prompt('Enter the lower limit of the range of numbers');
    const upperLimit = +prompt('Enter the upper limit of the range of numbers');
    let i = lowerLimit;
    let sum = 0;
    do {
        sum += i;
        i++;
    } while (i <= upperLimit);
    alert(`The sum of all numbers in the range is ${sum}`);
});

//2. The greatest common divisor of two numbers
const btn_242 = document.getElementById('task_24.2');
btn_242.addEventListener('click', () => {
    const userNumber1 = +prompt('Enter the first number');
    const userNumber2 = +prompt('Enter the second number');
    let divisor = 1;
    for (let i = 2; i <= userNumber1 && i <= userNumber2; i++) {
        if ((userNumber1 % i == 0) && (userNumber2 % i == 0)) {
            divisor = i;
        }
    }
    alert(`The greatest common divisor of these two numbers is ${divisor}`);
});

//3. All divisors of the number
const btn_243 = document.getElementById('task_24.3');
btn_243.addEventListener('click', () => {
    const userNumber = +prompt('Enter a number');
    let divisors = '1';
    for (let i = 2; i <= userNumber; i++) {
        if (userNumber % i == 0) {
            divisors += `, ${i}`;
        }
    }
    alert(`All divisors of the number are ${divisors}.`);
});

//4. Determine the number of digits in the entered number.
const btn_244 = document.getElementById('task_24.4');
btn_244.addEventListener('click', () => {
    const userNumber = +prompt('Enter a number');
    let i = 1;
    let j = 10;
    while((userNumber - j) > 0) {
        j *= 10;
        i++;
    }
    alert(`The number digits in your your number is ${i}`);
});

//5. counting the number of integers
const btn_245 = document.getElementById('task_24.5');
btn_245.addEventListener('click', () => {
    alert('Enter ten integers');
    let zero = 0;
    let positiveNumber = 0;
    let negativeNumber = 0;
    let evenNumber = 0;
    let oddNumber = 0;
    for (let i = 1; i < 11; i++) {
        let userNumber = +prompt('Enter a number');
        if (userNumber > 0) {
            positiveNumber++;
        } else if (userNumber < 0) {
            negativeNumber++;
        } else {
            zero++;
        }
        if (userNumber % 2 == 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }
    alert(`You entered ${zero} zeros, ${positiveNumber} positive numbers, 
    ${negativeNumber} negative numbers, ${evenNumber} even numbers and 
    ${oddNumber} odd numbers`);
});