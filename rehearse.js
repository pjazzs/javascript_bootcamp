console.log('Welcome to my first JavaScript code')

const myArray = ['Lexus', 'Range Rover', 'G-wagon', 'Spider', 'Camry', 'Hondah', 'Toyota']
console.log(myArray);
console.log(myArray.length)
console.log(typeof myArray)

myArray.sort()
console.log(myArray);

myArray.push('Venza');
console.log(myArray)

myArray.unshift('Roice Royce')
console.log(myArray)

myArray.splice(1,1)
console.log(myArray);
myArray.splice(2, 0, 'Camry', 'Line-Array')
console.log(myArray)

myArray.pop()
console.log(myArray)

myArray[7] = 'Corola'
console.log(myArray)

myArray.splice(7, 0, 'Spider');
console.log(myArray);

myArray.unshift('Benz', 'Highlanda')
console.log(myArray);

myArray.sort()
console.log(myArray);

newArray = ['Buy', 'Purchase', 'Sharp']
console.log(newArray);

const concat1 = myArray.concat(newArray)
console.log(concat1);

const concat2 = concat1.concat(newArray)
console.log(concat2);

console.log(concat2.length)

const ind = concat2.indexOf('Spider')
console.log(ind)

concat2.push('I did it!')
console.log(concat2)


