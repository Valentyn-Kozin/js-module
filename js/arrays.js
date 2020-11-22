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
        console.log(shoppingList);
            shoppingList.sort((a, b) => a.isBought - b.isBought);
            let shoppingListToPrint = "";
            // let j = "w";
            for (let i of shoppingList) {
                // if ([i.isBought] === "false") {
                //     j = "not yet purchased";
                // } else {
                //     j = "already purchased";
                // }
                shoppingListToPrint += [i.productName] + '\, ' + [i.requiredQuantity] + ' item(s), need to buy - ' + [i.isBought] + '\n';
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
};