// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/basics.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basics = void 0;

// Lesson 22 JavaScript basics
var basics = function basics() {
  // 1. user greetings
  var btn_221 = document.getElementById('task_22.1');
  btn_221.addEventListener('click', function () {
    var userName = prompt('Enter your name please');
    alert("Hello, ".concat(userName, "!"));
  }); //2. user age

  var btn_222 = document.getElementById('task_22.2');
  btn_222.addEventListener('click', function () {
    var birthYear = prompt('Enter the year of your birth');
    var currentYear = 2020;
    var userAge = currentYear - birthYear;
    alert("You are ".concat(userAge, " years old."));
  }); //3. square perimeter

  var btn_223 = document.getElementById('task_22.3');
  btn_223.addEventListener('click', function () {
    var squareSide = prompt('Enter length of square side');
    alert("Square perimeter is ".concat(squareSide * 4));
  }); //4. area of a circle

  var btn_224 = document.getElementById('task_22.4');
  btn_224.addEventListener('click', function () {
    var scircleRadius = prompt('Enter length of scircle radius');
    alert("Area of the circle is ".concat(scircleRadius * scircleRadius * Math.PI));
  }); //5. speed between cities

  var btn_225 = document.getElementById('task_22.5');
  btn_225.addEventListener('click', function () {
    var distance = prompt("Enter distance between the sityes in kilomiters");
    var time = prompt("Enter time you have to travel in hours");
    alert("You need to go at a speed of ".concat(distance / time, " km per hour"));
  }); //6. currency converter

  var btn_226 = document.getElementById('task_22.6');
  btn_226.addEventListener('click', function () {
    var exchangeRate = 1.192;
    var dollarAmount = prompt('Enter the amount in dollars');
    var eurAmount = Math.round(dollarAmount / exchangeRate * 100) / 100;
    alert("Your amount is ".concat(eurAmount, " euro"));
  }); //7. memory converter

  var btn_227 = document.getElementById('task_22.7');
  btn_227.addEventListener('click', function () {
    var memoryGb = prompt('Enter the amount of flash drive memory in Gb');
    var filesNumber = Math.floor(memoryGb * 1024 / 820);
    alert("You can burn ".concat(filesNumber, " files of 820 Mb"));
  }); //8. number of chocolates

  var btn_228 = document.getElementById('task_22.8');
  btn_228.addEventListener('click', function () {
    var cash = prompt('Enter the amount of cash in $');
    var chocolateCost = prompt('Enter cost of the chocolate in $');
    var chocolatesAmount = Math.floor(cash / chocolateCost);
    var rest = cash % chocolateCost;
    alert("You can buy ".concat(chocolatesAmount, " chocolates and get ").concat(rest.toFixed(2), "$ rest"));
  }); //9. three-digit number

  var btn_229 = document.getElementById('task_22.9');
  btn_229.addEventListener('click', function () {
    var threeDigitNumber = prompt('Enter three-digit number');
    var numberOne = Math.floor(threeDigitNumber / 100);
    var numberTwo = Math.floor((threeDigitNumber - numberOne * 100) / 10);
    var numberThree = threeDigitNumber - numberOne * 100 - numberTwo * 10;
    alert("".concat(numberThree).concat(numberTwo).concat(numberOne));
  }); //.10 Bank deposit

  var btn_2210 = document.getElementById('task_22.10');
  btn_2210.addEventListener('click', function () {
    var deposit = +prompt('Enter your deposit amount please');
    var firstMonthInterest = +(deposit * 0.05 / 12).toFixed(2);
    var simpeInterestAmount = firstMonthInterest * 2;
    var depositAmount = deposit + firstMonthInterest;
    var compoundInterestAmount = +(depositAmount * 0.05 / 12).toFixed(2) + firstMonthInterest;
    alert("The amount of income for a deposit with simple interest will be ".concat(simpeInterestAmount, "\nThe amount of income for a deposit with compound interest will be ").concat(compoundInterestAmount));
  });
};

exports.basics = basics;
},{}],"js/datatypesoperators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataTypesOperators = void 0;

