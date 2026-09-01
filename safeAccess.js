// Optional Chaining & Nullish Coalescing

let user1 = {
    name: 'Rahim',
    address: {
        city: 'Dhaka',
    },
};

let user2 = {
    name: 'Karim',
    // no address

};
// Optional Chaining

console.log(user1.address.city);
console.log(user2?.address?.city); //undefined

// nullish coalescing ?? (undefined or null than we can use this)

console.log(user2?.address?.city ?? 'Tangail'); // tangail

