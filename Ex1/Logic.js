const operands = ['+', '-', 'x', '÷'];
let firstNumber = 0; // First number for the calculation
let secondNumber = 0; // Second number for the calculation
let operandIndex = 0; // Index to decide which operand to use

let count = 0;
let rightCount = 0;

function getAnswer(op, x, y) {
    switch (op) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case 'x':
            return x * y;
        case '÷':
            return x / y;
    }
}

function padRight(s, isWrongAnswer) {
    let len = s.toString().length;
    let amount = isWrongAnswer ? 6 : 2;
    return s.toString().concat('\u00A0'.repeat(amount - len));
}

function padLeft(s) {
    let len = s.toString().length;
    return '\u00A0'.repeat(2 - len).concat(s.toString());
}

function listener(event, input, exercise) {
    if (event.key === 'Enter') {
        if (input.value && input.value !== '') {
            let answer = getAnswer(operands[operandIndex], firstNumber, secondNumber);
            let answerAsString = answer % 1 === 0 ? answer.toString() : answer.toFixed(3);
            if (answerAsString === input.value) {
                rightCount++;
                exercise.style.color = '#4dff4d';
            }
            else {
                exercise.style.color = '#ff4040';
                answerAsString = padRight(answerAsString, true).concat(" You've typed: ").concat(input.value);
            }

            count++;
            let score = document.getElementById('score');
            score.innerText = 'SCORE ' + rightCount + '/' + count;

            exercise.removeChild(exercise.lastChild);
            exercise.appendChild(document.createTextNode(answerAsString));
            createExercise();
        }
    }
}

function createExercise() {
    let container = document.getElementById('container');

    firstNumber = Math.ceil(Math.random() * 100);
    if (firstNumber === 100)
        firstNumber--;
    secondNumber = Math.ceil(Math.random() * 100);
    if (secondNumber === 100)
        secondNumber--;

    operandIndex = Math.round(Math.random() * 3);

    let exercise = document.createElement('div');
    exercise.appendChild(document.createTextNode(padLeft(firstNumber) + ' ' + operands[operandIndex] + ' ' + padRight(secondNumber) + ' = '));
    let input = document.createElement('input');
    input.type = 'number';
    exercise.appendChild(input);

    input.addEventListener('keydown', function (event) {
        listener(event, input, exercise)
    });

    container.appendChild(exercise);
    input.focus();
}