// Lesson 23 Data types and operators
var dataTypesOperators = function dataTypesOperators() {
  //1. User age
  var btn_231 = document.getElementById('task_23.1');
  btn_231.addEventListener('click', function () {
    var userAge = +prompt('Enter your age please');

    if (userAge < 0) {
      alert("See you after your birth in this world");
    } else if (userAge < 3) {
      alert("Your baby is very clever");
    } else if (userAge < 12) {
      alert("Hello, kid!");
    } else if (userAge < 19) {
      alert("How you doing, man?!");
    } else if (userAge < 60) {
      alert("Glad to see You, Sir/Mam!");
    } else {
      alert("I hope you applied for the correct address.");
    }
  }); //2. Number & symbol

  var btn_232 = document.getElementById('task_23.2');
  btn_232.addEventListener('click', function () {
    var buttonWithNumber = +prompt('Press the number key on the keyboard please');

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
  }); //3. check for the same numbers

  var btn_233 = document.getElementById('task_23.3');
  btn_233.addEventListener('click', function () {
    var threeDigitNumber = +prompt('Please enter a three-digit number');
    var threeDigitString = String(threeDigitNumber);

    if (threeDigitString.length == 3) {
      var digit1 = Math.floor(threeDigitNumber / 100);
      var digit2 = Math.floor((threeDigitNumber - digit1 * 100) / 10);
      var digit3 = threeDigitNumber - digit1 * 100 - digit2 * 10;

      if (digit1 != digit2 && digit1 != digit3 && digit2 != digit3) {
        alert('There are no identical digits in the number');
      } else {
        alert('There are identical digits in the number');
      }
    } else {
      alert('You entered wrong number');
    }
  }); //4. Check for leap year

  var btn_234 = document.getElementById('task_23.4');
  btn_234.addEventListener('click', function () {
    var userYear = +prompt('Please enter a year to check if it is leap');

    if (userYear < 1583) {
      if (userYear % 4 == 0) {
        alert("".concat(userYear, " is a leap year"));
      } else {
        alert("".concat(userYear, " is not a leap year"));
      }
    } else if (userYear % 400 == 0 || userYear % 4 == 0 && userYear % 100 != 0) {
      alert("".concat(userYear, " is a leap year"));
    } else {
      alert("".concat(userYear, " is not a leap year"));
    }
  }); //5. Five digit palindrome

  var btn_235 = document.getElementById('task_23.5');
  btn_235.addEventListener('click', function () {
    var fiveDigitNumber = +prompt('Enter five-digit number');

    if (fiveDigitNumber > 9999 && fiveDigitNumber < 100000) {
      var digit1 = Math.floor(fiveDigitNumber / 10000);
      var remainder = fiveDigitNumber - digit1 * 10000;
      var digit2 = Math.floor(remainder / 1000);
      remainder = remainder - digit2 * 1000;
      var digit3 = Math.floor(remainder / 100);
      remainder = remainder - digit3 * 100;
      var digit4 = Math.floor(remainder / 10);
      var digit5 = remainder - digit4 * 10;
      var newNumber = digit5 * 10000 + digit4 * 1000 + digit3 * 100 + digit2 * 10 + digit1;

      if (fiveDigitNumber == newNumber) {
        alert("You entered a palindrome number");
      } else {
        alert("You entered a non polindrome number");
      }
    } else {
      alert("You did not enter a five-digit number");
    }
  }); //6. Currency converter

  var btn_236 = document.getElementById('task_23.6');
  btn_236.addEventListener('click', function () {
    var userDollar = +prompt('How much dollars you want to convert?');
    var userCurrency = prompt('Enter a currency to convert - EUR, UAH or AZN');
    var eur = Math.round(userDollar * 0.8475, 2);
    var uah = Math.round(userDollar * 28.35);
    var azn = Math.round(userDollar * 1.7);

    switch (userCurrency) {
      case 'EUR':
      case 'Eur':
      case 'eur':
        alert("You can get ".concat(eur, " EUR"));
        break;

      case 'UAH':
      case 'Uah':
      case 'uah':
        alert("You can get ".concat(uah, " UAH"));
        break;

      case 'AZN':
      case 'Azn':
      case 'azn':
        alert("You can get ".concat(azn, " AZN"));
        break;

      default:
        alert('Enter the correct currency to convert');
    }
  }); //7. Discount payment

  var btn_237 = document.getElementById('task_23.7');
  btn_237.addEventListener('click', function () {
    var userAmount = +prompt('Enter the amount of your purchase');
    var discount0 = 0;
    var discount1 = 0.03;
    var discount2 = 0.05;
    var discount3 = 0.07;
    var rate1 = 200;
    var rate2 = 300;
    var rate3 = 500;

    if (0 <= userAmount && userAmount < rate1) {
      alert("Amount to be paid is ".concat(userAmount));
    } else if (rate1 <= userAmount && userAmount < rate2) {
      alert("Amount to be paid is ".concat(Math.round(userAmount * (1 - discount1), 2)));
    } else if (rate2 <= userAmount && userAmount < rate3) {
      alert("".concat(Math.round(userAmount * (1 - discount2), 2)));
    } else if (rate3 <= userAmount) {
      alert("".concat(Math.round(userAmount * (1 - discount3), 2)));
    } else {
      alert("Enter the correct amount of your purchase");
    }
  }); //8. A circle inscribed in a square

  var btn_238 = document.getElementById('task_23.8');
  btn_238.addEventListener('click', function () {
    var circleLength = +prompt('Enter the length of the circle');
    var squarePerimeter = +prompt('Enter the perimeter of the square');

    if (circleLength / Math.PI <= squarePerimeter / 4) {
      alert("This circle can fit into the specified square");
    } else {
      alert("This circle can not fit into the specified square");
    }
  }); //9. Three qoestions

  var btn_239 = document.getElementById('task_23.9');
  btn_239.addEventListener('click', function () {
    alert("You will receive 3 questions. Choose the correct answer and enter its serial number.");
    var question1 = prompt('Which plants are associated with the evolution of horses, primates and rodents in the Tertiary period of the Cenozoic era?', "1 - cereal plants, 2 - spore plants, 3 - cycad plants");
    var question2 = prompt('in what period of the Paleozoic era was the extinction of ancient clowns, horsetails, ferns?', '1 - Silurian, 2 - Permian, 3 - Carbonian');
    var question3 = prompt('What invertebrates are distributed and dominate in the Cambrian, Ordovician, Silurian and Devonian?', '1 - corals, 2 - swordtails, 3 - trilobites');
    var points = 0;

    if (question1 == 1) {
      points += 2;
    }

    if (question2 == 2) {
      points += 2;
    }

    if (question3 == 3) {
      points += 2;
    }

    alert("You've got ".concat(points, " points"));
  }); //10. Get the next day after users birthday

  var btn_2310 = document.getElementById('task_23.10');
  btn_2310.addEventListener('click', function () {
    var userBirthYear = prompt('Enter the year of yor birth');
    var userBirthMonth = prompt('Enter the month of your birth');
    var userBirthDay = prompt('Enter the day of your birth');
    var userDate = new Date(userBirthYear, userBirthMonth - 1, userBirthDay);
    userDate.setDate(userDate.getDate() + 1);
    alert("The next day after your birthday is ".concat(userDate));
  });
};

