//Dom element
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    Symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.chicked;
    const hasUpper = uppercaseEl.chicked;
    const hasNumber = numbersEl.chicked;
    const hasSymbol = symbolsEl.chicked;
    console.log(hasLower, hasUpper, hasNumber, hasSymbol);
})

//generator functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const Symbols = '@$%^&*()[]{}<>/,.';
    return Symbols[Math.floor(Math.random() * Symbols.length)]
}