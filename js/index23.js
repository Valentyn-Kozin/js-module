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