exports.dataTypesOperators = dataTypesOperators;
},{}],"js/loops.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loops = void 0;

// Lesson 24 Loops
var loops = function loops() {
  //1. Calculate the sum of all numbers in a user-specified range.
  var btn_241 = document.getElementById('task_24.1');
  btn_241.addEventListener('click', function () {
    var lowerLimit = +prompt('Enter the lower limit of the range of numbers');
    var upperLimit = +prompt('Enter the upper limit of the range of numbers');
    var i = lowerLimit;
    var sum = 0;

    do {
      sum += i;
      i++;
    } while (i <= upperLimit);

    alert("The sum of all numbers in the range is ".concat(sum));
  }); //2. The greatest common divisor of two numbers

  var btn_242 = document.getElementById('task_24.2');
  btn_242.addEventListener('click', function () {
    var userNumber1 = +prompt('Enter the first number');
    var userNumber2 = +prompt('Enter the second number');
    var divisor = 1;

    for (var i = 2; i <= userNumber1 && i <= userNumber2; i++) {
      if (userNumber1 % i == 0 && userNumber2 % i == 0) {
        divisor = i;
      }
    }

    alert("The greatest common divisor of these two numbers is ".concat(divisor));
  }); //3. All divisors of the number

  var btn_243 = document.getElementById('task_24.3');
  btn_243.addEventListener('click', function () {
    var userNumber = +prompt('Enter a number');
    var divisors = '1';

    for (var i = 2; i <= userNumber; i++) {
      if (userNumber % i == 0) {
        divisors += ", ".concat(i);
      }
    }

    alert("All divisors of the number are ".concat(divisors, "."));
  }); //4. Determine the number of digits in the entered number.

  var btn_244 = document.getElementById('task_24.4');
  btn_244.addEventListener('click', function () {
    var userNumber = +prompt('Enter a number');
    var i = 1;
    var j = 10;

    while (userNumber - j > 0) {
      j *= 10;
      i++;
    }

    alert("The number digits in your your number is ".concat(i));
  }); //5. counting the number of integers

  var btn_245 = document.getElementById('task_24.5');
  btn_245.addEventListener('click', function () {
    alert('Enter ten integers');
    var zero = 0;
    var positiveNumber = 0;
    var negativeNumber = 0;
    var evenNumber = 0;
    var oddNumber = 0;

    for (var i = 1; i < 11; i++) {
      var userNumber = +prompt('Enter a number');

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

    alert("You entered ".concat(zero, " zeros, ").concat(positiveNumber, " positive numbers, \n    ").concat(negativeNumber, " negative numbers, ").concat(evenNumber, " even numbers and \n    ").concat(oddNumber, " odd numbers"));
  }); //6. Loop calculator.

  var btn_246 = document.getElementById('task_24.6');
  btn_246.addEventListener('click', function () {
    var arithmeticResult;
    var question = true;

    while (question) {
      var number1 = +prompt('Enter a number');
      var number2 = +prompt('Enter a number');
      var arithmeticOperation = prompt('Enter the sign of the arithmetic operation - +, -, *, /');

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

      alert("The result of the arithmetic operation is ".concat(arithmeticResult));
      question = confirm("Do you want to repeat the operation?");
    }
  }); //7. Shift number

  var btn_247 = document.getElementById('task_24.7');
  btn_247.addEventListener('click', function () {
    var userNumber = prompt("Enter a natural number");
    var shiftNumber = +prompt("Enter the number of digits to which you want to move your number");
    var newNumber = userNumber;

    for (var i = 1; i <= shiftNumber; i++) {
      newNumber = newNumber.slice(1) + newNumber.slice(0, 1);
    }

    alert("".concat(newNumber));
  }); //8. Day of week

  var btn_248 = document.getElementById('task_24.8');
  btn_248.addEventListener('click', function () {
    var userDay = new Date(prompt("Enter any date using yyyy-mm-dd"));
    var nextDay = userDay;
    var question = true;

    while (question) {
      var weekDay = void 0;

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
      question = confirm("".concat(weekDay, " Do you want to see the next day?"));
    }
  }); //9. Multiplication table

  var btn_249 = document.getElementById('task_24.9');
  btn_249.addEventListener('click', function () {
    alert("Let's take a look at the multiplication table");
    var multiplicationTable = "";
    var multiplicationResult;

    for (var i = 2; i <= 9; i++) {
      for (var j = 1; j <= 10; j++) {
        multiplicationResult = i * j;
        multiplicationTable += "".concat(i, "*").concat(j, "=").concat(multiplicationResult, " ");
      }
    }

    alert("Here it is!\n    ".concat(multiplicationTable));
  }); //10. Guess the number game

  var btn_2410 = document.getElementById('task_24.10');
  btn_2410.addEventListener('click', function () {
    alert("Guess a number from 0 to 100");
    var i = 0;
    var j = 100;
    var guesNumber;

    while (guesNumber != 2) {
      var N = Math.round((i + j) / 2);
      guesNumber = +prompt("Enter 1, if your number is less then ".concat(N, ".\n        Enter 2, if your number is equel to ").concat(N, ".\n        Enter 3, if your number is bigger then ").concat(N, "."));

      switch (guesNumber) {
        case 1:
          j = --N;
          break;

        case 2:
          alert("That was easy))");
          break;

        case 3:
          i = ++N;
          break;
      }
    }
  });
};

exports.loops = loops;
},{}],"js/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functions = void 0;

