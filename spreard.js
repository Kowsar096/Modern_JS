// Spread operator = three Dot
// let newArr = [...oldArr]
// let newObj = [...oldObj]

let cart = ['fruits', 'rice'];
// cart.push('egg);

let cart2 = [...cart, 'egg'];

console.log(cart, cart2,);

const personalInfo ={
    name: 'Samad',
    age: 22
}

const contractInfo = {
    email: 'samad@gmail.com',
    phone: '0175435353'
}

const fullProfile ={
    ...personalInfo,
    ...contractInfo
}
console.log(fullProfile);