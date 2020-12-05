//Lesson 28 Classes
export const classes = () => {
    //1. Circle
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        get seeRadius() {
            return this.radius;
        }
        set enterRadius(value) {
            this.radis = value;
        }
        get diameter() {
            return this.radius * 2;
        }
        circleArea() {
            return Math.PI * Math.pow(this.radius, 2);
        }
        circleLength() {
            return 2 * Math.PI * this.radius;
        }
    }
    const btn_2811 = document.getElementById('task_28.1.1');
    btn_2811.addEventListener('click', () => {
        const userRadius = +prompt(`Enter the circle radius`);
        const userCircle = new Circle(userRadius);
        const btn_2812 = document.getElementById('task_28.1.2');
        btn_2812.addEventListener('click', () => {
            alert(`You entered ${userCircle.seeRadius}`);
        });
        const btn_2813 = document.getElementById('task_28.1.3');
        btn_2813.addEventListener('click', () => {
            alert(`The circle diameter is ${userCircle.diameter}`);
        });
        const btn_2814 = document.getElementById('task_28.1.4');
        btn_2814.addEventListener('click', () => {
            alert(`The circle area is ${userCircle.circleArea().toFixed(2)}`);
        });
        const btn_2815 = document.getElementById('task_28.1.5');
        btn_2815.addEventListener('click', () => {
            alert(`The circle length is ${userCircle.circleLength().toFixed(2)}`);
        });
    });
    //2. Text marker
    class Marker {
        constructor(color, inkBalance) {
            this.color = color;
            this.inkBalance = inkBalance;
        }
        print(text) {
            let textToPrint = "";
            let textLength = this.inkBalance;
                for (let i of text) {
                    if (textLength > 0) {
                        textToPrint += i;
                        if (i !== " ") {
                            textLength -= 0.5;
                        }
                    } else break;
                }
            return document.write(`<span style="color: ${this.color};">${textToPrint}</span>`)
        }
    }
    class FillMarker extends Marker {
        fill() {
            super.print(text);
            this.inkBalance = 100;
        }
    }
    const btn_2821 = document.getElementById('task_28.2.1');
    btn_2821.addEventListener('click', () => {
        const userColor = prompt(`Enter color`);
        const userText = prompt(`Enter text`);
        const userInkBalance = +prompt(`Enter the ink level of the marker (a number between 0 and 100)`);
        const userMarker = new FillMarker(userColor, userInkBalance);
        userMarker.print(userText);
    });
    //3. Bank staff
    const btn_2831 = document.getElementById('task_28.3.1');
    btn_2831.addEventListener('click', () => {
        class Employee {
            constructor(name, position, experience, rate) {
                this.name = name,
                this.position = position,
                this.experience = experience,
                this.rate = rate
            }
        }
        const staffList = [];
        let question = true;
        while (question) {
            const staffName = prompt(`Enter name`);
            const staffPosition = prompt(`Enter position`);
            const staffExperience = prompt(`Enter experience`);
            const staffRate = (`Enter rate`);
            staffList.push(
                new Employee(staffName, staffPosition, staffExperience, staffRate)
            );
            question = confirm(`Do you want to enter another employee?`);
        }
        
        

    });
};