const twoDimension = [
    [['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D']],
    [['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D']],
    [['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D']],
    [['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D']],
    [['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D']],
    [['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D']],
    [['A', 'Q', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D']]
];

console.log(twoDimension);

const ink = twoDimension.length
console.log(ink);

const targetQ = twoDimension[6][0][1];
console.log(targetQ);


let bae = 'Sarima weds ';
let boo = 'Progress';

var wed = bae + boo;
console.log(wed);
console.log('Prorima ')

const weds = `Hurray!!! ${bae} ${boo}`
console.log(weds);

const num1 = 9;
const num2 = 13;
if(num1 < num2){
    console.log('num1 is greatest')
}; 


//OBJECT

const myFriends ={
    Kakuu: 'my Gee ',
    Divine: 'My Manny',
    Hezekiah: 'My guy',
    Renner: 'My paddy man',
    Temple: 'My suicide',
    Karlson: 'My cool guy'
}

console.log(myFriends);

let newFriend ='Tonye';
myFriends[newFriend] = 'My real gee';
console.log(myFriends)


newFriend = 'Whitefield';
myFriends[newFriend] = 'Odogwu';
console.log(myFriends);


let behave = 'Cool?';
myFriends[behave] = 'Yeah, he\'s well behaved';
console.log(myFriends)


const know = myFriends['Cool?'];
console.log(`Is Kakku well bahaved?: ${know}`);


let kakuu = myFriends.Kakuu;
let temple= myFriends.Temple;
console.log(`Progress say Kakuu: ${kakuu}`);
console.log(`Progress says to Temple: ${temple}`);



const myRsuBio = {
    MyInfo: {
        firstName: 'Progress',
        LastName: 'Ugorji',
        Sex: 'M',
        Age: '25',
        MatNo: 'DE: 2019/4509',
        Cousre: 'Computer Science',
        Bio: {
            DOB: '15/09/1997',
            SateOfOrigin: 'Rivers State',
            LGA: 'Emohua',
            HomeTown: 'Ibaa',
            PlaceOfBirth: 'Ibaa',
            MaritalStatus: 'Single',
            Religion: 'Christianity',
            height: '6.4',
            weight: '99'

        }
    },

    HealthStatus: {
        Genotype: 'AA',
        BloodGroup: 'O+',
        HIV: 'Negative',


    },

    Year1: {
        firstSem: ['MTH111', 'PHY104', 'GST147', 'CHM102', 'CMS100'],
        secondSem: ['MTH112', 'MTH102', 'PHY106', 'CMS123', 'CMS134']
    },

    Year2: {
        firstSem: ['MTH215', 'MTH202', 'MTH223', 'CMS215', 'CMS205', 'EDC212'],
        secondSem: ['CMS234', 'CMS233', 'CMS222', 'CMS243', 'CMS221']
    },

    Year3: {
        firstSem: ['CMS331', 'CMS313', 'CMS322', 'CMS343', 'CMS321', 'CMS312'],
        secondSem: ['IT']
    },

    FinalYear: [
        {
            firstSem: ['CMS434', 'CMS404', 'CMS412', 'CMS441'],
            secondSem: ['CMS444', 'CMS405', 'PROJECT']
        }
     
    ]
};

console.log(myRsuBio);

const year3 = myRsuBio.Year3['secondSem'][0];

console.log (year3);

const getYear2Course = myRsuBio.Year2.firstSem[2];
console.log(getYear2Course);

let mat = myRsuBio.MyInfo.MatNo;
console.log(mat);

let gen = myRsuBio.HealthStatus.Genotype;
console.log(gen);

let gstm = myRsuBio.Year1.firstSem[2];
console.log(gstm);

let single = myRsuBio.MyInfo.Bio.MaritalStatus;
console.log(single);

let final = myRsuBio.FinalYear[0].secondSem[2];
console.log(final);

console.log(`My final year ${final} is coming soon!!!`);






//SWITCH STATEMENT

// let currentDay = window.prompt('Enter a day of the week');

// let theDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// currentDay = theDay;

// switch(currentDay){
//     case 'Monday':
//         console.log('I hate Mondays');
//         break;
//     case 'Tuesday':
//         console.log('No class');
//         break;
//     case 'Wednesday':
//         console.log('Class');
//         break;
//     case 'Thursday':
//         console.log('Faji small');
//         break;
//     case 'Friday':
//         console.log('TGIF');
//         break;
//     case 'Satuday':
//         console.log('cruise wotowoto');
//         break;
//     case 'Sunday':
//         console.log('See u all after service');
//         break;

//         default:
//             console.log('Invalid Day selected')
// }



//IF-STATEMENT



let myFavfood = ['Garri', 'Rice', 'Yam', 'Tea', 'Indomie', 'Fried Rice', 'Chicken', 'Goat Pepper soup', 'Fried yam or plantain'];
// console.log (myFavfood.length);



// let myFav =window.prompt('What\'s your fav food?');
let message;



if(myFavfood[0] === 'Garri'){
    console.log('Na odogwu be that. E dey plenty')
} else if(myFavfood[1] === 'Rice'){
        console.log('Let\'s manage it')
}else if (myFavfood[2] === 'Yam'){
   console.log('It\'s fine')
}else{
    console.log('No joy!!!')
}

// console.log(message);



//GAME CODE

const maxValue = 100;

const rnd = Math.floor((Math.random() * maxValue + 5));
console.log(rnd);


let isCorrect = false;
let lives = 5;


let number = parseInt(window.prompt(`Enter a guessed number: Your live is: ${lives}`));

while (!isCorrect && lives > 0) {
    if (number === rnd) {
        isCorrect = true;
        console.log('Hurray, you guessed it right!')
    } else {
        lives--;
        if (lives === 0) {
            console.log(`Game over!!! Your number is: ${rnd}`);
            console.log('play again!')
        } else {
            if (number > rnd) {
                console.log('Your guess is high, go low')
                number = parseInt(window.prompt(`Enter the guessed number: Your live is-${lives}`));
            } else {
                console.log('Your guess is low, go high')
                number = parseInt(window.prompt(`Enter the guessed number: Your live is-${lives}`));
            }
        }
    }
}



//function and array

let myCost = ['2,500', '4000', '11,000', '50,000', '16,500'];
let theMapped = myCost.map(amper => `$${amper} only`);
console.log(theMapped);


let ar = ['manny','riri', 4, false, true, 'manche', 'girlie', 'gee', 'buddy']
function check(e, i){
   return typeof e === 'string';
}

//FILTER
let getIn = ar.filter(check)
console.log(getIn);

//mapping

let getout = ar.map(y => `my ${y}`);
console.log(getout);


//ForEach
let myCosts = ['2,500', '4000', '11,000', '50,000', '16,500'];

function chek(e, i){
    console.log(`the price is ${e} on number ${i + 1}`)
}
let forr = myCosts.forEach(chek);
console.log(forr);


