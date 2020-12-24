// 1
// let a = +prompt('type digit');

// if (a == 0) {
//     alert('a = 0');
// }

// else if (a > 0) {
//     alert('a > 0');
// }

// else {
//     alert('a < 0');
// }

// 2
// let age = +prompt('Your age?');

// if (age > 0 && age < 120) {
//     alert('Congrats!!!');
// }else{
//     alert('It`s impossible');
// }

// 3
// let value = +prompt('Type digit');

// if (value < 0) {
//     alert(`module of ${value} is ${Math.abs(value)}`);
// }else if (value >= 0) {
//     alert(`module of ${value} is ${value}`);
// }

// 4
// let hours = +prompt('type hours');
// let minutes = +prompt('type minutes');
// let seconds = +prompt('type seconds');

// if (hours < 0 || hours > 24) {
//     alert('Wrong time! Hours value incorrect!!!');
// } else if (minutes < 0 || minutes >= 60) {
//     alert('Wrong time! Minutes value incorrect!!!');
// } else if (seconds < 0 || seconds >=60) {
//     alert('Wrong time! Seconds value incorrect!!!');
// }else {
//     alert(`Great! Time is ${hours}:${minutes}:${seconds}`);
// }

// 5
// let x = +prompt('x?');
// let y = +prompt('y?');

// if (x > 0 && y > 0) {
//     alert('1');
// } else if (x == 0 && y > 0) {
//     alert('on Y axis between 1 and 2');
// } else if (x > 0 && y == 0) {
//     alert('on X axis between 1 and 4')
// } else if (x < 0 && y > 0) {
//     alert('2')
// } else if(x < 0 && y == 0) {
//     alert('on X axis between 2 and 3');
// } else if (x < 0 && y < 0) {
//     alert('3');
// } else if (x == 0 && y < 0) {
//     alert('on Y axis between 3 and 4')
// } else if (x > 0 && y < 0) {
//     alert('4');
// } else if (x == 0 && y == 0) {
//     alert('on 0');
// } else {
//     alert('Incorrect!!!')
// }