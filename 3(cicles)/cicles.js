// 1
// let a = +prompt('type start or a range');
// let b = +prompt('type end of a range');
// let result = 0;

// for(i = a; i <= b; i++) {
//     result += i;
// }
// alert(result);

// 2
// let a = +prompt('a?');
// let b = +prompt('b?');
// let i = 0;
// let nod = 0;

// if (a > b) {
//     i = b;
// } else if (b > a) {
//     i = a;
// }

// while (i > 0) {
//     if (a / i == Math.trunc(a / i) && b / i == Math.trunc(b / i)) {
//         nod = i;
//         break;
//     }else {
//         i--;
//     }
// }
// alert(nod);

// 3
// let value = +prompt('type number');
// let result = '';


// for (let i = 1; i < value; i++) {
//     if (value / i == Math.trunc(value / i)) {
//         result += i + ',';
//     } else {
//         continue;
//     }
// }
// alert(result);

// 4
// let value = +prompt('type value');
// let result = 0;

// for (let i = 1; i <= value; i = +(i + '0')) {   
//     if (value >= i) {
//         result += 1;
//     } else {
//         continue;
//     }
// }
// alert(result);

// 5
// let numbers = prompt('Type 10 numbers with ,');
// let arr = numbers.split(',');
// let positive = 0;
// let negative = 0;
// let zero = 0;

// for (let item of arr){
//     if (item > 0) {
//         positive += 1;
//     } else if (item < 0) {
//         negative += 1;
//     } else if (item == 0) {
//         zero += 1;
//     } else {
//         continue;
//     }
// }

// alert(`You tipe:\n${positive} positive numbers;\n${negative} negative numbers;\n${zero} zero`);

// 6
// do {
//     const a = +prompt('Type first number');
//     const b = +prompt('Type second number');
//     let action = prompt('What you need to do?');
//     let result = 0;

//     switch (action) {
//         case '+':
//             result = a + b;
//             break;
//         case '-':
//             result = a - b;
//             break;
//         case '*':
//             result = a * b;
//             break;
//         case '/':
//             result = a / b;
//             break;
//         default:
//             result = 0;
//     }
//     alert(result);
//     question = confirm('Do you want to do another action?');

// } while(question == true);

// 7
// let number = prompt('type some number');
// let arr = number.split('');
// let s = +prompt('How much digits you want to shift?');
// let bufer = 0;

// for (let i = 0; i < arr[s]; i++) {
//     bufer = String(arr.shift())
//     arr.push(bufer);
// }
// number = arr.join('');
// alert(number);

// 8
// const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// for (item of week) {
//    if (confirm(`Today is ${item}. Show next day?`) == true) {
//        continue;
//    } else {
//        break;
//    }
// }

// 9
// let table = '';

// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         table = table + `${i}*${j} = ${i*j}\n`;
//     }
// }
// console.log(table);

// 10
let value = confirm('guess the number from 0 to 100');
let n = 50;
let answer = '';
let separator = n;
let a = true;


if (value == true) {
    do {
        answer = prompt(`Your number >${n}, <${n} or =${n}?`);
        switch(answer) {
            case '>':
                separator /= 2;
                n = Math.round(n + separator);
                break;
            case '<':
                separator /= 2;
                n = Math.round(n - separator);
                break;
            case '=':
                a = false;
                alert('Done!');
                break;
            default:
                alert('Smth wrong');
                a = false;
        }
        
    } while (a == true);
} else {
    alert('Ok, Bye!');
}