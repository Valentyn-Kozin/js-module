// Lesson 24 Loops
export const loops = () => {
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
        while ((userNumber - j) > 0) {
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

    //6. Loop calculator.
    const btn_246 = document.getElementById('task_24.6');
    btn_246.addEventListener('click', () => {
        let arithmeticResult;
        let question = true
        while (question) {
            const number1 = +prompt('Enter a number');
            const number2 = +prompt('Enter a number');
            const arithmeticOperation = prompt('Enter the sign of the arithmetic operation - +, -, *, /');
            if (arithmeticOperation == '+') {
                arithmeticResult = number1 + number2;
            } else if (arithmeticOperation == '-') {
                arithmeticResult = number1 - number2;
            } else if (arithmeticOperation == '*') {
                arithmeticResult = number1 * number2;
            } else if (arithmeticOperation == '/') {
                arithmeticResult = number1 / number2;
            } else {
                alert('Enter the correct sign of the arithmetic operation - +, -, *, /');
            }
            alert(`The result of the arithmetic operation is ${arithmeticResult}`);
            question = confirm(`Do you want to repeat the operation?`);
        }
    });

    //7. Shift number
    const btn_247 = document.getElementById('task_24.7');
    btn_247.addEventListener('click', () => {
        const userNumber = prompt(`Enter a natural number`);
        const shiftNumber = +prompt(`Enter the number of digits to which you want to move your number`);
        let newNumber = userNumber;
        for (let i = 1; i <= shiftNumber; i++) {
            newNumber = newNumber.slice(1) + newNumber.slice(0, 1);
        }
        alert(`${newNumber}`);
    });

    //8. Day of week
    const btn_248 = document.getElementById('task_24.8');
    btn_248.addEventListener('click', () => {
        const userDay = new Date(prompt(`Enter any date using yyyy-mm-dd`));
        let nextDay = userDay;
        let question = true;
        while (question) {
            let weekDay;
            switch (nextDay.getDay()) {
                case 0:
                    weekDay = 'Sunday';
                    break;
                case 1:
                    weekDay = 'Monday';
                    break;
                case 2:
                    weekDay = 'Tuesday';
                    break;
                case 3:
                    weekDay = 'Wednesday';
                    break;
                case 4:
                    weekDay = 'Thersday';
                    break;
                case 5:
                    weekDay = 'Friday';
                    break;
                case 6:
                    weekDay = 'Saturday';
                    break;
            }
            nextDay.setDate(nextDay.getDate() + 1);
            question = confirm(`${weekDay} Do you want to see the next day?`);
        }
    });

    //9. Multiplication table
    const btn_249 = document.getElementById('task_24.9');
    btn_249.addEventListener('click', () => {
        alert(`Let's take a look at the multiplication table`);
        let multiplicationTable = ``;
        let multiplicationResult;
        for (let i = 2; i <= 9; i++) {
            for (let j = 1; j <= 10; j++) {
                multiplicationResult = i * j;
                multiplicationTable += `${i}*${j}=${multiplicationResult} `;
            }
        }
        alert(`Here it is!
    ${multiplicationTable}`);
    });

    //10. Guess the number game
    const btn_2410 = document.getElementById('task_24.10');
    btn_2410.addEventListener('click', () => {
        alert(`Guess a number from 0 to 100`);
        let i = 0;
        let j = 100;
        let guesNumber;
        while (guesNumber != 2) {
            let N = Math.round((i + j) / 2);
            guesNumber = +prompt(`Enter 1, if your number is less then ${N}.
        Enter 2, if your number is equel to ${N}.
        Enter 3, if your number is bigger then ${N}.`);
            switch (guesNumber) {
                case 1:
                    j = --N;
                    break;
                case 2:
                    alert(`That was easy))`);
                    break;
                case 3:
                    i = ++N;
                    break;
            }
        }
    });
};