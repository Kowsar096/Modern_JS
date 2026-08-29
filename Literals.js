// feel the real power of template literals

//  math expression

let price = 500;
let quantity = 3;

console.log(`total price: ${price * quantity} taka \npay the price to get it as your own`);

function getDiscount(price){
    return price*0.1;
}

console.log(`YOur saved: ${getDiscount(price)} taka\nYour total bill is now ${(price*quantity)-getDiscount(price)}`);

// stock check

let stock = 1;
console.log(`Statues: ${stock>0?"In Stock " + " " + stock: "Out Of Stock"} `)