// Lesson 25 Functions
var functions = function functions() {
  //1. Which number is bigger?
  var btn_251 = document.getElementById('task_25.1');
  btn_251.addEventListener('click', function () {
    var bigger;

    var isBigger = function isBigger(a, b) {
      if (a < b) {
        bigger = -1;
      } else if (a > b) {
        bigger = 1;
      } else bigger = 0;

      return bigger;
    };

    alert("Enter two numbers. If the first one is bigger you'll get -1. If the second one - you'll get 1. If they are equell - you'll get 0.");
    var firstNumber = +prompt("Enter the first number");
    var secondNumber = +prompt("Enter the second number");
    alert(isBigger(firstNumber, secondNumber));
  }); //2. Factorial

  var btn_252 = document.getElementById('task_25.2');
  btn_252.addEventListener('click', function () {
    var userNumber = +prompt("Enter a natural number to find out its factorial");
    var fact;

    function factorial(n) {
      if (n == 1) {
        fact = 1;
      } else {
        fact = factorial(n - 1) * n;
      }

      return fact;
    }

    alert("".concat(factorial(userNumber)));
  }); //3. Three digits to number

  var btn_253 = document.getElementById('task_25.3');
  btn_253.addEventListener('click', function () {
    alert("Enter three digits");
    var digit1 = prompt("Enter the first digit");
    var digit2 = prompt("Enter the second digit");
    var digit3 = prompt("Enter the third digit");

    var getNumber = function getNumber(a, b, c) {
      return a + b + c;
    };

    alert("".concat(getNumber(digit1, digit2, digit3)));
  }); //4. Rectangle area

  var btn_254 = document.getElementById('task_25.4');
  btn_254.addEventListener('click', function () {
    var length = +prompt("Enter the length of the rectangle");
    var width = +prompt("Enter the width of the rectangle");

    var rectangleArea = function rectangleArea(a, b) {
      if (a == 0) {
        return b * b;
      } else if (b == 0) {
        return a * a;
      } else return a * b;
    };

    alert(rectangleArea(length, width));
  }); //5. The perfect number

  var btn_255 = document.getElementById('task_25.5');
  btn_255.addEventListener('click', function () {
    var userNumber = +prompt("Enter a natural number");

    function isPerfect(a) {
      var j = 0;

      for (var i = 1; i < a; i++) {
        if (a % i == 0) {
          j += i;
        }
      }

      if (a == j) {
        alert("".concat(a, " is a perfect number"));
      } else {
        alert("".concat(a, " is not a perfect number"));
      }
    }

    isPerfect(userNumber);
  }); //6. The perfect number from a range of numbers

  var btn_256 = document.getElementById('task_25.6');
  btn_256.addEventListener('click', function () {
    alert("Enter the largest and smallest numbers in the range of natural numbers");
    var smallestNumber = +prompt("Enter the smallest Number");
    var largestNumber = +prompt("Enter the largest Number");
    var count = 0;

    function getPerfect(min, max) {
      for (var i = smallestNumber; i <= largestNumber; i++) {
        isPerfect(i);
      }

      if (count == 0) {
        alert("There are no perfect numbers");
      }
    }

    function isPerfect(a) {
      var j = 0;

      for (var k = 1; k < a; k++) {
        if (a % k == 0) {
          j += k;
        }
      }

      if (a == j) {
        count++;
        alert("".concat(a, " is a perfect number"));
      }
    }

    getPerfect(smallestNumber, largestNumber);
  }); //7. Get time

  var btn_257 = document.getElementById('task_25.7');
  btn_257.addEventListener('click', function () {
    var userHours = +prompt("Enter hours");
    var userMinutes = +prompt("Enter minutes");
    var userSeconds = +prompt("Enter seconds");

    function getTime() {
      var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var time = new Date();
      time.setHours(h, m, s);
      alert("It is ".concat(time.toTimeString()));
    }

    getTime(userHours, userMinutes, userSeconds);
  }); //8. Get time in seconds

  var btn_258 = document.getElementById('task_25.8');
  btn_258.addEventListener('click', function () {
    var userHours = +prompt("Enter hours");
    var userMinutes = +prompt("Enter minutes");
    var userSeconds = +prompt("Enter seconds");

    var getSeconds = function getSeconds(h, m, s) {
      var seconds = h * 3600 + m * 60 + s;
      return seconds;
    };

    alert("The entered time consists of ".concat(getSeconds(userHours, userMinutes, userSeconds), " seconds"));
  }); //9. Get time from seconds

  var btn_259 = document.getElementById('task_25.9');
  btn_259.addEventListener('click', function () {
    var userSeconds = +prompt("Enter seconds");

    var getTime = function getTime(s) {
      var seconds = s % 60;
      var minutes = (s - seconds) / 60 % 3600;
      var hours = (s - minutes * 60 - seconds) / 3600;
      var time = new Date();
      time.setHours(hours, minutes, seconds);
      return time.toTimeString();
    };

    alert("".concat(getTime(userSeconds)));
  }); //10. The difference between the two dates

  var btn_2510 = document.getElementById('task_25.10');
  btn_2510.addEventListener('click', function () {
    var user1Hours = +prompt("Enter hours");
    var user1Minutes = +prompt("Enter minutes");
    var user1Seconds = +prompt("Enter seconds");
    var user2Hours = +prompt("Enter hours");
    var user2Minutes = +prompt("Enter minutes");
    var user2Seconds = +prompt("Enter seconds");

    var getSeconds = function getSeconds(h, m, s) {
      var seconds = h * 3600 + m * 60 + s;
      return seconds;
    };

    var getTime = function getTime(s) {
      var seconds = s % 60;
      var minutes = (s - seconds) / 60 % 3600;
      var hours = (s - minutes * 60 - seconds) / 3600;
      var time = new Date();
      time.setHours(hours, minutes, seconds);
      return time.toTimeString();
    };

    var getTimeDifference = function getTimeDifference(h1, m1, s1, h2, m2, s2) {
      var setSeconds = 0;

      if (getSeconds(h1, m1, s1) > getSeconds(h2, m2, s2)) {
        setSeconds = getSeconds(h1, m1, s1) - getSeconds(h2, m2, s2);
      }

      if (getSeconds(h1, m1, s1) < getSeconds(h2, m2, s2)) {
        setSeconds = getSeconds(h2, m2, s2) - getSeconds(h1, m1, s1);
      }

      return getTime(setSeconds);
    };

    alert("The differense is \n    ".concat(getTimeDifference(user1Hours, user1Minutes, user1Seconds, user2Hours, user2Minutes, user2Seconds)));
  });
};

