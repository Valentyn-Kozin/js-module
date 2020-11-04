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