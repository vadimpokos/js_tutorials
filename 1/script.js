// 1
// let second = Number(prompt('type some nunber'));
// alert(second ** 2);

// 2
// let firstNumber = Number(prompt('type first number'));
// let secondNumber = Number(prompt('type second number'));
// let average = (firstNumber + secondNumber) / 2;
// alert(average);

// 3
// let squareLength = Number(prompt('type side of square length'));
// let squareArea = squareLength ** 2;
// alert(`Area of your square is ${squareArea}`);

// 4
// let km = Number(prompt('type kilometers'));
// let mile = km * 0.621371;
// alert(`${km} km is ${mile} miles`);

// 5
// let a = Number(prompt('first number'));
// let b = Number(prompt('second number'));
// let sum = a + b;
// let minus = a - b;
// let multiply = a * b;
// let division = a / b;
// alert(`sum: ${sum}; minus: ${minus}; multiply: ${multiply}; division: ${division}`);

// 6
// let a = Number(prompt('type a'));
// let b = Number(prompt('type b'));
// let x = -(b / a);
// alert(`a * x + b = 0; x = ${x}`);

//7
// let hours = Number(prompt('type hours'));
// let minutes = Number(prompt('type minutes'));
// let hoursLeft = 24 - hours;
// let minutesLeft = 60 - minutes;
// alert(`${hoursLeft} hours and ${minutesLeft} minutes left for tomorrow`);

// 8
// let value = +prompt('type 3 digit number');
// alert(`Second digit of ${value} is ${Math.trunc((value % 100)/10)}`);

//9
// let value = +prompt('type 5 digit number')
// let lastDigit = value % 10;
// let fourDigitNumber = Math.trunc(value / 10);
// alert(String(lastDigit) + String(fourDigitNumber));

//10
// let salesSum = +prompt('type sum of sales $');
// alert(`Your salary if  ${250 + salesSum * 0.1}$`);




// --------------------------------------------------

// 1
// let userName = prompt('What is your name?');
// alert(`Hello, ${userName}`);

// 2
// let dateOfBirth = +prompt('When were you born?');
// const yearNow = 2020;
// alert(`Your age is ${yearNow - dateOfBirth}`);

// 3
// let squareLength = +prompt('type side length of a square');
// alert(`square perimeter is ${squareLength * 4}`);

// 4
// let radius = +prompt('type circle radius');
// alert(`circle area is ${Math.PI * (radius) ** 2}`);

// 5
// let distance = +prompt('type distance between cities');
// let time = +prompt('How many time you have?');
// alert(`You should move at a speed of ${distance / time} km/h`);

// 6
// let dollars = +prompt('type $');
// const course = 0.82;
// alert(`${dollars}$ is ${dollars * course} euro`);

// 7
// let flash = +prompt('type flash drive size in GB');
// flash *= 1024;
// alert(`You can upload ${Math.trunc(flash / 820)} files`);

// 8
// let cash = +prompt('How much $ you have?');
// let chocolatePrice = +prompt('Chocolate price?');
// let canBuy = Math.trunc(cash / chocolatePrice);
// let moneyLeft = cash % (canBuy * chocolatePrice);
// alert(`You can buy ${canBuy} chocolates\n ${moneyLeft} $ left`);

// 9
// let value = +prompt(`type 3 digit number`);
// let firstDigit = Math.trunc(value / 100);
// let secondDigit = Math.trunc((value % 100) / 10);
// let thirdDigit = value % 10;
// let valueInverted = String(thirdDigit) + String(secondDigit) + String(firstDigit);
// alert(valueInverted);

const a = 6 !== '6';
console.log(a);
