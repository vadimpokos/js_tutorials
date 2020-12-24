// 1
// const age = +prompt('How old are you?');

// if (age >= 0 && age <= 12) {
//     alert('You are child');
// } else if (age > 12 && age < 18) {
//     alert('You are teenager');
// } else if (age >= 18 && age < 60) {
//     alert('You are adult');
// } else if (age >= 60 && age <= 120) {
//     alert('You are old');
// } else {
//     alert('You are unreal)')
// }

// 2
// const value = +prompt('Type some digit');
// switch (value) {
//     case 0:
//         alert(')');
//         break;
//     case 1:
//         alert('!');
//         break;
//     case 2:
//         alert('@');
//         break;
//     case 3:
//         alert('#');
//         break;
//     case 4:
//         alert('$');
//         break;
//     case 5:
//         alert('%');
//         break;
//     case 6:
//         alert('^');
//         break;
//     case 7:
//         alert('&');
//         break;
//     case 8:
//         alert('*');
//         break;
//     case 9:
//         alert('(');
//         break;
//     default:
//         alert('Type error');
// }

// 3
// const value = +prompt('Type 3 digit number');



// if (value >= 100 && value <=999) {

//     let firstDigit = Math.trunc(value / 100);
//     let secondDigit = Math.trunc((value % 100) / 10);
//     let thirdDigit = value % 10;

//     if (firstDigit == secondDigit){
//         alert(`In ${value} first and second digits are the same (${firstDigit})`);
//     } else if (firstDigit == thirdDigit) {
//         alert(`In ${value} first and third digits are the same (${firstDigit})`);
//     } else if (secondDigit == thirdDigit) {
//         alert(`In ${value} second and third digits are the same (${secondDigit})`);
//     } else if (firstDigit == secondDigit == thirdDigit) {
//         alert('All digits the same');
//     } else {
//        alert (`There are no same digits in ${value}`);
//     }
// } else {
//     alert('It is not 3 digit number');
// }

// 4
// const value = +prompt('type year');

// if ((value % 400 == 0) || (value % 4 == 0 && value % 100 !== 0)) {
//     alert('leap year');
// } else if (value < 0) {
//     alert('unreal!');
// } else {
//     alert('not leap year');
// }

// 5
// const value = +prompt('Type 5 digit number');

// if (value >=10000 && value <=99999) {

//     let firstDigit = Math.trunc(value / 10000);
//     let secondDigit = Math.trunc((value % 10000) / 1000);
//     let thirdDigit = Math.trunc((value % 1000) / 100);
//     let fourthDigit = Math.trunc((value % 100) / 10);
//     let fifthDigit = value % 10;
    
//     if (firstDigit === secondDigit && firstDigit === thirdDigit && firstDigit === fourthDigit && firstDigit === fifthDigit){
//         alert('Polindrom!!!!');
//     } else {
//         alert('not polindrom(');
//     }

// } else {
//     alert('not 5 digit number');
// }

// 6
// const cash = +prompt('Type sum in USD');
// let currency = prompt('Type currency you want to excange');

// switch (currency){
//     case 'EUR':
//         alert(`${cash}$ is ${cash * 0.8} EUR`);
//         break;
//     case 'UAN':
//         alert(`${cash}$ is ${cash * 0.5} UAN`);
//         break;
//     case 'AZN':
//         alert(`${cash}$ is ${cash * 1.5} AZN`);
//         break;
//     default:
//         alert('Invalid currency!!!');
// }

// 7
// const buy = +prompt('type sum');
// if (buy >= 200 && buy < 300) {
//     alert(`Sale 3% you need to pay ${buy * 0.97}$`);
// } else if (buy >= 300 && buy < 500) {
//     alert(`Sale 5% you need to pay ${buy * 0.95}$`);
// } else if (buy >= 500) {
//     alert(`Sale 7% you need to pay ${buy * 0.93}`);
// } else {
//     alert('You have no sale :(')
// }

// 8
// const circleLength = +prompt('Type circle length');
// const squarePerimeter = +prompt('Type perimeter of a square');

// const diameter = circleLength / Math.PI;
// const side = squarePerimeter / 4;

// if (diameter <= side) {
//     alert('You can place your circle into square');
// } else {
//     alert('Can`t :(');
// }

// 9
// const firstQuestion = +prompt('2+2=?\n1)3\n2)4\n3)228');
// const secondQuestion = +prompt('2+2*2=?\n1)6\n2)8\n3)16');
// const thirdQuestion = +prompt('3+3=?\n1)7\n2)6\n3)10');
// let points = 0;

// switch (firstQuestion) {
//     case 4:
//         points += 2;
//         break;
//     case 3:
//     case 228:
//         points = points;
//         break;
//     default:
//         alert('Check your answer!!!');
// }

// switch (secondQuestion) {
//     case 6:
//         points += 2;
//         break;
//     case 8:
//     case 16:
//         points = points;
//         break;
//     default:
//          alert('Check your answer!!!');
// }

// switch (thirdQuestion) {
//     case 6:
//         points += 2;
//         break;
//     case 7:
//     case 10:
//         points = points;
//         break;
//     default:
//         alert('Check your answer!!!');
// }

// alert(`Congrats! You got ${points} points`);

// 10
let year = +prompt('type year');
let month = +prompt('type month');
let day = +prompt('type day');

if ((month >= 1 && month <= 12) && (day >= 1 && day <= 31)) {  // month and day validation

    if ((month == 2 && day > 29) || (month % 2 != 0 && day > 30)) { //February and 30/31 check
        alert('unreal');
    } else {
        
        if (!((year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0)) && day > 28) { //leap year check
            alert('unreal!');
        } else {
            day += 1;
            if ((year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0) && day > 29) {
                month += 1;
                day = 1;
            } else if (month == 2 && day > 28) {
                month += 1;
                day = 1;
            } else if (month % 2 != 0 && day > 30) {
                month += 1;
                day = 1;
            } else if (day > 31) {
                month += 1;
                day = 1;
            } 
            
            if (month > 12) {
                month = 12;
                year += 1;
            }

            alert(`Tomorrow is...${year}:${month}:${day}`);
        }
    }

} else {
    alert('unreal!!!');
}