
let numberArr_en = [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+']];
let lettersArr2_en = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ['[', '{'], [']', '}'], ['\\', '|']];
let lettersArr3_en = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', [';', ':'], [`'`, `"`]];
let lettersArr4_en = ['z', 'x', 'c', 'v', 'b', 'n', 'm', [',', '<'], ['.', '>'], ['/', '?']];

let numberArr_ru = ['ё', ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+']];
let lettersArr2_ru = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', ['\\', '/']];
let lettersArr3_ru = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'];
let lettersArr4_ru = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ['.', ',']];



function keyboard (numberArr, lettersArr2, lettersArr3, lettersArr4) {
    document.querySelectorAll('.keys > .flx').forEach(item => item.innerHTML = '');
    
    let isShift = false;
    let isCaps = false;
    let capsLock = [{tag: 'input', properties: {type: 'button', value: 'CapsLock', onclick: caps, className: 'caps-lock el'}}]
    let shiftButton = [{tag: 'input', properties: {type: 'button', value: 'Shift', className: 'shift-but el'}}];
    let enterButton = [{tag: 'input', properties: {type: 'button', value: 'Enter', onclick: enter, className: 'enter-but el'}}];
    let backSpace = [{tag: 'input', properties: {type: 'button', value: 'Backspace',onclick: backspace,  className: 'back-space el'}}];
    let spaceButton = [{tag: 'input', properties: {type: 'button', value: 'Space', onclick: space, className: 'space-but el'}}];
    let lanButton = [{tag: 'input', properties: {type: 'button', value: 'lang', onclick: lang, className: 'language el'}}];
    let leftArrow = [{tag: 'input', properties: {type: 'button', value: 'left', onclick: left, className: 'left-but el'}}];
    let rightArrow = [{tag: 'input', properties: {type: 'button', value: 'right', onclick: right, className: 'right-but el'}}];
    let upArrow = [{tag: 'input', properties: {type: 'button', value: 'up', onclick: up, className: 'up el'}}];
    let downArrow = [{tag: 'input', properties: {type: 'button', value: 'down', onclick: down, className: 'down el'}}];
    
    if(numberArr === numberArr_en) {
        lanButton[0].properties.value = 'Eng'
    } else if (numberArr === numberArr_ru) {
        lanButton[0].properties.value = 'Рус'
    }

    function fillButton (arr, symbolIndex) {
        return arr.map(item => ({tag: 'input', properties: {type: 'button', value: item[symbolIndex] || item, className: 'buttons el', onclick: forInput}}))
    }


    function renderButtons(arr, place) {
        arr.forEach(item => {
            let element = document.createElement(item.tag);
            Object.entries(item.properties || {}).forEach( ([key, value]) =>{
                element[key] = value;
            } )
            place.appendChild(element);
        })
    }
    let divBut1 = document.createElement('div');
    divBut1.className = 'divBut1 flx';
    document.querySelector('.keys > .first-lane').append(divBut1);
    renderButtons(fillButton(numberArr, 0), document.querySelector('.keys > .first-lane > .divBut1'));
    renderButtons(backSpace, document.querySelector('.keys > .first-lane'));
    renderButtons(fillButton(lettersArr2, 0), document.querySelector('.keys > .second-lane'));
    renderButtons(capsLock, document.querySelector('.keys > .third-lane'));
    let divBut3 = document.createElement('div');
    divBut3.className = 'divBut3 flx';
    document.querySelector('.keys > .third-lane').append(divBut3);
    renderButtons(fillButton(lettersArr3, 0), document.querySelector('.keys > .third-lane > .divBut3'));
    renderButtons(enterButton, document.querySelector('.keys > .third-lane'));
    renderButtons(shiftButton, document.querySelector('.four-lane'))
    let divBut4 = document.createElement('div');
    divBut4.className = 'divBut4 flx';
    document.querySelector('.keys > .four-lane').append(divBut4);
    renderButtons(fillButton(lettersArr4, 0), document.querySelector('.keys > .four-lane > .divBut4'));
    renderButtons(upArrow, document.querySelector('.keys > .four-lane'))
    renderButtons(lanButton, document.querySelector('.five-lane'))
    renderButtons(spaceButton, document.querySelector('.five-lane'))
    renderButtons(leftArrow, document.querySelector('.five-lane'))
    renderButtons(downArrow, document.querySelector('.five-lane'))
    renderButtons(rightArrow, document.querySelector('.five-lane'))



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
        } else if(target.value || isShift === true) {
            unShift()
        }
    });

    function shift () {
        console.log(isShift)
        isShift = !isShift;
        console.log(isShift);
        
        if(isShift === true) {
            document.querySelectorAll('.buttons').forEach(item => item.remove());
            renderButtons(fillButton(numberArr, 1), document.querySelector('.keys > .first-lane > .divBut1'));
            renderButtons(fillButton(lettersArr2, 1), document.querySelector('.keys > .second-lane'));
            renderButtons(fillButton(lettersArr3, 1), document.querySelector('.keys > .third-lane > .divBut3'));
            renderButtons(fillButton(lettersArr4, 1), document.querySelector('.keys > .four-lane > .divBut4'));
            if(isCaps === true) {
                document.querySelectorAll('.buttons').forEach(item => item.classList.remove('capsed'));
            } else {
                document.querySelectorAll('.buttons').forEach(item => item.classList.add('capsed')); 
            }
        } else{
            unShift()
        }
    }

    function unShift() {
        document.querySelectorAll('.buttons').forEach(item => item.remove());
        renderButtons(fillButton(numberArr, 0), document.querySelector('.keys > .first-lane > .divBut1'));
        renderButtons(fillButton(lettersArr2, 0), document.querySelector('.keys > .second-lane'));
        renderButtons(fillButton(lettersArr3, 0), document.querySelector('.keys > .third-lane > .divBut3'));
        renderButtons(fillButton(lettersArr4, 0), document.querySelector('.keys > .four-lane > .divBut4'));
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
        if(numberArr === numberArr_en) {
            keyboard (numberArr_ru, lettersArr2_ru, lettersArr3_ru, lettersArr4_ru)
        } else if(numberArr === numberArr_ru){
            keyboard (numberArr_en, lettersArr2_en, lettersArr3_en, lettersArr4_en)
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

keyboard (numberArr_ru, lettersArr2_ru, lettersArr3_ru, lettersArr4_ru)