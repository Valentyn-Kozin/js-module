// Lesson 23 Data types and operators

//1. User age
const btn_231 = document.getElementById('task_23.1');
btn_231.addEventListener('click', () => {
    const userAge = +prompt('Enter your age please');
        if (userAge < 0) {
            alert(`See you after your birth in this world`);
        } else if (userAge < 3) {
            alert(`Your baby is very clever`);
        } else if (userAge <12) {
            alert(`Hello, kid!`);
        } else if (userAge <19) {
           alert(`How you doing, man?!`);
        } else if (userAge <60) {
           alert(`Glad to see You, Sir/Mam!`);
        } else {
           alert(`I hope you applied for the correct address.`);
        }
});

//2. Number & symbol
const btn_232 = document.getElementById('task_23.2');
btn_232.addEventListener('click', () => {
    const buttonWithNumber = +prompt('Press the number key on the keyboard please');
    switch (buttonWithNumber) {
        case 1:
            alert('!');
            break;
        case 2:
            alert('@');
            break;
        case 3:
            alert('#');
            break;
        case 4:
            alert('$');
            break;
        case 5:
            alert('%');
            break;
        case 6:
            alert('^');
            break;
        case 7:
            alert('&');
            break;
        case 8:
            alert('*');
            break;
        case 9:
            alert('(');
            break;
        case 0:
            alert(')');
            break;
        default:
            alert('Press the number key on the keyboard please');
    }
});

//3. check for the same numbers
const btn_233 = document.getElementById('task_23.3');
btn_233.addEventListener('click', () => {
    const threeDigitNumber = +prompt('Please enter a three-digit number');
    const threeDigitString = String(threeDigitNumber);
    if (threeDigitString.length == 3) {
    const digit1 = Math.floor(threeDigitNumber / 100);
    const digit2 = Math.floor((threeDigitNumber - digit1 * 100) / 10);
    const digit3 = threeDigitNumber - digit1 * 100 - digit2 * 10;
    if (digit1 != digit2 && digit1 != digit3 && digit2 != digit3) {
        alert('There are no identical digits in the number');
    } else {
        alert('There are identical digits in the number');
        }
    }
    else {
        alert('You entered wrong number');
    }
});

//4. Check for leap year
const btn_234 = document.getElementById('task_23.4');
btn_234.addEventListener('click', () => {
    const userYear = +prompt('Please enter a year to check if it is leap');
    if (userYear < 1583) {
        if (userYear % 4 == 0) {
            alert(`${userYear} is a leap year`);
        } else {
            alert(`${userYear} is not a leap year`);
        }
    } else if ((userYear % 400 == 0) || ((userYear % 4 == 0) && (userYear % 100 != 0))) {
        alert(`${userYear} is a leap year`);
    } else {
        alert(`${userYear} is not a leap year`);
    }
});

//5. Five digit palindrome
const btn_235 = document.getElementById('task_23.5');
btn_235.addEventListener('click', () => {
    const fiveDigitNumber = +prompt('Enter five-digit number');
    if (fiveDigitNumber > 9999 && fiveDigitNumber < 100000) {
        const digit1 = Math.floor(fiveDigitNumber / 10000);
        let remainder = fiveDigitNumber - digit1 * 10000;
        const digit2 = Math.floor(remainder / 1000);
        remainder = remainder - digit2 * 1000;
        const digit3 = Math.floor(remainder / 100);
        remainder = remainder - digit3 * 100;
        const digit4 = Math.floor(remainder / 10);
        const digit5 = remainder - digit4 * 10;
        const newNumber = digit5 * 10000 + digit4 * 1000 + digit3 * 100 + digit2 * 10 + digit1;
        if (fiveDigitNumber == newNumber) {
            alert(`You entered a palindrome number`);
        } else {
            alert(`You entered a non polindrome number`);
        }
    } else {
        alert(`You did not enter a five-digit number`);
    }
});

