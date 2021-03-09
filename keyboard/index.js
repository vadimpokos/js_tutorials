
let numberArr_en = [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+']];
let lettersArr2_en = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ['[', '{'], [']', '}'], ['\\', '|']];
let lettersArr3_en = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', [';', ':'], [`'`, `"`]];
let lettersArr4_en = ['z', 'x', 'c', 'v', 'b', 'n', 'm', [',', '<'], ['.', '>'], ['/', '?']];

let numberArr_ru = ['ё', ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+']];
let lettersArr2_ru = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', ['\\', '/']];
let lettersArr3_ru = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'];
let lettersArr4_ru = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ['.', ',']];

const config_ru = [numberArr_ru, lettersArr2_ru, lettersArr3_ru, lettersArr4_ru];
const config_en = [numberArr_en, lettersArr2_en, lettersArr3_en, lettersArr4_en];

keyboard (config_en);

function keyboard (config) {
    document.querySelectorAll('.keys > .flx').forEach(item => item.innerHTML = '');
    
    let isShift = false;
    let isCaps = false;
    let capsLock = [{tag: 'input', properties: {type: 'button', value: 'Caps', onclick: caps, className: 'caps-lock el'}}]
    let shiftButton = [{tag: 'input', properties: {type: 'button', value: 'Shift', className: 'shift-but el'}}];
    let enterButton = [{tag: 'input', properties: {type: 'button', value: 'Enter', onclick: enter, className: 'enter-but el'}}];
    let backSpace = [{tag: 'input', properties: {type: 'button', value: 'Backspace',onclick: backspace,  className: 'back-space el'}}];
    let spaceButton = [{tag: 'input', properties: {type: 'button', value: 'Space', onclick: space, className: 'space-but el'}}];
    let lanButton = [{tag: 'input', properties: {type: 'button', value: 'lang', onclick: lang, className: 'language el'}}];
    let leftArrow = [{tag: 'input', properties: {type: 'button', value: '←', onclick: left, className: 'left-but el'}}];
    let rightArrow = [{tag: 'input', properties: {type: 'button', value: '→', onclick: right, className: 'right-but el'}}];
    let upArrow = [{tag: 'input', properties: {type: 'button', value: '↑', onclick: up, className: 'up el'}}];
    let downArrow = [{tag: 'input', properties: {type: 'button', value: '↓', onclick: down, className: 'down el'}}];
    
    if(config[0] === config_en[0]) {
        lanButton[0].properties.value = 'Eng'
    } else if (config[0] === config_ru[0]) {
        lanButton[0].properties.value = 'Рус'
    }

    function fillButton (arr, symbolIndex) {
        return arr.map(item => ({tag: 'input', properties: {type: 'button', value: item[symbolIndex] || item, className: 'buttons el', onclick: forInput}}))
    }


    function renderButtons(arr, place, operation) {
        arr.forEach(item => {
            let element = document.createElement(item.tag);
            Object.entries(item.properties || {}).forEach( ([key, value]) =>{
                element[key] = value;
            } )
            switch (operation) {
            case 1:
                place.appendChild(element);
                break;
            case 2: 
                place.prepend(element);
                break;
            case 3:
                place.before(element);
                break;
            default:
                place.appendChild(element);
            }
        })
    }

    const firstLane = document.querySelector('.keys > .first-lane');
    const secondLane = document.querySelector('.keys > .second-lane');
    const thirdlane = document.querySelector('.keys > .third-lane');
    const fourLane = document.querySelector('.keys > .four-lane');
    const fiveLane = document.querySelector('.keys > .five-lane');

    let forRender = [[fillButton(config[0], 0), firstLane],
                    [backSpace, firstLane],
                    [fillButton(config[1], 0), secondLane],
                    [capsLock, thirdlane],
                    [fillButton(config[2], 0), thirdlane],
                    [enterButton, thirdlane],
                    [shiftButton, fourLane],
                    [fillButton(config[3], 0), fourLane],
                    [upArrow, fourLane],
                    [lanButton, fiveLane],
                    [spaceButton, fiveLane],
                    [leftArrow, fiveLane],
                    [downArrow, fiveLane],
                    [rightArrow, fiveLane]]

    forRender.forEach(item => renderButtons(item[0], item[1]));



    function forInput(elem) {
        let position = document.getElementById('key-input').selectionEnd;
        if ((isCaps === true && isShift !== true) || (isCaps !== true && isShift === true)) {
            document.getElementById('key-input').value = document.getElementById('key-input').value.substring(0, position) + elem.target.value.toUpperCase() + document.getElementById('key-input').value.substring(position, document.getElementById('key-input').value.length); 
        } else {
            document.getElementById('key-input').value = document.getElementById('key-input').value.substring(0, position) + elem.target.value + document.getElementById('key-input').value.substring(position, document.getElementById('key-input').value.length); 
        }
        document.getElementById('key-input').focus();
        document.getElementById('key-input').selectionEnd = position + 1;
    }

    document.querySelector('.keyboard-wrapper').addEventListener('click', function(event){
        let target = event.target;
        if(target.value === 'Shift') {
            shift();
        } else if(target.value && isShift === true) {
            unShift()
        }
    });

    function shift () {
        console.log(isShift)
        isShift = !isShift;
        console.log(isShift);

        let reRender = [[fillButton(config[0], 1).reverse(), firstLane, 2],
                         [fillButton(config[1], 1), secondLane],
                         [fillButton(config[2], 1), document.querySelector('.enter-but'), 3],
                         [fillButton(config[3], 1), document.querySelector('.up'), 3]];
        
        document.querySelectorAll('.buttons').forEach(item => item.remove());
    
        reRender.forEach(item => renderButtons(item[0], item[1], item[2]))
        
        if(isShift === true) {
            
            

            if(isCaps === true) {
                document.querySelectorAll('.buttons').forEach(item => item.classList.remove('capsed'));
            } else {
                document.querySelectorAll('.buttons').forEach(item => item.classList.add('capsed')); 
            }
        } else{
             unShift();
        }
    }

    function unShift() {
        document.querySelectorAll('.buttons').forEach(item => item.remove());
        

        let reRender = [[fillButton(config[0], 0).reverse(), firstLane, 2],
                         [fillButton(config[1], 0), secondLane],
                         [fillButton(config[2], 0), document.querySelector('.enter-but'), 3],
                         [fillButton(config[3], 0), document.querySelector('.up'), 3]];

        reRender.forEach(item => renderButtons(item[0], item[1], item[2]))

        if(isCaps === false) {
            document.querySelectorAll('.buttons').forEach(item => item.classList.remove('capsed'));
        } else {
            document.querySelectorAll('.buttons').forEach(item => item.classList.add('capsed')); 
        }
        isShift = false;
    }

    function caps () {
        isCaps = !isCaps;
        console.log(isShift)
        if(isCaps === true) {
            document.querySelector('.caps-lock').classList.add('enabled')
            document.querySelectorAll('.buttons').forEach(item => item.classList.add('capsed'));
        } else {
            document.querySelector('.caps-lock').classList.remove('enabled')
            document.querySelectorAll('.buttons').forEach(item => item.classList.remove('capsed'));
        }
    }

    function enter() {
        let position = document.getElementById('key-input').selectionEnd;
        document.getElementById('key-input').value = document.getElementById('key-input').value.substring(0, position) + '\n' + document.getElementById('key-input').value.substring(position, document.getElementById('key-input').value.length); 
        document.getElementById('key-input').focus();
    }

    function backspace() {
        let position = document.getElementById('key-input').selectionEnd;
        let strToCut = document.getElementById('key-input').value.substring(0, position)
        let cutedStr = strToCut.slice(0, -1);
        document.getElementById('key-input').value = cutedStr +  document.getElementById('key-input').value.substring(position, document.getElementById('key-input').value.length);
        document.getElementById('key-input').focus();
        document.getElementById('key-input').selectionEnd = position - 1;
    }

    function space() {
        let position = document.getElementById('key-input').selectionEnd;
        document.getElementById('key-input').value = document.getElementById('key-input').value.substring(0, position) + ' ' + document.getElementById('key-input').value.substring(position, document.getElementById('key-input').value.length); 
        document.getElementById('key-input').focus();
        document.getElementById('key-input').selectionEnd = position + 1;

    }

    function lang() {
        if(config[0] === config_en[0]) {
            keyboard (config_ru)
        } else if(config[0] === config_ru[0]){
            keyboard (config_en)
        }
    }

    function left() {
        let position = document.getElementById('key-input').selectionEnd = document.getElementById('key-input').selectionStart
        document.getElementById('key-input').focus();
        document.getElementById('key-input').selectionEnd = document.getElementById('key-input').selectionStart = position - 1;
    }

    function right() {
        let position = document.getElementById('key-input').selectionEnd = document.getElementById('key-input').selectionStart
        document.getElementById('key-input').focus();
        document.getElementById('key-input').selectionEnd = document.getElementById('key-input').selectionStart = position + 1;
    }

    function up() {
        let position = document.getElementById('key-input').selectionEnd = document.getElementById('key-input').selectionStart  
        const positionFromLeft = document.getElementById('key-input').value.slice(0, position).match(/(\n).*$(?!\1)/g) || [[1]];
        document.getElementById('key-input').selectionEnd = document.getElementById('key-input').selectionStart -= positionFromLeft[0].length;
        document.getElementById('key-input').focus();
    }

    function down() {
        let position = document.getElementById('key-input').selectionEnd = document.getElementById('key-input').selectionStart
        const positionFromLeft = document.getElementById('key-input').value.slice(0, position).match(/^.*(\n).*(?!\1)/) || [[1]];
        document.getElementById('key-input').selectionEnd = document.getElementById('key-input').selectionStart += positionFromLeft[0].length;
        document.getElementById('key-input').focus();
    }


}

