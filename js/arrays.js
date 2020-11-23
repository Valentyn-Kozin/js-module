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
        for (let i of storeReceipt) {
            storeReceiptToPrint += i.productName + '\t' + i.productQuantity + '*' + i.productPriсe + '\t' + i.sum + '\n';
            storeReceiptTotal += i.productQuantity * i.productPriсe;
        }
        storeReceiptToPrint += 'Total' + '\t' + storeReceiptTotal + '\n';
        console.log(storeReceiptToPrint);
    });
};