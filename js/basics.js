// Lesson 22 JavaScript basics
export const basics = () => {
    // 1. user greetings
    const btn_221 = document.getElementById('task_22.1');
    btn_221.addEventListener('click', () => {
        const userName = prompt('Enter your name please');
        alert(`Hello, ${userName}!`);
    });

    //2. user age
    const btn_222 = document.getElementById('task_22.2');
    btn_222.addEventListener('click', () => {
        const birthYear = prompt('Enter the year of your birth');
        const currentYear = 2020;
        const userAge = currentYear - birthYear;
        alert(`You are ${userAge} years old.`);
    });

    //3. square perimeter
    const btn_223 = document.getElementById('task_22.3');
    btn_223.addEventListener('click', () => {
        const squareSide = prompt('Enter length of square side');
        alert(`Square perimeter is ${squareSide * 4}`);
    });

    //4. area of a circle
    const btn_224 = document.getElementById('task_22.4');
    btn_224.addEventListener('click', () => {
        const scircleRadius = prompt('Enter length of scircle radius');
        alert(`Area of the circle is ${scircleRadius * scircleRadius * Math.PI}`);
    });

    //5. speed between cities
    const btn_225 = document.getElementById('task_22.5');
    btn_225.addEventListener('click', () => {
        const distance = prompt(`Enter distance between the sityes in kilomiters`);
        const time = prompt(`Enter time you have to travel in hours`);
        alert(`You need to go at a speed of ${distance / time} km per hour`)
    });

    //6. currency converter
    const btn_226 = document.getElementById('task_22.6');
    btn_226.addEventListener('click', () => {
        const exchangeRate = 1.192;
        const dollarAmount = prompt('Enter the amount in dollars');
        const eurAmount = (Math.round(dollarAmount / exchangeRate * 100)) / 100;
        alert(`Your amount is ${eurAmount} euro`);
    });

    //7. memory converter
    const btn_227 = document.getElementById('task_22.7');
    btn_227.addEventListener('click', () => {
        const memoryGb = prompt('Enter the amount of flash drive memory in Gb');
        const filesNumber = Math.floor(memoryGb * 1024 / 820);
        alert(`You can burn ${filesNumber} files of 820 Mb`);
    });

    //8. number of chocolates
    const btn_228 = document.getElementById('task_22.8');
    btn_228.addEventListener('click', () => {
        const cash = prompt('Enter the amount of cash in $');
        const chocolateCost = prompt('Enter cost of the chocolate in $');
        const chocolatesAmount = Math.floor(cash / chocolateCost);
        const rest = cash % chocolateCost;
        alert(`You can buy ${chocolatesAmount} chocolates and get ${rest.toFixed(2)}$ rest`);
    });

    //9. three-digit number
    const btn_229 = document.getElementById('task_22.9');
    btn_229.addEventListener('click', () => {
        const threeDigitNumber = prompt('Enter three-digit number');
        const numberOne = Math.floor(threeDigitNumber / 100);
        const numberTwo = Math.floor((threeDigitNumber - numberOne * 100) / 10);
        const numberThree = threeDigitNumber - numberOne * 100 - numberTwo * 10;
        alert(`${numberThree}${numberTwo}${numberOne}`);
    });

    //.10 Bank deposit
    const btn_2210 = document.getElementById('task_22.10');
    btn_2210.addEventListener('click', () => {
        const deposit = +prompt('Enter your deposit amount please');
        const firstMonthInterest = +(deposit * 0.05 / 12).toFixed(2);
        const simpeInterestAmount = firstMonthInterest * 2;
        const depositAmount = deposit + firstMonthInterest;
        const compoundInterestAmount = +(depositAmount * 0.05 / 12).toFixed(2) + firstMonthInterest;
        alert(`The amount of income for a deposit with simple interest will be ${simpeInterestAmount}
The amount of income for a deposit with compound interest will be ${compoundInterestAmount}`);
    });
};
