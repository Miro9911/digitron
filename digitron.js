let num1 = ''
let num2 = ''
let curentAction = null

const numberBtn = document.querySelectorAll('[number]')
const operatorBtn = document.querySelectorAll('[operator]')
const equalsBtn = document.querySelector('[equals]')
const deleteBtn = document.querySelector('[delete]')
const clearBtn = document.querySelector('[clear]')
const pointBtn = document.querySelector('[point]')
const fDisplay = document.querySelector('[fOperation]')
const sDisplay = document.querySelector('[sOperation]')

let reset = false

equalsBtn.addEventListener('click', equals)
deleteBtn.addEventListener('click', deleteNumber)
clearBtn.addEventListener('click', clear)
pointBtn.addEventListener('click', addPoint)

numberBtn.forEach((button) =>
    button.addEventListener('click', () => connectNumbers(button.textContent))
)

operatorBtn.forEach((button) =>
    button.addEventListener('click', () => selectOperator(button.textContent))
)

function clear() {
    fDisplay.textContent = ''
    sDisplay.textContent = ''
    num1 = ''
    num2 = ''
    curentAction = null
}

function connectNumbers(number) {
    if(sDisplay.textContent === '0' || reset)
        reseting()
    sDisplay.textContent += number 
}

function selectOperator(operator) {
    if(curentAction != null) equals()
    num1 = sDisplay.textContent
    curentAction = operator
    fDisplay.textContent = `${num1} ${curentAction}`
    reset = true
}

function equals() {
    num2 = sDisplay.textContent
    sDisplay.textContent = operate(curentAction, num1, num2)
    fDisplay.textContent = `${num1} ${curentAction} ${num2} =`
    curentAction = null
}

function reseting() {
    sDisplay.textContent = ''
    reset = false
}

function addPoint() {
    if(reset) reseting()
    if(sDisplay.textContent == '')
        sDisplay.textContent = '0'
    if(sDisplay.textContent.includes('.')) return
        sDisplay.textContent += '.'
}

function deleteNumber() {
    sDisplay.textContent = sDisplay.textContent.slice(0, -1)
}

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch(operator){
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            if(b != 0) return divide(a, b)
                else return null
    }
}