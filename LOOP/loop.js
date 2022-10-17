console.log('Welcome to loop');
console.log('While Loop')


//WHILE LOOP

let i= 0;
while(i < 10){
    console.log(i);
    i +=2;
}


//ARRAY

let someArray = ['Mike', 'Antal', 'Marc', 'Emir', 'Luoiza', 'Jacky'];

let notfound = true;

while (notfound && someArray.length > 0){
    if (someArray[0] === 'Luoiza'){
        console.log('Found her');
        notfound = false;
    }else{
        someArray.shift();
    }
}



//DO-WHILE 
// let number;
// let counter =0;

// do{
//     number = prompt(`Please enter a number between 0 and 100: counter${counter++}`);
// } while (!(number >= 0 && number < 100));


//EXERCISE 1
//1

const maxValue = 100;

//2

const rnd = Math.floor((Math.random() * maxValue) + 1);
// console.log(rnd);


//3
let isCorrect = false;
let lives = 5;

//4

// let number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`));


// while (!isCorrect && lives > 0) {
//     if (number === rnd) {
//         isCorrect = true;
//         console.log('Hurray, you guessed it right!')
//     } else {
//         lives--;
//         if (lives === 0) {
//             console.log('Game over!');
//             console.log(`you number is: ${rnd}`);
//         } else {
//             if (number > rnd) {
//                 console.log('Your guess is high, go low')
//                 number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`));
//             } else {
//                 console.log('Your guess is low, go high')
//                 number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`));
//             }
//         }
//     }
// }





//FOR-LOOP

for(let i =0; i <10; i++){
    console.log(i);
}


let arr = [];
for (let i =0; i <100; i++){
    arr.push(i);
}
console.log(arr);


//NESTED LOOPS


let arrOfArrays = [];
for (let i = 0; i<3; i++){
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++){
        arrOfArrays[i].push(j);
    }
}
console.log(arrOfArrays)


//LOOPS AND ARRAYS

let names = ['Chantal', 'John', 'Maxime', 'Bobbi', 'Jair' ];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}



//DO-WHILE EXERCISE

//EXERCISE 1
//1

let counter = 0;


//2
let countIncrease;


//3

do{
    (`counter ${counter+=3}`);
    console.log(counter);
}while(!(counter === 100 || counter > 100)){
   countIncrease = counter;
}  
console.log(countIncrease);



//EXERCISE 2

//1

let myWork = [];

//2



