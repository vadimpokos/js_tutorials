// 1
// let age = +prompt('Your age?');

// // function checkAge (age) {
// //     return age > 18 || confirm('Родители разрешили?');
// // }

// function checkAge(age) {
//     return age > 18 ? true : confirm('Parents?') ? true : alert('Go away!');
// }

// checkAge(age);

// 2
// let a = +prompt('a?');
// let b = +prompt('b?');

// function min(a, b) {
//     return a < b ? a : b;
// }

// alert(min(a, b));

// 3
// let x = +prompt('x?');
// let n = +prompt('n?');
// let result = 1;
// function pow(x, n) {
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// alert(pow(x, n));

// 4
// let arrNum = [1, 2, 3];
// let arrLet = ['a', 'b', 'c'];

// let arr = [];
// function arrConcat(arrNum, arrLet) {
//     return arr.concat(arrLet, arrNum);
// }

// alert(arrConcat(arrLet, arrNum));

// 5
// let arrLet = ['a', 'b', 'c'];

// function arrAdd(arrLet) {
//     let elemToPush = [];
//     do {
//         let elem = +prompt('Type elem');
//         elemToPush.push(elem);
//         question = confirm('Want add another elem?');
//     } while (question === true)
//     return arrLet.concat(elemToPush);
// }

// alert(arrAdd(arrLet));

// 5
// let arrNum = [1, 2, 3];

// function arrRev(arrNum) {
//     return arrNum.reverse();
// }

// alert(arrRev(arrNum));

// -----------------------
// let arr = ['js', 'css', 'jq'];

// function firstElem(arr) {
//     return arr[0];
// }

// alert(firstElem(arr));

// 
// let arr = ['js', 'css', 'jq'];

// function lastElem(arr) {
//     return arr[arr.length - 1];
// }

// alert(lastElem(arr));

// ---------------
// let arr = [3, 4, 1, 2, 7];

// alert(arr.sort((a) => {
//     if (a % 2 === 0) {
//         return -1;
//     } else {
//         return 1;
//     }
// }));

// -----------------------
// let value = +prompt('Type some number');

// let square = value => value**2;
// alert(square(value));

// -----------------------------
// let a = +prompt('Type a');
// let b = +prompt('Type b');

// let sum = (a, b) => a + b;
// alert(sum(a, b));

// --------------------------------
// let a = +prompt('a');
// let b = +prompt('b');
// let c = +prompt('c');

// let expression = (a, b, c) => (a-b)/c;
// alert(expression(a, b, c));

// -----------------------------------
// let arr = [123, 34324, 76, 77, 3424];

// function isFive(arr) {

//     if(arr.find(item => item === 5)) {
//         alert('Ok!');
//     } else {
//         alert('No!!!');
//     }

// } 

// isFive(arr);

// ------------------------------------

// let value = + prompt('Type some number');
// let arr = [];
// let arr1 = [];
// for(i = 1; i <= value; i++) {
//     arr.push(i);
// }

// arr.forEach(item => {
//     if (value % item === 0 ) {
//         arr1.push(item);
//     }
// })
 
// if(arr1.length === 2) {
//     alert('True');
// } else {
//     alert('False');
// }

// -----------------------------------
// let arr = [1, 1, 324, 3, 65, 65, 433];
// let result = 0;
// arr.forEach((item, index, arr) => {
//     for(let i = index + 1; i < arr.length; i++){
//         if(item === arr[i]) {
//             result++;
//             console.log(`${item}, ${arr[i]}`);
//         }
//     }
// });

// if(result > 0) {
//     alert('yes');
// } else {
//     alert('no');
// }

// -------------------------------------
// let a = +prompt('Type a');
// let b = +prompt('Type b');

// let compare = (a === b) ?
//     () => alert(true) :
//     () => alert(false);

// compare(a, b);

// let a = +prompt('Type a');
// let b = +prompt('Type b');

// let ifSum = (a, b) => {
//     (a + b > 10) ? alert(true) : alert(false);
// }

// ifSum(a, b);

// -------------------------------------------
// let value = +prompt('Type some number');

// let isPositive = value => value >= 0 ? alert(true) : alert(false);
// isPositive(value);

// ********************************************
// [1, 2, 3, 4 ,5 ,6 ,7,  8, 9].forEach((el) => {
    
//  const row = Array.from({ length: el}, () => el);  
//  console.log(row.join(''))
// })

// *********************************************
// let str = '';
// let arr = [];
// let len = +prompt('Type length of an array');

// for(let i = 0; i < len; i++) {
//     str += 'x';
//     arr.push(str);
// }

// console.log(arr);

// *********************************************
let len = +prompt('Type length of an array');
let str = '';
let arr = [];

for(let j = 1; j <= len; j++) {
    str = '';
    arr.push(strFill(j));
}

function strFill(value) {
    for(let i = 0; i < value; i++) {
        str += value;   
    }
    console.log(str);
    return str;
    
}

alert(arr.join('\n'));

// *********************************************
// let items = +prompt('How long is your array?');
// let value = prompt('elements?');
// arr = [];

// function arrayFill(a, b) {
//     for(let i = 0; i < items; i++) {
//         arr.push(value);
//     }
//     return(arr);
// }

// console.log(arrayFill(items, value));

// *******************************************
// let arr = [1, 5, 2, 8, 34, 55];
// let result = 0;

// for(item of arr) {
//     if(result < 10) {
//         result += item;
//     } else {
//         console.log(arr.indexOf(item));
//         break;
//     }
// }

// *******************************************
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr.sort((a, b) => arr.indexOf(b) - arr.indexOf(a)));

// *******************************************
// let arr = [1, 5, -65, 6, -9];
// let arr1 = [];
// function isPositive(a) {
//     if(a >= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// for(item of arr) {
//     if (isPositive(item) === true) {
//         arr1.push(item);
//     } else {
//         continue;
//     }
// }

// console.log(arr1);

// ********************************************
// let arr = [1, 5, 10, -56456, 34, 6, 34, 8, 9];
// let arr1 = [];
// function isNumberInRange(a) {
//     return (a > 0 && a < 10) ? true : false;
// }

// for(item of arr) {
//     isNumberInRange(item) ? arr1.push(item) : false;
// }

// console.log(arr1);

// **********************************************
// let number = prompt('type some number');

// function getDigitsSum (a) {
//     let arr = a.split('');
//     let result = 0;
//     for(item of arr) {
//         result += +item;
//     }
//     return result;
// }

// console.log(getDigitsSum(number));

// ***********************************************
// let str = '';
// let years = [];
// for(let i = 1; i <= 2021; i++){
//     str = String(i);
//     if(getDigitsSum(str) === 13) {
//         years.push(i);
//     } else {
//         continue;
//     }
// }

// function getDigitsSum (a) {
//     let arr = a.split('');
//     let result = 0;
//     for(item of arr) {
//         result += +item;
//     }
//     return result;
// }

// console.log(years);

// *********************************************
// let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// let value = +prompt('Type number of day');

// let day = days.find((item, index) => index === value - 1);

// console.log(day);