//6. Currency converter
const btn_236 = document.getElementById('task_23.6');
btn_236.addEventListener('click', () => {
    const userDollar = +prompt('How much dollars you want to convert?');
    const userCurrency = prompt('Enter a currency to convert - EUR, UAH or AZN');
    const eur = Math.round(userDollar * 0.8475, 2);
    const uah = Math.round(userDollar * 28.35);
    const azn = Math.round(userDollar * 1.7);
    switch (userCurrency) {
        case 'EUR':
        case 'Eur':
        case 'eur':
            alert(`You can get ${eur} EUR`);
            break;
        case 'UAH':
        case 'Uah':
        case 'uah':
            alert(`You can get ${uah} UAH`);
            break;
        case 'AZN':
        case 'Azn':
        case 'azn':
            alert(`You can get ${azn} AZN`);
            break;
        default:
            alert('Enter the correct currency to convert');
    }
});

//7. Discount payment
const btn_237 = document.getElementById('task_23.7');
btn_237.addEventListener('click', () => {
    const userAmount = +prompt('Enter the amount of your purchase');
    const discount0 = 0;
    const discount1 = 0.03;
    const discount2 = 0.05;
    const discount3 = 0.07;
    const rate1 = 200;
    const rate2 = 300;
    const rate3 = 500;
    if (0 <= userAmount && userAmount < rate1) {
        alert(`Amount to be paid is ${userAmount}`);
    } else if (rate1 <= userAmount && userAmount < rate2) {
        alert(`Amount to be paid is ${Math.round(userAmount * (1 - discount1), 2)}`);
    } else if (rate2 <= userAmount && userAmount < rate3) {
        alert(`${Math.round(userAmount * (1 - discount2), 2)}`);
    } else if (rate3 <= userAmount) {
        alert(`${Math.round(userAmount * (1 - discount3), 2)}`);
    } else {
        alert(`Enter the correct amount of your purchase`);
    }
});

//8. A circle inscribed in a square
const btn_238 = document.getElementById('task_23.8');
btn_238.addEventListener('click', () => {
    const circleLength = +prompt('Enter the length of the circle');
    const squarePerimeter = +prompt('Enter the perimeter of the square');
    if ((circleLength / Math.PI) <= (squarePerimeter / 4)) {
        alert(`This circle can fit into the specified square`);
    } else {
        alert(`This circle can not fit into the specified square`);
    }
});

//9. Three qoestions
const btn_239 = document.getElementById('task_23.9');
btn_239.addEventListener('click', () => {
    alert(`You will receive 3 questions. Choose the correct answer and enter its serial number.`);
    const question1 = prompt('Which plants are associated with the evolution of horses, primates and rodents in the Tertiary period of the Cenozoic era?',
        `1 - cereal plants, 2 - spore plants, 3 - cycad plants`);
    const question2 = prompt('in what period of the Paleozoic era was the extinction of ancient clowns, horsetails, ferns?',
        '1 - Silurian, 2 - Permian, 3 - Carbonian');
    const question3 = prompt('What invertebrates are distributed and dominate in the Cambrian, Ordovician, Silurian and Devonian?',
        '1 - corals, 2 - swordtails, 3 - trilobites');
    let points = 0;
    if (question1 == 1) {
        points += 2;
    }
    if (question2 == 2) {
        points += 2;
    }
    if (question3 == 3) {
        points += 2;
    }
    alert(`You've got ${points} points`);
});

//10. Get the next day after users birthday
const btn_2310 = document.getElementById('task_23.10');
btn_2310.addEventListener('click', () => {
    const userBirthYear = prompt('Enter the year of yor birth');
    const userBirthMonth = prompt('Enter the month of your birth');
    const userBirthDay = prompt('Enter the day of your birth');
    let userDate = new Date(userBirthYear, userBirthMonth - 1, userBirthDay);
    userDate.setDate(userDate.getDate() + 1);
    alert(`The next day after your birthday is ${userDate}`);
});