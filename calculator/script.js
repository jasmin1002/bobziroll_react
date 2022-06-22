const btns = document.querySelector('.btns');
let input = document.querySelector('.input');

function add(firstValue, otherValue) {
    return firstValue + otherValue;
}

function checkOperator(input) {
    str = '+/-X%'
    for (let i = 0; i < input.length; i++) {
        optr = input[i];
        if (str.includes(optr)) {
            return {isOptr: true, optr}
        }
    }
}

input.focus();

btns.addEventListener('click', event => {
    input.focus();
    let digit = event.target.textContent
    let firstValue = undefined;
    const operators = ['-', '+', '/', 'X', '%', '*'];
    input.value += digit;

    // Check for combination of multiple operator
    if(input.value.length > 1) {
        if (operators.includes(input.value[input.value.length - 2]) &&
            operators.includes(input.value[input.value.length - 1])) {
            console.log(`${input.value[input.value.length - 2]} and ${input.value[input.value.length - 1]}`)
            
            digit = input.value.substr(0, input.value.length - 2) + input.value[input.value.length - 1];
            input.value = digit;
            // console.log(digit);
        }
    }
    // input.value += digit;
    // const operator = checkOperator(input.value);
    if (digit === '=') {
        return;
    }
    
    // console.log(operator)
})

btns.addEventListener('keypress', event => {
    console.log('Keypressed')
})