let code1 = document.querySelector ('#code1');
let code2 = document.querySelector ('#code2');
let code3 = document.querySelector ('#code3');
let btn = document.querySelector ('#btnpass');
let txt = document.querySelector ('#txt');


btn.addEventListener('click', () => {
    let pass1 = code1.value;
    let pass2 = code2.value;
    let pass3 = code3.value;
    
    pass = pass1 + pass2 + pass3;
    
    if (pass == '911') {
        txt.innerHTML = 'Password 1 correcto';
    } else if (pass == '714'){
        txt.innerHTML = 'Password 2 correcto';
    } else {
        txt.innerHTML = 'Password incorrecto'
    }
    console.log (pass)
})
