// foreach, map

// foreach

let fruits = ['Apple', 'Banana', 'Mango', 'Jackfruit',];

console.log('----ForEach----')

let newFruits = fruits.forEach((f, idx) => {
    console.log(`${idx + 1} -> ${f}`);
    // return(`${idx + 1} -> ${f}`);  // foreach cant return


});


// map 
console.log('----Map Function----')

let newFruits2 = fruits.map((f, idx) => {
    // console.log(`${idx + 1} -> ${f}`);
    return (`${idx + 1} -> ${f}`);  // map can return


});

console.log(newFruits2)

// filter (get all the item that meet the condition)

console.log('-----Filter Array----')
let customFilter = fruits.filter((f) => f.length > 5);
console.log(customFilter);

// find (get first item that meet the condition)

console.log('-----Find Array----')
let customFind = fruits.find((f) => f.length > 5);
console.log(customFind);

// Include array (true or false ans)
console.log('-----Include Array----')
let customInclude = fruits.includes('Mango');
console.log(customInclude);

let students = [
    { name: 'Rahim', marks: 65 },
    { name: 'Karim', marks: 75 },
    { name: 'Jamal', marks: 85 },
];
console.log("----Some function ----")
let studentCheck = students.some((s) => s.marks > 80);
console.log(studentCheck)

console.log("----Every function ----")
let studentCheckEvery = students.every((s) => s.marks > 80);
console.log(studentCheckEvery)

