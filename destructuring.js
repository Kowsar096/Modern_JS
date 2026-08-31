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

