console.log('Welcome to function')

function sayHello(){
    let you = prompt('What\'s your name? ');
    console.log('Hello', you + '!, ' + 'what\'s popping?');
}

// sayHello();


function addTwoNumbers(x, y){
    console.log(x + y);
}


addTwoNumbers(2, 1);
addTwoNumbers(5, 7)


//ARROW FUNCTIONS
let addTwoNumbers2 = (x, y, z) => console.log(x + y + z);

addTwoNumbers2(4, 5, 7);


const arrr = ['squirrel', 'alpaca', 'buddy'];
arrr.forEach((item, index) => console.log(`${index +1}. ${item}`));



const arrr1 = ['squirrel', 'alpaca', 'buddy'];
arrr.forEach((item, index) => {
    let newName = `Mr. ${item}`
    console.log(`${index +1}. ${newName}`)
});


//SPREAD OPERATOR (. . .)

let spreads = ['So', 'much', 'fun'];
let message = ['JacaScript', 'is', ...spreads, 'and', 'very', 'powerful'];

console.log(message);


//REST PARAMETER

function addArr(x, ...y ){
    console.log(x + y)
}

addArr('hi ', 'there ', ' How are you?')

addArr(3, ...[4, 6])



//Return

function addThreeNumbers(x, y, z){
    return x + y + z;
}

//arrow
    (x, y, z) => x + y + z;

const myAns = addThreeNumbers(5, 4, 6);
console.log(myAns)



//VARIABLE SCOPE IN FUNCTIONS





 



