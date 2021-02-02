const INPUT = {type: 'input', properties: {type: 'text', className: 'inputText' }};
const BUTTON = {type: 'input', properties: {type: 'button', value: 'add', onclick: addToDo}};
const LIST = {type: 'ul', properties:{className: 'list'}}
const BUTTON_DELETE = {type: 'input', properties: {type: 'button', value: 'delete', onclick: deleteElem}};
const BUTTON_EDIT = {type: 'input', properties: {type: 'button', value: 'edit', onclick: editElem}};
const BUTTON_UP = {type: 'input', properties: {type: 'button', value: 'move up', onclick: moveUp}};
const BUTTON_DOWN = {type: 'input', properties: {type: 'button', value: 'move down', onclick: moveDown}};

const arrElemToCreate = [];
arrElemToCreate.push(INPUT, BUTTON, LIST);

function addToDo() {
    let text = document.querySelector('.inputText').value;
    const LI_CONTAINER = {type: 'li'};
    const LI_SPAN = {type: 'span',  properties: {innerHTML: text}};
    let liElem = (createElem([LI_CONTAINER]));
    liElem.forEach(item => document.querySelector('.list').append(item));
    const liArr = [];
    liArr.push(LI_SPAN, BUTTON_EDIT, BUTTON_DELETE, BUTTON_UP, BUTTON_DOWN);
    let liArrOfElements = createElem(liArr);
    liArrOfElements.forEach(item => document.querySelector('.list > li:last-child').append(item));
}

function init(arrOfElements) {
    arrOfElements.forEach(item => document.body.append(item));
}
init(createElem(arrElemToCreate));

function createElem(configArr) {
    let page = configArr.map(item => {
        let element = document.createElement(item.type);
        Object.entries(item.properties || {}).forEach( ([key, value]) => {
            element[key] = value;
        } )
        return element;
    });
    return page;
}

function deleteElem () {
    let button = event.target;
    button.parentElement.remove();
}

function editElem() {
    let edit = event.target.parentElement.firstChild;
    edit.innerText = document.querySelector('.inputText').value;
}

function moveUp() {
    let up = event.target.parentElement;
    if (up.previousSibling === null) {
        return;
    } else {
    up.after(up.previousSibling);
    };
}

function moveDown() {
    let down = event.target.parentElement;
    if (down.nextSibling === null) {
        return;
    } else {
    down.before(down.nextSibling);
    };
}









// const INPUT = {type: 'input', properties: {type: 'text', className: 'inputText' }};
// const BUTTON = {type: 'input', properties: {type: 'button', value: 'add', onclick: addToDo}};
// const LIST = {type: 'ul', properties:{className: 'list'}}
// const BUTTON_DELETE = {type: 'input', properties: {type: 'button', value: 'delete', onclick: deleteElem}};
// const BUTTON_EDIT = {type: 'input', properties: {type: 'button', value: 'edit', onclick: editElem}};

// function addToDo() {
//     let text = document.querySelector('.inputText').value;
//     console.log(text);
//     let liElem = (createElem({type: 'li'}));
//     liElem.append(createElem(BUTTON_DELETE));
//     liElem.append(createElem(BUTTON_EDIT));
//     liElem.append(createElem({type: 'span',  properties: {innerHTML: text}}));
//     document.querySelector('.list').append(liElem);
// }

// function init() {
//     document.body.append(createElem(INPUT), createElem(BUTTON), createElem(LIST));
// }
// init();

// function createElem(config) {
//     let element = document.createElement(config.type);
//     Object.entries(config.properties || {}).forEach( ([key, value]) => {
//         element[key] = value;
//         console.log(element[key]);
//     });
//     console.log(element);
//     return element;
// }

// function deleteElem () {
//     console.log('event',event)
//     let button = event.target;
//     console.log(button.parentElement);
//     button.parentElement.remove();
// }

// function editElem() {
//     let edit = event.target.parentElement.lastChild;
//     edit.innerText = document.querySelector('.inputText').value;
// }

