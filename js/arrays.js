// Lesson 27 Arrays
export const arrays = () => {
    //1. Shopping list
    const shoppingList = [];
    function ShoppingListItem(productName, requiredQuantity) {
        this.productName = productName;
        this.requiredQuantity = requiredQuantity;
        this.isBought = false;
    }
    const btn_2711 = document.getElementById('task_27.1.1');
    btn_2711.addEventListener('click', () => {
        if (shoppingList.length == 0) {
            alert(`Your shopping list is empty.`)
        } else {
            shoppingList.sort((a, b) => a.isBought - b.isBought);
            let shoppingListToPrint = "";
            let j = "";
            for (let i of shoppingList) {
                if (i.isBought == true) {
                    j = "already purchased";
                } else {
                    j = "not yet purchased";
                }
                shoppingListToPrint += i.productName + '\, ' + i.requiredQuantity + ' item(s), need to buy - ' + j + '\n';
            }
            alert(`${shoppingListToPrint}`);
        }
    });
    const btn_2712 = document.getElementById('task_27.1.2');
    btn_2712.addEventListener('click', () => {
        const userProductName = prompt(`Enter product name`);
        const userRequiredQuantity = +prompt(`Enter quantity`);
        if (shoppingList.length > 0) {
            let isProductName = false;
            for (let i = 0; i < shoppingList.length; i++) {
                if (shoppingList[i].productName == userProductName) {
                    shoppingList[i].requiredQuantity += userRequiredQuantity;
                    isProductName = true;
                }
            }
            if (isProductName == false) {
                const shoppingListItem = new ShoppingListItem(userProductName, userRequiredQuantity);
                shoppingList.push(shoppingListItem);
            }
        } else {
            const shoppingListItem = new ShoppingListItem(userProductName, userRequiredQuantity);
            shoppingList.push(shoppingListItem);
        }
    });
    const btn_2713 = document.getElementById('task_27.1.3');
    btn_2713.addEventListener('click', () => {
        if (shoppingList.length == 0) {
            alert(`Your shopping list is empty.`)
        } else {
            const purchaseProduct = prompt(`Enter the name of the purchased product`);
            let isProductName = false;
            for (let i = 0; i < shoppingList.length; i++) {
                if (shoppingList[i].productName == purchaseProduct) {
                    isProductName = true;
                    if (shoppingList[i].isBought == false) {
                        shoppingList[i].isBought = true;
                    } else {
                        alert(`There is no need to spend so much. You have already bought it.`);
                    }
                }
            }
            if (isProductName == false) {
                alert(`There is no such product in the list`);
            }
        }
    });

    //2. Store receipt
    const storeReceipt = [];
    function StoreReceiptItem(productName, productQuantity, productPriсe) {
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.productPriсe = productPriсe;
        this.sum = this.productQuantity * this.productPriсe;
    }
    const btn_2721 = document.getElementById('task_27.2.1');
    btn_2721.addEventListener('click', () => {
        let question = true;
        while (question) {
            const userProductName = prompt(`Enter product name`);
            const userProductQuantity = +prompt(`Enter product quantity`);
            const userProductPrice = +prompt(`Enter product's price`);
            const userStoreReceiptItem = new StoreReceiptItem(userProductName, userProductQuantity, userProductPrice);
            storeReceipt.push(userStoreReceiptItem);
            question = confirm(`Do you want to enter enother product?`);
        }
        let storeReceiptToPrint = "";
        let storeReceiptTotal = 0;
        let exp = 0;
        let expPurchase = "";
        for (let i of storeReceipt) {
            storeReceiptToPrint += i.productName + '\t' + i.productQuantity + '*' + i.productPriсe + '\t' + i.sum + '\n';
            storeReceiptTotal += i.productQuantity * i.productPriсe;
            if (exp < i.sum) {
                exp = i.sum;
                expPurchase = i.productName;
            }
        }
        storeReceiptToPrint += 'Total' + '\t' + storeReceiptTotal + '\n';
        storeReceiptToPrint += 'The most expensive purchase is ' + expPurchase + '\n';
        storeReceiptToPrint += 'The average cost of the goods in the check is ' + (storeReceiptTotal / storeReceipt.length);
        alert(storeReceiptToPrint);
    });
    //3. CSS array
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
            let string = '<p style="';
            for (let i of arr) {
                string += i.styleName + ': ' + i.style + ';';
            }
            string += '">' + text + '</p>';
            document.write(string);
        }
        addString(cssArray, userText);
    });

    //3. Academy audiences
    const audiences = [];
    audiences.push({ number: 101, seats: 10, faculty: 'Biology' });
    audiences.push({ number: 102, seats: 15, faculty: 'Geology' });
    audiences.push({ number: 103, seats: 20, faculty: 'Economics' });
    audiences.push({ number: 104, seats: 12, faculty: 'History' });
    audiences.push({ number: 105, seats: 18, faculty: 'Mathematics' });
    audiences.push({ number: 106, seats: 10, faculty: 'Psuchology' });
    audiences.push({ number: 107, seats: 15, faculty: 'Chemistry' });
    audiences.push({ number: 108, seats: 13, faculty: 'Economics' });
    audiences.push({ number: 109, seats: 10, faculty: 'History' });
    audiences.push({ number: 110, seats: 10, faculty: 'Psuchology' });
    const printAudience = (arr) => {
        let audienceList = "";
        for (let i of arr) {
                audienceList += "audience " + i.number + ', ' + i.seats + ' seats, ' + i.faculty + ' Faculty' + '\n';
            }
            alert(`${audienceList}`);
    }
    const btn_2741 = document.getElementById('task_27.4.1');
    btn_2741.addEventListener('click', () => {
        printAudience(audiences);
    });
    const btn_2742 = document.getElementById('task_27.4.2');
    btn_2742.addEventListener('click', () => {
        const userFaculty = prompt(`Enter faculty you are serching`);
        const facultyAudience = audiences.filter(item => item.faculty == userFaculty);
        printAudience(facultyAudience);
    });
    const btn_2743 = document.getElementById('task_27.4.3');
    btn_2743.addEventListener('click', () => {
        const group = {};
        const groupName = prompt(`Enter group name`);
        const studentsNumber = +prompt(`Enter number of students in the group`);
        const groupFaculty = prompt(`Enter the faculty of the group`);
        group.name = groupName;
        group.students = studentsNumber;
        group.faculty = groupFaculty;
        const groupAudience = audiences.filter(item => (item.faculty == group.faculty)&&(item.seats >= group.students));
        printAudience(groupAudience);
    });
    const btn_2744 = document.getElementById('task_27.4.4');
    btn_2744.addEventListener('click', () => {
        audiences.sort((a, b) => a.seats - b.seats);
        printAudience(audiences);
    });
    const btn_2745 = document.getElementById('task_27.4.5');
    btn_2745.addEventListener('click', () => {
        audiences.sort((a, b) => a.number - b.number);
        printAudience(audiences);
    });
};