
const INPUT = {type: 'input', properties: {type: 'text', className: 'inputField', readOnly: 'readonly'}};
const BUTTONS_CONTAINER = {type: 'div', properties: {className: 'buttons'}};

const pageArr = [];
pageArr.push(INPUT, BUTTONS_CONTAINER);




function fillValueArr () {
    const valueArr = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '=', '/'];
    let arrObj = valueArr.map(item => {
        const basicObj = {type: 'input', properties: {type: 'button', value: ''}};
        basicObj.properties.value = item;
        if(basicObj.properties.value === '=') {
            basicObj.properties.className = 'equals';
        }
        return basicObj;
    })
    return arrObj;
}

function operators(operator, firstValue, secondValue) {
    switch(operator) {
        case '+':
            document.querySelector('.inputField').value = +firstValue + +secondValue;
            break;
        case '-':
            document.querySelector('.inputField').value = +firstValue - +secondValue;
            break;
        case '*':
            document.querySelector('.inputField').value = +firstValue * +secondValue;
            break;
        case '/':
            document.querySelector('.inputField').value = +firstValue / +secondValue;
            break;
        default:
            true;
    }
}
let caclCounter = 0;
function calculate(expressionStr) {
    let elems = expressionStr.split(' ');
    console.log(elems);

    function twoOperators(arr) {
        let counter = 0;
        arr.forEach(item => {
            if(isNaN(item) === true) {
                counter += 1
            }
        })
        return counter;
    }

    
    if(elems[elems.length - 1] === '=') {
        operators(elems[1], elems[0], elems[2]);
    } else if(twoOperators(elems) > 1) {
        operators(elems[1], elems[0], elems[2]);
        document.querySelector('.inputField').value += ` ${elems[3]} `;
    }
    
}

function equalsCheck(expressionStr) {
    let arrElem = expressionStr.split(' ');
    if (arrElem.length < 3) {
        return true;
    } else {
        return false;
    }
}



function createElem(configArr, isButton) {
    let elems = configArr.map(item => {
        let element = document.createElement(item.type);
        Object.entries(item.properties || {}).forEach( ([key, value]) => {
            element[key] = value;
        });
        if(isButton) {
        element.addEventListener('click', () => {
            
            console.log(item.properties.value)
            let inputStr = document.querySelector('.inputField');

            if(item.properties.value === '=' && equalsCheck(inputStr.value.trim()) === true) {
                inputStr.value = inputStr.value;
            }
             else if (isNaN(+item.properties.value) === false && inputStr.value !== '' && isNaN(+inputStr.value) === false && caclCounter > 1) {
                inputStr.value = item.properties.value;
                caclCounter = 0;
            } else if (isNaN(+item.properties.value) === true && inputStr.value === '' && item.properties.value !== '-') {
                inputStr.value = '';
                
            } else if (isNaN(+item.properties.value) === false || (inputStr.value === '' && item.properties.value === '-')) {
                inputStr.value += item.properties.value;
                
            } else if(isNaN(+item.properties.value) === true && inputStr.value !== '-') {
                inputStr.value += ` ${item.properties.value} `;
                caclCounter++;
            }
            console.log(caclCounter);

            calculate(inputStr.value.trim());
            
        });
        }
        return element;
    })
    console.log(elems);
    return elems;
}

function init (arrOfElements) {
    arrOfElements.forEach(item => document.body.append(item))
}

init(createElem(pageArr));

function initButtons(arrOfButtons) {
    arrOfButtons.forEach(item => {
        document.querySelector('.buttons').append(item);
    })
}
initButtons(createElem(fillValueArr(), true));