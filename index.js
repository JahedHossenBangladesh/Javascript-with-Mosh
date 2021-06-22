console.log("Hello world");
// var let const 
let person = {
    name: 'Mosh',
    age:30
}
// dot notation
person.name = 'John';
// bracket Notation
person['name'] ='marry'

console.log(person.name)

// Array notation
let selectedColors = ['red','green'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

// function 

function greet(name,lastName='no Last name'){
    console.log('Hello ' + name + ' ' + lastName)
}

greet('John','abraham');
greet('Marry')
// performing Task

function squire(number){
    return number * number
}

const result = squire(3);
console.log(result);
console.log(squire(4));