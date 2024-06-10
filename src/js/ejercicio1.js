let gato_1 = document.querySelector('#gato_1');
gato_1.addEventListener('click', () => {
    if (gato_1.classList.contains('borde')) {
        gato_1.classList.remove('borde');
    } else {
        gato_1.classList.add('borde');
    }
});

