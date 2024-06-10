let amount1 = document.querySelector('#amount1');
let amount2 = document.querySelector('#amount2');
let amount3 = document.querySelector('#amount3');
let btn = document.querySelector('#btn');
let txt = document.querySelector('#text_2');

btn.addEventListener('click', () => {
    let value1 = (Number(amount1.value));
    let value2 = (Number(amount2.value));
    let value3 = (Number(amount3.value));
    let total = value1 + value2 + value3;
    console.log (value1, value2, value3, total);
    if (total > 10) {
        txt.innerHTML = `Llevas demasiados stickers`
    } else if (total <= 10) {
        txt.innerHTML = `Llevas ${total} stickers`
    }

});