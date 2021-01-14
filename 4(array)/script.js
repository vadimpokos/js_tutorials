// let arr = [];
// let n = +prompt('How much elements you need?');
// let elem = 0;

// for (let i = 1; i <=n; i++) {
//     elem = +prompt(`Write ${i} element of array`);
//     arr.push(elem);
// }
// -----------------------------------------------

// 1
// let min = arr[0];
// let index = 0;

// for(item of arr) {
//     if (item < min) {
//         min = item;
//         console.log(min);
//         index = arr.indexOf(item);
//     } else {
//         continue;
//     }
// }

// alert(`Number of min element is ${index + 1}`);

// let sum = 0;
// let minus = 0;

// for (item of arr) {
//     if (item < 0) {
//         minus = arr.indexOf(item);

//         for (let i = minus; i < arr.length; i++) {
//             sum += Math.abs(arr[i]);
//         }

//     }
// }

// if (sum > 0) {
//     alert(sum);
// } else {
//     alert('No negative elements in array!!!');
// }

// 3
// let elements = 0;
// let a = +prompt('Type a');
// let b = +prompt('Type b');

// for(item of arr) {
//     if (item > a && item < b) {
//         elements++;
//     } else {
//         continue;
//     }
// }

// alert(`${elements} elements of array between ${a} and ${b}`);

// 4
// let ifZero = 0;
// for (item of arr) {
//     if (item === 0) {
//         ifZero++;
//     }
// }

// alert(ifZero);
// ------------------------------------------------

// 1
// let str = prompt('Type some string');
// let arr = str.split('');

// let number = 0;
// let letter = 0;
// let other = 0;

// for(item of arr) {
//     if(item.codePointAt(0) >= 48 && item.codePointAt(0) <= 57) {
//         number++;
//     } else if (item.codePointAt(0) >= 65 && item.codePointAt(0) <= 122) {
//         letter++;
//     } else {
//         other++;
//     }

// }

// alert(`${number} numbers;${letter} letters; ${other} other symbols`);


// 3
// let str = prompt('Type some string');
// let arr = str.split('');
// let arr1 = [];

// for (item of arr) {
//     if ((item.codePointAt(0) >= 65 && item.codePointAt(0) <= 90) || (item.codePointAt(0) >= 1025 && item.codePointAt(0) <= 1071)) {
//         item = item.toLowerCase(0);
//     } else if ((item.codePointAt(0) >= 97 && item.codePointAt(0) <= 122) || (item.codePointAt(0) >= 1072 && item.codePointAt(0) <= 1103)) {
//         item = item.toUpperCase(0);
//     } else if ((item.codePointAt(0) >= 48 && item.codePointAt(0) <= 57)) {
//         item = '_';
//     }
//     arr1.push(item);
// }

// str = arr1.join('');

// alert(str);

// 4
// let str = prompt('Type some CSS');
// let arr = str.split('');
// let arr1 = [];
// let up = '';

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '-') {
//         up = arr[i + 1].toUpperCase();
//         arr1.push(up);
//         i++;
//     } else {
//         arr1.push(arr[i]);
//     }
// }

// str = arr1.join('');
// alert(str);

// 5
// let str = prompt('Type some name');
// let arr = str.split('');
// let arr1 = [];
// let up = '';

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === ' ') {
//         up = arr[i+1].toUpperCase();
//         arr1.push(up);
//     } else if (i === 0) {
//         up = arr[i].toUpperCase();
//         arr1.push(up);
//     }
// }
// str = arr1.join('');
// alert(str);

// 6
// let arr = [];
// let str = '';
// do {
//     let question = confirm('?');

//     if (!question) {
//         break;
//     } else {
//     str = prompt('Type string');
//     arr.push(str);
//     }
// } while(true);

// str = arr.join('');
// alert(str);

// 7
// let expression = prompt('Type some expression');
// let arr = expression.split('');
// let separator = '';

// for (item of arr) {
//     switch(item) {
//         case '+':
//         case '-':
//         case '*':
//         case '/':
//            separator = item;
//            break;
//         default:
//             continue; 
//     }
// }

// let digits = expression.split(separator);
// let result = 0;
// for (let i = 0; i < digits.length; i++) {
//     switch(separator) {
//         case '+':
//             result += +digits[i];
//             break;
//         case '-':
//             if (digits[0]) {
//                 digits[0] = -digits[0];
//             }
//             result -= digits[i];
//             break;
//         case '*':
//             if (result === 0) {
//                 result = 1;
//             }
//             result *= digits[i];
//             break;
//         default:
//             result = 0;  

//     }
// }

// if (separator === '/') {
//     for (let i = 1; i < digits.length; i++) {
//         if (result === 0) {
//             result = digits[0];
//         }
//         result /= digits[i];
//     }
// }

// alert(result);

// 8
// let url = prompt('Type some URL');
// let arr = url.split('/');
// let arr1 = [];

// for(item of arr) {
//     if (item.slice(0, 5) === 'https') {
//         item = `protocol: ${item.slice(0, 5)}`
//     } else if (item.slice(0, 4) === 'http') {
//         item = `protocol: ${item.slice(0, 4)}`
//     } else if (item.indexOf('.') > 0) {
//         item = `domen: ${item}`
//     } else if (item === '') {
//         continue;
//     }

//     arr1.push(item);
// }

// alert(arr1);

// 9
let str = prompt('type string');
let separator = prompt('type separator');

let arr = str.split(separator);
alert(arr);