exports.functions = functions;
},{}],"js/objects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objects = void 0;

// Lesson 25 Objects
var objects = function objects() {
  //1. Object, cars & travels
  var btn_261 = document.getElementById('task_26.1');
  btn_261.addEventListener('click', function () {
    var carManufacturer = prompt("Enter the car manufacturer");
    var carModel = prompt("Enter the car model");
    var carYear = +prompt("Enter the year of the car manufacturing");
    var carSpeed = +prompt("Enter the cruising speed of the car");
    var carDistance = +prompt("Enter the distance you need to drive");

    function Car(manufacturer, model, year, speed) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.year = year;
      this.speed = speed;

      this.print = function () {
        alert("The car manufacturer is ".concat(this.manufacturer, "\n            The car model is ").concat(this.model, "\n            The year of the car manufacturing is ").concat(this.year, "\n            The cruising speed of the car is ").concat(this.speed));
      };

      this.timeTrip = function (distance) {
        var time = distance / this.speed + Math.trunc(distance / this.speed / 4);
        return time;
      };
    }

    var car = new Car(carManufacturer, carModel, carYear, carSpeed);
    car.print();
    alert(car.timeTrip(carDistance));
  }); //2. Operations with numerators and denominators

  var btn_262 = document.getElementById('task_26.2');
  btn_262.addEventListener('click', function () {
    function Fraction(num, denom) {
      this.num = num;
      this.denom = denom;

      this.fractionReduce = function () {
        var n = Math.abs(this.num);
        var d = Math.abs(this.denom);

        for (var i = 2; i <= n && i <= d; i++) {
          if (n % i == 0 && d % i == 0) {
            n /= i;
            d /= i;
            i--;
          }
        }

        alert("".concat(n * Math.sign(this.num), "/").concat(d * Math.sign(this.denom))); // return {
        //     num: n * Math.sign(this.num),
        //     denom: d * Math.sign(this.denom),
        // }
      };
    }

    ;

    function FractionOperations(num1, denom1, num2, denom2) {
      this.fraction1 = new Fraction(num1, denom1);
      this.fraction2 = new Fraction(num2, denom2);
      this.add = new Fraction(num1 * denom2 + num2 * denom1, denom1 * denom2);
      this.subtr = new Fraction(num1 * denom2 - num2 * denom1, denom1 * denom2);
      this.mult = new Fraction(num1 * num2, denom1 * denom2);
      this.div = new Fraction(num1 * denom2, denom1 * num2);
    }

    ;
    var num1 = prompt("Enter numerator of the first fraction");
    var denom1 = prompt("Enter denominator of the first fraction");
    var num2 = prompt("Enter numerator of the second fraction");
    var denom2 = prompt("Enter denominator of the second fraction");
    alert("You entered fractions ".concat(num1, "/").concat(denom1, " and ").concat(num2, "/").concat(denom2));
    alert("The results of arithmetic operations are as follows");
    var fractions = new FractionOperations(num1, denom1, num2, denom2);
    fractions.fraction1.fractionReduce();
    fractions.fraction2.fractionReduce();
    fractions.add.fractionReduce();
    fractions.subtr.fractionReduce();
    fractions.mult.fractionReduce();
    fractions.div.fractionReduce();
  }); //3. Time object.

  var btn_263 = document.getElementById('task_26.3');
  btn_263.addEventListener('click', function () {
    function Time(h, m, s) {
      this.h = h;
      this.m = m;
      this.s = s;

      this.showTime = function () {
        var getTime = new Date();
        getTime.setHours(this.h, this.m, this.s);
        alert("It is ".concat(getTime.toTimeString()));
      };

      this.addSeconds = function (as) {
        var newTime = getTime(getSeconds(this.h, this.m, this.s + as));
        return newTime;
      };

      this.addMinutes = function (am) {
        var newTime = getTime(getSeconds(this.h, this.m + am, this.s));
        return newTime;
      };

      this.addHours = function (ah) {
        var newTime = getTime(getSeconds(this.h + ah, this.m, this.s));
        return newTime;
      };
    }

    var getSeconds = function getSeconds(h, m, s) {
      var seconds = h * 3600 + m * 60 + s;
      return seconds;
    };

    var getTime = function getTime(s) {
      var seconds = s % 60;
      var minutes = (s - seconds) / 60 % 3600;
      var hours = (s - minutes * 60 - seconds) / 3600;
      var time = new Date();
      time.setHours(hours, minutes, seconds);
      return time.toTimeString();
    };

    var userHours = +prompt("Enter hours");
    var userMinutes = +prompt("Enter minutes");
    var userSeconds = +prompt("Enter seconds");
    var time = new Time(userHours, userMinutes, userSeconds);
    time.showTime();
    var userChangeSeconds = +prompt("Enter the number of seconds for which you want to change the previously entered time.");
    alert("Changed time is ".concat(time.addSeconds(userChangeSeconds)));
    var userChangeMinutes = +prompt("Enter the number of minutes for which you want to change the previously entered time.");
    alert("Changed time is ".concat(time.addMinutes(userChangeMinutes)));
    var userChangeHours = +prompt("Enter the number of hours for which you want to change the previously entered time.");
    alert("Changed time is ".concat(time.addHours(userChangeHours)));
  });
};

