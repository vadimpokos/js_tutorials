function getSum() {
    let num1 = +document.querySelector('.firstNumber').value;
    let num2 = +document.querySelector('.secondNumber').value;
    let sum = num1 + num2;
    document.querySelector('.sumResult').innerHTML = `result: ${sum}`;  
    
}