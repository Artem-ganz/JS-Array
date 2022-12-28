// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і
//  куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
//   -Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
//   -Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

let shopingList = [
    {
        nameProduct: 'bread',
        count: 1,
        isBought: false,
        price: 20,
        sum: 20,
    },
    {
        nameProduct: 'meat',
        count: 2,
        isBought: true,
        price: 180,
        sum: 360,
    },
    {
        nameProduct: 'chocolate',
        count: 2,
        isBought: false,
        price: 30,
        sum: 60,
    },
    {
        nameProduct: 'milk',
        count: 2,
        isBought: true,
        price: 30,
        sum: 60,
    },
    {
        nameProduct: 'bananas',
        count: 5,
        isBought: true,
        price: 10,
        sum: 50,
    }
];

function printShoppingList(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i].isBought)) {
            console.log(arr[i].nameProduct);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isBought) {
            console.log(arr[i].nameProduct);
        }
    }
}

function setIsBought(nameProduct) {
    for (let i = 0; i < shopingList.length; i++) {
        if (nameProduct === shopingList[i].nameProduct) {
            shopingList[i].isBought = true;
        }
    }
}

console.log(shopingList);
printShoppingList(shopingList);
setIsBought('chocolate');
console.log(shopingList);