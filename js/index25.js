// Lesson 25 Functions

//1. Which number is bigger?
const btn_251 = document.getElementById('task_25.1');
btn_251.addEventListener('click', () => {
    let bigger;
    const isBigger = function (a, b) {
        if (a < b) {
            bigger = -1;
        } else if (a > b) {
            bigger = 1;
        } else bigger = 0;
        return bigger;
    };
    alert(`Enter two numbers. If the first one is bigger you'll get -1. If the second one - you'll get 1. If they are equell - you'll get 0.`);
    const firstNumber = +prompt(`Enter the first number`);
    const secondNumber = +prompt(`Enter the second number`);
    alert(isBigger(firstNumber, secondNumber));
});

//2. Factorial
const btn_252 = document.getElementById('task_25.2');
btn_252.addEventListener('click', () => {
    const userNumber = +prompt(`Enter a natural number to find out its factorial`);
    let fact;
    function factorial(n) {
        if (n == 1) {
            fact = 1;
        } else {
            fact = factorial(n - 1) * n;
        }
        return fact;
    }
    alert(`${factorial(userNumber)}`);
});

//3. Three digits to number
const btn_253 = document.getElementById('task_25.3');
btn_253.addEventListener('click', () => {
    alert(`Enter three digits`);
    const digit1 = prompt(`Enter the first digit`);
    const digit2 = prompt(`Enter the second digit`);
    const digit3 = prompt(`Enter the third digit`);
    const getNumber = (a, b, c) => a + b + c;
    alert(`${getNumber(digit1, digit2, digit3)}`);
});

//4. Rectangle area
const btn_254 = document.getElementById('task_25.4');
btn_254.addEventListener('click', () => {
    const length = +prompt(`Enter the length of the rectangle`);
    const width = +prompt(`Enter the width of the rectangle`);
    const rectangleArea = (a, b) => {
        if (a == 0) {
            return b * b;
        } else if (b == 0) {
            return a * a;
        } else return a * b;
    };
    alert(rectangleArea(length, width));
});
//5. The perfect number
const btn_255 = document.getElementById('task_25.5');
btn_255.addEventListener('click', () => {
    const userNumber = +prompt(`Enter a natural number`);
    function isPerfect(a) {
        let j = 0;
        for (let i = 1; i < a; i++) {
            if (a % i == 0) {
                j += i;
            }
        }
        if (a == j) {
            alert(`${a} is a perfect number`);
        } else {
            alert(`${a} is not a perfect number`);
        }
    }
    isPerfect(userNumber);
});

//6. The perfect number from a range of numbers
const btn_256 = document.getElementById('task_25.6');
btn_256.addEventListener('click', () => {
    alert(`Enter the largest and smallest numbers in the range of natural numbers`);
    const smallestNumber = +prompt(`Enter the smallest Number`);
    const largestNumber = +prompt(`Enter the largest Number`);
    let count = 0;
    function getPerfect(min, max) {
        for (let i = smallestNumber; i <= largestNumber; i++){
            isPerfect(i);
        }
        if (count == 0) {
                alert(`There are no perfect numbers`);
            }
    }
    function isPerfect(a) {
        let j = 0;
        for (let k = 1; k < a; k++) {
            if (a % k == 0) {
                j += k;
            }
        }
        if (a == j) {
            count++;
            alert(`${a} is a perfect number`);
        }
    }
    getPerfect(smallestNumber, largestNumber);
});

//7. Get time
const btn_257 = document.getElementById('task_25.7');
btn_257.addEventListener('click', () => {
    const userHours = +prompt(`Enter hours`);
    const userMinutes = +prompt(`Enter minutes`);
    const userSeconds =  +prompt(`Enter seconds`);
    function getTime(h = 0, m = 0, s = 0) {
        let time = new Date;
        time.setHours(h, m, s);
        alert(`It is ${time.toTimeString()}`);
    }
    getTime(userHours, userMinutes, userSeconds);
});

//8. Get time in seconds
const btn_258 = document.getElementById('task_25.8');
btn_258.addEventListener('click', () => {
    const userHours = +prompt(`Enter hours`);
    const userMinutes = +prompt(`Enter minutes`);
    const userSeconds = +prompt(`Enter seconds`);
    const getSeconds = function (h, m, s) {
        const seconds = h * 3600 + m * 60 + s;
        return seconds;
    };
    alert(`The entered time consists of ${getSeconds(userHours, userMinutes, userSeconds)} seconds`);
});

//9. Get time from seconds
const btn_259 = document.getElementById('task_25.9');
btn_259.addEventListener('click', () => {
    const userSeconds = +prompt(`Enter seconds`);
    const getTime = function (s) {
        const seconds = s % 60;
        const minutes = ((s - seconds) / 60) % 3600;
        const hours = (s - (minutes * 60) - seconds) / 3600;
        let time = new Date;
        time.setHours(hours, minutes, seconds);
        return time.toTimeString();
    };
    alert(`${getTime(userSeconds)}`);
});