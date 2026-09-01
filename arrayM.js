// reduce, sort, chaining

let products = [
    { title: 'Mouse', Price: 500, inStock: true },
    { title: 'Keyboard', Price: 900, inStock: true },
    { title: 'Monitor', Price: 12000, inStock: false },
    { title: 'Headphone', Price: 1700, inStock: true },
];

// reduce

let totalPrice = products.reduce((acc, current) => {
    return (acc += current.Price);
}, 0); // initial value is 0

console.log(totalPrice)

let sorted = products.sort((a, b) => a.Price - b.Price);
console.log(sorted)

// chaining ( in stock product price)

console.log('in stock product price')

let estPrice = products.filter((p) => p.inStock == true).reduce((acc, current) => {
    return (acc += current.Price)
}, 0);

console.log(estPrice)