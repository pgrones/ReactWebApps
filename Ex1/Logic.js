function getAnswer(op, x, y){
    switch (op) {
        case '+': return x +y;
        case '-': return x-y;
        case 'x': return x*y;
        case '÷': return x/y;
    }
}

function padRight(s){
    let len = s.toString().length;
    return s.toString().concat('\u00A0'.repeat(2 - len));
}

function padLeft(s){
    let len = s.toString().length;
    return '\u00A0'.repeat(2 - len).concat(s.toString());
}

let operands = ['+', '-', 'x', '÷'];

function createExercise() {
    let container = document.getElementById('container');
    let firstNumber = Math.ceil(Math.random() * 100);
    while(firstNumber === 100)
        firstNumber = Math.ceil(Math.random() * 100);
    let secondNumber = Math.ceil(Math.random() * 100);
    while(secondNumber === 100)
        secondNumber = Math.ceil(Math.random() * 100);
    let index = Math.round(Math.random() * 3);
    
    let exercise = document.createElement('div');
    exercise.appendChild(document.createTextNode(padLeft(firstNumber) + ' ' + operands[index] + ' ' + padRight(secondNumber) + ' = '));
    let input = document.createElement('input');
    input.type = 'number';
    exercise.appendChild(input);

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            if (input.value && input.value !== '') {
                let answer = getAnswer(operands[index], firstNumber, secondNumber);
                let inputAns = input.value;
                exercise.style.color = answer.toString() === inputAns ? '#4dff4d' : '#ff4040';
                exercise.removeChild(exercise.lastChild);
                exercise.appendChild(document.createTextNode(answer % 1 === 0 ? answer : answer.toFixed(3)));
                createExercise();
            }
        }
    });

    container.appendChild(exercise);
    input.focus();
}