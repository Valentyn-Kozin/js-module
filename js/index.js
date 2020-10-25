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
});

//3. square perimeter
let btn_223 = document.getElementById('task_22.3');
btn_223.addEventListener('click', () => {
    const squareSide = prompt('Enter length of square side');
    alert(`Square perimeter is ${squareSide * 4}`);
});

//4. area of a circle
let btn_224 = document.getElementById('task_22.4');
btn_224.addEventListener('click', () => {
    const scircleRadius = prompt('Enter length of scircle radius');
    alert(`Area of the circle is ${scircleRadius * scircleRadius *3.14}`);
});