exports.objects = objects;
},{}],"js/arrays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrays = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Lesson 27 Arrays
var arrays = function arrays() {
  //1. Shopping list
  var shoppingList = [];

  function ShoppingListItem(productName, requiredQuantity) {
    this.productName = productName;
    this.requiredQuantity = requiredQuantity;
    this.isBought = false;
  }

  var btn_2711 = document.getElementById('task_27.1.1');
  btn_2711.addEventListener('click', function () {
    if (shoppingList.length == 0) {
      alert("Your shopping list is empty.");
    } else {
      shoppingList.sort(function (a, b) {
        return a.isBought - b.isBought;
      });
      var shoppingListToPrint = "";
      var j = "";

      var _iterator = _createForOfIteratorHelper(shoppingList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;

          if (i.isBought == true) {
            j = "already purchased";
          } else {
            j = "not yet purchased";
          }

          shoppingListToPrint += i.productName + '\, ' + i.requiredQuantity + ' item(s), need to buy - ' + j + '\n';
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      alert("".concat(shoppingListToPrint));
    }
  });
  var btn_2712 = document.getElementById('task_27.1.2');
  btn_2712.addEventListener('click', function () {
    var userProductName = prompt("Enter product name");
    var userRequiredQuantity = +prompt("Enter quantity");

    if (shoppingList.length > 0) {
      var isProductName = false;

      for (var i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].productName == userProductName) {
          shoppingList[i].requiredQuantity += userRequiredQuantity;
          isProductName = true;
        }
      }

      if (isProductName == false) {
        var shoppingListItem = new ShoppingListItem(userProductName, userRequiredQuantity);
        shoppingList.push(shoppingListItem);
      }
    } else {
      var _shoppingListItem = new ShoppingListItem(userProductName, userRequiredQuantity);

      shoppingList.push(_shoppingListItem);
    }
  });
  var btn_2713 = document.getElementById('task_27.1.3');
  btn_2713.addEventListener('click', function () {
    if (shoppingList.length == 0) {
      alert("Your shopping list is empty.");
    } else {
      var purchaseProduct = prompt("Enter the name of the purchased product");
      var isProductName = false;

      for (var i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].productName == purchaseProduct) {
          isProductName = true;

          if (shoppingList[i].isBought == false) {
            shoppingList[i].isBought = true;
          } else {
            alert("There is no need to spend so much. You have already bought it.");
          }
        }
      }

      if (isProductName == false) {
        alert("There is no such product in the list");
      }
    }
  }); //2. Store receipt

  var storeReceipt = [];

  function StoreReceiptItem(productName, productQuantity, productPriсe) {
    this.productName = productName;
    this.productQuantity = productQuantity;
    this.productPriсe = productPriсe;
    this.sum = this.productQuantity * this.productPriсe;
  }

  var btn_2721 = document.getElementById('task_27.2.1');
  btn_2721.addEventListener('click', function () {
    var question = true;

    while (question) {
      var userProductName = prompt("Enter product name");
      var userProductQuantity = +prompt("Enter product quantity");
      var userProductPrice = +prompt("Enter product's price");
      var userStoreReceiptItem = new StoreReceiptItem(userProductName, userProductQuantity, userProductPrice);
      storeReceipt.push(userStoreReceiptItem);
      question = confirm("Do you want to enter enother product?");
    }

    var storeReceiptToPrint = "";
    var storeReceiptTotal = 0;
    var exp = 0;
    var expPurchase = "";

    var _iterator2 = _createForOfIteratorHelper(storeReceipt),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var i = _step2.value;
        storeReceiptToPrint += i.productName + '\t' + i.productQuantity + '*' + i.productPriсe + '\t' + i.sum + '\n';
        storeReceiptTotal += i.productQuantity * i.productPriсe;

        if (exp < i.sum) {
          exp = i.sum;
          expPurchase = i.productName;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    storeReceiptToPrint += 'Total' + '\t' + storeReceiptTotal + '\n';
    storeReceiptToPrint += 'The most expensive purchase is ' + expPurchase + '\n';
    storeReceiptToPrint += 'The average cost of the goods in the check is ' + storeReceiptTotal / storeReceipt.length;
    alert(storeReceiptToPrint);
  }); //3. CSS array

  var btn_273 = document.getElementById('task_27.3');
  btn_273.addEventListener('click', function () {
    var cssArray = [];

    function CssArrayItem(styleName, style) {
      this.styleName = styleName;
      this.style = style;
    }

    var question = true;

    while (question) {
      var userStyleName = prompt("Enter css text style name");
      var userStyle = prompt("Enter css style property");
      var userCssStyleItem = new CssArrayItem(userStyleName, userStyle);
      cssArray.push(userCssStyleItem);
      question = confirm("Do you want to enter enother style?");
    }

    var userText = prompt("Enter some text");

    function addString(arr, text) {
      var string = '<p style="';

      var _iterator3 = _createForOfIteratorHelper(arr),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var i = _step3.value;
          string += i.styleName + ': ' + i.style + ';';
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      string += '">' + text + '</p>';
      document.write(string);
    }

    addString(cssArray, userText);
  }); //3. Academy audiences

  var audiences = [];
  audiences.push({
    number: 101,
    seats: 10,
    faculty: 'Biology'
  });
  audiences.push({
    number: 102,
    seats: 15,
    faculty: 'Geology'
  });
  audiences.push({
    number: 103,
    seats: 20,
    faculty: 'Economics'
  });
  audiences.push({
    number: 104,
    seats: 12,
    faculty: 'History'
  });
  audiences.push({
    number: 105,
    seats: 18,
    faculty: 'Mathematics'
  });
  audiences.push({
    number: 106,
    seats: 10,
    faculty: 'Psuchology'
  });
  audiences.push({
    number: 107,
    seats: 15,
    faculty: 'Chemistry'
  });
  audiences.push({
    number: 108,
    seats: 13,
    faculty: 'Economics'
  });
  audiences.push({
    number: 109,
    seats: 10,
    faculty: 'History'
  });
  audiences.push({
    number: 110,
    seats: 10,
    faculty: 'Psuchology'
  });

  var printAudience = function printAudience(arr) {
    var audienceList = "";

    var _iterator4 = _createForOfIteratorHelper(arr),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var i = _step4.value;
        audienceList += "audience " + i.number + ', ' + i.seats + ' seats, ' + i.faculty + ' Faculty' + '\n';
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    alert("".concat(audienceList));
  };

  var btn_2741 = document.getElementById('task_27.4.1');
  btn_2741.addEventListener('click', function () {
    printAudience(audiences);
  });
  var btn_2742 = document.getElementById('task_27.4.2');
  btn_2742.addEventListener('click', function () {
    var userFaculty = prompt("Enter faculty you are serching");
    var facultyAudience = audiences.filter(function (item) {
      return item.faculty == userFaculty;
    });
    printAudience(facultyAudience);
  });
  var btn_2743 = document.getElementById('task_27.4.3');
  btn_2743.addEventListener('click', function () {
    var group = {};
    var groupName = prompt("Enter group name");
    var studentsNumber = +prompt("Enter number of students in the group");
    var groupFaculty = prompt("Enter the faculty of the group");
    group.name = groupName;
    group.students = studentsNumber;
    group.faculty = groupFaculty;
    var groupAudience = audiences.filter(function (item) {
      return item.faculty == group.faculty && item.seats >= group.students;
    });
    printAudience(groupAudience);
  });
  var btn_2744 = document.getElementById('task_27.4.4');
  btn_2744.addEventListener('click', function () {
    audiences.sort(function (a, b) {
      return a.seats - b.seats;
    });
    printAudience(audiences);
  });
  var btn_2745 = document.getElementById('task_27.4.5');
  btn_2745.addEventListener('click', function () {
    audiences.sort(function (a, b) {
      return a.number - b.number;
    });
    printAudience(audiences);
  });
};

