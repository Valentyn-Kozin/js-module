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
    const buttonWithNumber = prompt('Press the number key on the keyboard please');
    const buttonWithSymbol = buttonWithNumber == 1 ? '!' :
        buttonWithNumber == 2 ? '@' :
            buttonWithNumber == 3 ? '#' :
                buttonWithNumber == 4 ? '$' :
                    buttonWithNumber == 5 ? '%' :
                        buttonWithNumber == 6 ? '^' :
                            buttonWithNumber == 7 ? '&' :
                                buttonWithNumber == 8 ? '*' :
                                    buttonWithNumber == 9 ? '(' :
                                        buttonWithNumber == 0 ? ')' :
                                        'Press the number key on the keyboard please';
    alert(buttonWithSymbol);
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