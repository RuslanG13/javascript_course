// **1 задача:**

// 🧲 Задача: Магазин и корзина товаров 🧲

// Создайте класс `Product`, который будет представлять товар в магазине, и класс `Cart`, 
// который будет управлять корзиной покупок. Реализуйте следующие функции:

// Класс `Product` должен иметь свойства:

// 1) name (название товара),
// 2) price (цена товара).

// Класс Cart должен предоставлять методы:

// 1) addProduct(products) — добавить товар/товары в корзину.
// 2) removeProduct(productName) — удалить товар из корзины по названию.
// 3) getTotalPrice() — вернуть общую стоимость всех товаров в корзине.
// 4) getlistProducts() — вывести список товаров в корзине.

// ```JavaScript
//   const cart = new Cart();

//   const bread = new Product("Хлеб", 30);
//   const apple = new Product("Яблоко", 50);
//   const milk = new Product("Молоко", 60);

//   // cart.addProduct(apple);
//   // cart.addProduct(milk);

//   cart.addProduct(bread, apple, milk);

//   const removedProduct = cart.removeProduct("Молоко");

//   log(`${removedProduct} удален из корзины`)

//   log(cart.listOfProducts)

//   log(`Общая сумма товаров в корзине: ${cart.getTotalPrice()}`);
// ```


// Solution
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {

    #listOfProducts = [];

    addProduct(...product) {
        this.#listOfProducts.push(...product);
        product.forEach((product) => console.log(`Product ${product.name} added to the cart`));
    }

    removeProduct(productName) {
        this.#listOfProducts = this.#listOfProducts.filter((product) => {
            return product.name !== productName;
        });
        return productName;
    }

    getTotalPrice() {
        this.totalPrice = this.#listOfProducts.reduce((total, p) => {
            return total += p.price;
        }, 0);

        return this.totalPrice;
    }

    getlistOfProducts() {
        return this.#listOfProducts;
    }
}


const cart = new Cart();

const bread = new Product("Хлеб", 30);
const apple = new Product("Яблоко", 50);
const milk = new Product("Молоко", 60);

// cart.addProduct(apple);
// cart.addProduct(milk);

cart.addProduct(bread, apple, milk);
// Product Хлеб added to the cart
// Product Яблоко added to the cart
// Product Молоко added to the cart

const removedProduct = cart.removeProduct("Молоко");
console.log(`${removedProduct} удален из корзины`)  // Молоко удален из корзины

console.log(cart.getlistOfProducts());
// [
//   Product { name: 'Хлеб', price: 30 },
//   Product { name: 'Яблоко', price: 50 }
// ]

console.log(`Общая сумма товаров в корзине: ${cart.getTotalPrice()}`);  // Общая сумма товаров в корзине: 80