// feel the real power of template literals

// math expression

let price = 500;
let quantity = 3;

console.log(`Total Price: ${price * quantity} taka\npay the price to get it as your own  `);

// function call

function getDiscount(price) {
    return price * 0.1;
}

console.log(`Your saved: ${getDiscount(price)} taka \nYour total bill is now: ${price * quantity - getDiscount(price)}`);
