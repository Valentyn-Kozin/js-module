export const array3 = () => {
    const btn_273 = document.getElementById('task_27.3');
    btn_273.addEventListener('click', () => {
        const cssArray = [];
        function CssArrayItem(styleName, style) {
            this.styleName = styleName;
            this.style = style;
        }
        let question = true;
        while (question) {
            const userStyleName = prompt(`Enter css text style name`);
            const userStyle = prompt(`Enter css style property`);
            const userCssStyleItem = new CssArrayItem(userStyleName, userStyle);
            cssArray.push(userCssStyleItem);
            question = confirm(`Do you want to enter enother style?`);
        }
        const userText = prompt(`Enter some text`);
        function addString(arr, text) {
            let string = '<p style=\"';
            for (let i of arr) {
                string += i.styleName + ': ' + i.style + ';';
            }
            string += '>' + text + '</p>';
            document.write(string);
        }
        addString(cssArray, userText);
    });
};