exports.arrays = arrays;
},{}],"js/classes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classes = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Lesson 28 Classes
var classes = function classes() {
  //1. Circle
  var Circle = /*#__PURE__*/function () {
    function Circle(radius) {
      _classCallCheck(this, Circle);

      this.radius = radius;
    }

    _createClass(Circle, [{
      key: "circleArea",
      value: function circleArea() {
        return Math.PI * Math.pow(this.radius, 2);
      }
    }, {
      key: "circleLength",
      value: function circleLength() {
        return 2 * Math.PI * this.radius;
      }
    }, {
      key: "seeRadius",
      get: function get() {
        return this.radius;
      }
    }, {
      key: "enterRadius",
      set: function set(value) {
        this.radis = value;
      }
    }, {
      key: "diameter",
      get: function get() {
        return this.radius * 2;
      }
    }]);

    return Circle;
  }();

  var btn_2811 = document.getElementById('task_28.1.1');
  btn_2811.addEventListener('click', function () {
    var userRadius = +prompt("Enter the circle radius");
    var userCircle = new Circle(userRadius);
    var btn_2812 = document.getElementById('task_28.1.2');
    btn_2812.addEventListener('click', function () {
      alert("You entered ".concat(userCircle.seeRadius));
    });
    var btn_2813 = document.getElementById('task_28.1.3');
    btn_2813.addEventListener('click', function () {
      alert("The circle diameter is ".concat(userCircle.diameter));
    });
    var btn_2814 = document.getElementById('task_28.1.4');
    btn_2814.addEventListener('click', function () {
      alert("The circle area is ".concat(userCircle.circleArea().toFixed(2)));
    });
    var btn_2815 = document.getElementById('task_28.1.5');
    btn_2815.addEventListener('click', function () {
      alert("The circle length is ".concat(userCircle.circleLength().toFixed(2)));
    });
  }); //2. Text marker

  var Marker = /*#__PURE__*/function () {
    function Marker(color, inkBalance) {
      _classCallCheck(this, Marker);

      this.color = color;
      this.inkBalance = inkBalance;
    }

    _createClass(Marker, [{
      key: "print",
      value: function print(text) {
        var textToPrint = "";
        var textLength = this.inkBalance;

        var _iterator = _createForOfIteratorHelper(text),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var i = _step.value;

            if (textLength > 0) {
              textToPrint += i;

              if (i !== " ") {
                textLength -= 0.5;
              }
            } else break;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return document.write("<span style=\"color: ".concat(this.color, ";\">").concat(textToPrint, "</span>"));
      }
    }]);

    return Marker;
  }();

  var FillMarker = /*#__PURE__*/function (_Marker) {
    _inherits(FillMarker, _Marker);

    var _super = _createSuper(FillMarker);

    function FillMarker() {
      _classCallCheck(this, FillMarker);

      return _super.apply(this, arguments);
    }

    _createClass(FillMarker, [{
      key: "fill",
      value: function fill() {
        _get(_getPrototypeOf(FillMarker.prototype), "print", this).call(this, text);

        this.inkBalance = 100;
      }
    }]);

    return FillMarker;
  }(Marker);

  var btn_2821 = document.getElementById('task_28.2.1');
  btn_2821.addEventListener('click', function () {
    var userColor = prompt("Enter color");
    var userText = prompt("Enter text");
    var userInkBalance = +prompt("Enter the ink level of the marker (a number between 0 and 100)");
    var userMarker = new FillMarker(userColor, userInkBalance);
    userMarker.print(userText);
  }); //3. Bank staff

  var btn_2831 = document.getElementById('task_28.3.1');
  btn_2831.addEventListener('click', function () {
    var Employee = function Employee(name, position, experience, rate) {
      _classCallCheck(this, Employee);

      this.name = name, this.position = position, this.experience = experience, this.rate = rate;
    };

    var staffList = [];
    var question = true;

    while (question) {
      var staffName = prompt("Enter name");
      var staffPosition = prompt("Enter position");
      var staffExperience = prompt("Enter experience in years");
      var staffRate = prompt("Enter rate per month");
      staffList.push(new Employee(staffName, staffPosition, staffExperience, staffRate));
      question = confirm("Do you want to enter another employee?");
    }

    var EmpTable = /*#__PURE__*/function () {
      function EmpTable(arr) {
        _classCallCheck(this, EmpTable);

        this.arr = arr;
      }

      _createClass(EmpTable, [{
        key: "getHtml",
        value: function getHtml() {
          var table = document.createElement('table');
          var thead = document.createElement('thead');
          thead.innerHTML = "\n                <tr>\n                   <th>Name</th>\n                    <th>Position</th>\n                    <th>Experience</th>\n                    <th>Rate</th>\n                </tr>";
          table.prepend(thead);
          var tbody = document.createElement('tbody');
          table.append(tbody);
          this.arr.forEach(function (i) {
            tbody.innerHTML += "\n                    <tr>\n                        <td>".concat(i.name, "</td>\n                        <td>").concat(i.position, "</td>\n                        <td>").concat(i.experience, "</td>\n                        <td>").concat(i.rate, "</td>\n                    </tr>\n                    ");
          });
          document.getElementById('task_283').after(table);
        }
      }]);

      return EmpTable;
    }();

    var staffTable = new EmpTable(staffList);
    staffTable.getHtml();
    console.log(staffTable);
  });
};

exports.classes = classes;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _basics = require("./js/basics");

var _datatypesoperators = require("./js/datatypesoperators");

var _loops = require("./js/loops");

var _functions = require("./js/functions");

var _objects = require("./js/objects");

var _arrays = require("./js/arrays");

var _classes = require("./js/classes");

(0, _basics.basics)();
(0, _datatypesoperators.dataTypesOperators)();
(0, _loops.loops)();
(0, _functions.functions)();
(0, _objects.objects)();
(0, _arrays.arrays)();
(0, _classes.classes)();
},{"./js/basics":"js/basics.js","./js/datatypesoperators":"js/datatypesoperators.js","./js/loops":"js/loops.js","./js/functions":"js/functions.js","./js/objects":"js/objects.js","./js/arrays":"js/arrays.js","./js/classes":"js/classes.js"}],"C:/Users/kabanos/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52119" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/kabanos/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-module.e31bb0bc.js.map