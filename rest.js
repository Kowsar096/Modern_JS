// rest
// function

function add(...numbers){
    let total = 0;
    for(const num of numbers){
        total += num;
    }
    return total;

}

console.log('rest function: ',add(1,2,3,4,5,6,7,8,100));


const obj ={
    name: 'Tonmoy',
    age: 26,
    occupation: 'Developer'
};

const {name, ...remaining} = obj; // ...remaining contain any object without mention the object first

console.log(remaining);

// array

const arr = [1,2,3,100,150,200];

const arr2=[, , , ...rest]= arr;
console.log(rest);
