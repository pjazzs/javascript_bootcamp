console.log('welcome to built-in mtd')

//call-back function

// let arr = ['grapefruit', '4', 'hello', 5.6, true];

// function printStuff(element, index){
//     console.log(`printing stuff: ${element} on array position: ${index}`);
// }
// arr.forEach(printStuff)

// //second way

// arr.forEach((element, index) => )



// //FILTER
// let arr = ['squirrel', 5, 'Tjed', new Date(), true];
// function checkString (element, index){
//     return typeof element === 'string';
// }

// //one way
// let filterArr2 = arr.filter(checkString)
// console.log(filterArr2)

// //another way
// let filterArr = arr.filter((element, index) => typeof element === 'string');
// console.log(filterArr)


//CHECKING


//REPLACING AN ELEMENT WITHIN AN ARRAY

// arr = ['grapefruit', 4, 'hello', 5.6, true];
// //arr.copyWithin(1, 3, 4);

// arr.copyWithin(0, 2, 4);
// console.log(arr)


//MAPPING

let arr = [1000, 2000, 3000, 4000];
let mapped_arr = arr.map(x => `#${x}`)
console.log(mapped_arr)



