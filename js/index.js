// 1. user greetings
let btn_221 = document.getElementById('task_22.1');
btn_221.addEventListener('click', () => {
    const userName = prompt('Enter your name please');
    alert(`Hello, ${userName}!`);
});

//2. user age
let btn_222 = document.getElementById('task_22.2');
btn_222.addEventListener('click', () => {
    const birthYear = prompt('Enter the year of your birth');
    const currentYear = 2020;
    const userAge = currentYear - birthYear;
    alert(`You are ${userAge} years old.`);
 })