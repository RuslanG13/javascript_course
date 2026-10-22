// shop.js

/* 
Задача: Магазин и корзина товаров 

Создайте класс Product, который будет представлять товар в магазине, и класс Cart, 
который будет управлять корзиной покупок. Реализуйте следующие функции:

Класс Product должен иметь свойства:
1) name (название товара),
2) price (цена товара).

Класс Cart должен предоставлять методы:
1) addProduct(product) — добавить товар в корзину.
2) removeProduct(productName) — удалить товар из корзины по названию.
3) getTotalPrice() — вернуть общую стоимость всех товаров в корзине.
4) listProducts() — вывести список товаров в корзине.
*/


// --------------------------- Решение -------------------------------

const log = console.log;

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    #products = [];

    constructor() { }

    addProduct(...product) {
        this.#products.push(...product);
        product.forEach((product) => log(`Product ${product.name} added to the cart`));
    }

    removeProduct(productName) {
        this.#products = this.#products.filter((product) => {
            return product.name !== productName;
        });

        return productName;
    }

    getTotalPrice() {
        const totalPrice = this.#products.reduce((total, p) => {
            return total += p.price;
        }, 0);

        return totalPrice;
    }

    get listOfProducts() {
        return this.#products;
    }
}


const cart = new Cart();

const bread = new Product("Bread", 30);
const apple = new Product("Apple", 50);
const milk = new Product("Milk", 60);

// cart.addProduct(apple);  // Product Apple added to the cart
// cart.addProduct(milk);  //  Product Milk added to the cart

cart.addProduct(bread, apple, milk);
// Product Bread added to the cart
// Product Apple added to the cart
// Product Milk added to the cart

log(cart.products);  // undefined (Тут отображается undefined как поле #products является приватным
// и напрямую мы не можем к нему обращаться. Чтобы взаемодействовать с полем #products нужно использовать
// геттеры и сеттеры  (get set) )

const removedProduct = cart.removeProduct("Apple");
log(`Product '${removedProduct}' was deleted from the cart`);  // Product 'Apple' was deleted from the cart

log(cart.listOfProducts);
// [
//   Product { name: 'Bread', price: 30 },
//   Product { name: 'Milk', price: 60 }
// ]

log(`Total price of the products in the cart: ${cart.getTotalPrice()}`);  // Total price of the products in the cart: 90