// Lesson 25 Objects

//1. Object, cars & travels
const btn_261 = document.getElementById('task_26.1');
btn_261.addEventListener('click', () => {
    const carManufacturer = prompt(`Enter the car manufacturer`);
    const carModel = prompt(`Enter the car model`);
    const carYear = +prompt(`Enter the year of the car manufacturing`);
    const carSpeed = +prompt(`Enter the cruising speed of the car`);
    const carDistance = +prompt(`Enter the distance you need to drive`);
    function Car(manufacturer, model, year, speed) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.speed = speed;
        this.print = function () {
            alert(`The car manufacturer is ${this.manufacturer}
            The car model is ${this.model}
            The year of the car manufacturing is ${this.year}
            The cruising speed of the car is ${this.speed}`);
        };
        this.timeTrip = function (distance) {
            let time = distance / this.speed + Math.trunc(distance / this.speed / 4);
            return time;
        }
    }
    car = new Car(carManufacturer, carModel, carYear, carSpeed);
    car.print();
    alert(car.timeTrip(carDistance));
});

//2. Operations with numerators and denominators
const btn_262 = document.getElementById('task_26.2');
btn_262.addEventListener('click', () => {
    function fraction(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.fractionReduction = function (numerator, denominator) {
            let n = numerator;
            let d = denominator;
            for (let i = 2; i <= n && i <= d; i++){
                if ((n % i == 0) && (d % i == 0)) {
                    n /= i;
                    d /= i;
                    i--;
                }
            }
            return {
                numerator: n,
                denominator: d,
            }
            
        }
    };
    function fractionalOperations(numerator1, denominator1, numerator2, denominator2) {
        this.fraction1 = new fraction(numerator1, denominator1);
        this.fraction2 = new fraction(numerator2, denominator2);
        this.add = new fraction(numerator1 * denominator2 + numerator2 * denominator1, denominator1 * denominator2);
        this.subtr = new fraction(numerator1 * denominator2 - numerator2 * denominator1, denominator1 * denominator2);
        this.mult = new fraction(numerator1 * numerator2, denominator1 * denominator2);
        this.div = new fraction(numerator1 * denominator2, denominator1 * numerator2);
    };
    const num1 = +prompt(`Enter numerator of the first fraction`);
    const denom1 = +prompt(`Enter denominator of the first fraction`);
    const num2 = +prompt(`Enter numerator of the second fraction`);
    const denom2 = +prompt(`Enter denominator of the second fraction`);
    alert(`You entered fractions ${num1}/${denom1} and ${num2}/${denom2}`);
    fract1 = new fraction(num1, denom1);
    fract2 = new fraction(num2, denom2);
    alert(`Redused fractions are ${fract1.fractionReduction(num1, denom1)} and ${fract2.fractionReduction(num2, denom2)}`);
    fractionalOperations = fractionalOperations(num1, denom1, num2, denom2);

});