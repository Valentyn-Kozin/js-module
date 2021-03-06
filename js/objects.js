// Lesson 25 Objects
export const objects = () => {
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
        const car = new Car(carManufacturer, carModel, carYear, carSpeed);
        car.print();
        alert(car.timeTrip(carDistance));
    });

    //2. Operations with numerators and denominators
    const btn_262 = document.getElementById('task_26.2');
    btn_262.addEventListener('click', () => {
        function Fraction(num, denom) {
            this.num = num;
            this.denom = denom;
            this.fractionReduce = function () {
                let n = Math.abs(this.num);
                let d = Math.abs(this.denom);
                for (let i = 2; i <= n && i <= d; i++) {
                    if ((n % i == 0) && (d % i == 0)) {
                        n /= i;
                        d /= i;
                        i--;
                    }
                }
                alert(`${n * Math.sign(this.num)}/${d * Math.sign(this.denom)}`);
                // return {
                //     num: n * Math.sign(this.num),
                //     denom: d * Math.sign(this.denom),
                // }
            };
        };
        function FractionOperations(num1, denom1, num2, denom2) {
            this.fraction1 = new Fraction(num1, denom1);
            this.fraction2 = new Fraction(num2, denom2);
            this.add = new Fraction(num1 * denom2 + num2 * denom1, denom1 * denom2);
            this.subtr = new Fraction(num1 * denom2 - num2 * denom1, denom1 * denom2);
            this.mult = new Fraction(num1 * num2, denom1 * denom2);
            this.div = new Fraction(num1 * denom2, denom1 * num2);
        };
        const num1 = prompt(`Enter numerator of the first fraction`);
        const denom1 = prompt(`Enter denominator of the first fraction`);
        const num2 = prompt(`Enter numerator of the second fraction`);
        const denom2 = prompt(`Enter denominator of the second fraction`);
        alert(`You entered fractions ${num1}/${denom1} and ${num2}/${denom2}`);
        alert(`The results of arithmetic operations are as follows`);
        const fractions = new FractionOperations(num1, denom1, num2, denom2);
        fractions.fraction1.fractionReduce();
        fractions.fraction2.fractionReduce();
        fractions.add.fractionReduce();
        fractions.subtr.fractionReduce();
        fractions.mult.fractionReduce();
        fractions.div.fractionReduce();
    });

    //3. Time object.
    const btn_263 = document.getElementById('task_26.3');
    btn_263.addEventListener('click', () => {
        function Time(h, m, s) {
            this.h = h;
            this.m = m;
            this.s = s;
            this.showTime = function () {
                const getTime = new Date;
                getTime.setHours(this.h, this.m, this.s);
                alert(`It is ${getTime.toTimeString()}`);
            };
            this.addSeconds = function (as) {
                const newTime = getTime(getSeconds(this.h, this.m, this.s + as));
                return newTime;
            };
            this.addMinutes = function (am) {
                const newTime = getTime(getSeconds(this.h, this.m + am, this.s));
                return newTime;
            };
            this.addHours = function (ah) {
                const newTime = getTime(getSeconds(this.h + ah, this.m, this.s));
                return newTime;
            };
        }
        const getSeconds = function (h, m, s) {
            const seconds = h * 3600 + m * 60 + s;
            return seconds;
        };
        const getTime = function (s) {
            const seconds = s % 60;
            const minutes = ((s - seconds) / 60) % 3600;
            const hours = (s - (minutes * 60) - seconds) / 3600;
            let time = new Date;
            time.setHours(hours, minutes, seconds);
            return time.toTimeString();
        };
        const userHours = +prompt(`Enter hours`);
        const userMinutes = +prompt(`Enter minutes`);
        const userSeconds = +prompt(`Enter seconds`);
        const time = new Time(userHours, userMinutes, userSeconds);
        time.showTime();
        const userChangeSeconds = +prompt(`Enter the number of seconds for which you want to change the previously entered time.`);
        alert(`Changed time is ${time.addSeconds(userChangeSeconds)}`);
        const userChangeMinutes = +prompt(`Enter the number of minutes for which you want to change the previously entered time.`);
        alert(`Changed time is ${time.addMinutes(userChangeMinutes)}`);
        const userChangeHours = +prompt(`Enter the number of hours for which you want to change the previously entered time.`);
        alert(`Changed time is ${time.addHours(userChangeHours)}`);
    });
};