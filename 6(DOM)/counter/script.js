let count = +document.querySelector('.counter').innerHTML;
console.log(count);

function counterPlus () {
    count++;
    document.querySelector('.counter').innerHTML = `${count}`;
}

function counterMinus () {
    count--;
    document.querySelector('.counter').innerHTML = `${count}`;
}



