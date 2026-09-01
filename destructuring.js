// Destructuring

const students ={
    name: 'rahim',
    age: 29,
    address: 'Dhaka'
}

// old

const oldName = students.name;

// new

const {age, name , address} = students

console.log(address);


const students1 ={
    name: 'rahim',
    address: {
        zip: 1212,
        city: 'Dhaka'
    },
}

const {name:stdName,
    address:{city,zip}
}= students1;

console.log(zip);

const arr = ['Red', 'Green', 'Black'];
const [first, second, third] = arr;

console.log(third);
