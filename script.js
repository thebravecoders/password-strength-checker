const showHide = document
    .querySelector('.show-hide');

const input = document
    .querySelector('.password');

const char_8 = document
    .querySelector('.char_8');

const number = document
    .querySelector('.number');

const symbol = document
    .querySelector('.symbol');

input.addEventListener('input', () => {
    const pass = input.value;

    if (pass.length > 8) {
        char_8.classList.add('item__active');
    } else {
        char_8.classList.remove('item__active');
    }

    if (/[0-9]/.test(pass)) {
        number.classList.add('item__active')
    } else {
        number.classList.remove('item__active');
    }

    if (/[^A-Za-z0-9]/.test(pass)) {
        symbol.classList.add('item__active')
    } else {
        symbol.classList.remove('item__active');
    }

});

showHide.addEventListener('click', () => {

    if (input.type === 'password') {
        input.type = "text";
        showHide.textContent = 'hide'
    } else {
        input.type = "password"
        showHide.textContent = 'show'
    }

});