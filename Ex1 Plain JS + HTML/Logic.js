const operands = ['+', '-', 'x', '÷']; // Possible operands
let firstNumber = 0; // First number for the calculation
let secondNumber = 0; // Second number for the calculation
let operandIndex = 0; // Index to decide which operand to use

let count = 0; // Total amount of exercises
let rightCount = 0; // Amount of correctly answered exercises

// Return the right answer according to the operand
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

// Fill the right side of a string with whitespaces
// isWrongAnswer: flag to add the right amount of padding between the correct answer and the user input
function padRight(s, isWrongAnswer) {
    let len = s.toString().length;
    let amount = isWrongAnswer ? 6 : 2;
    return s.toString().concat('\u00A0'.repeat(amount - len));
}

// Fill the left side of a string with whitespaces
function padLeft(s) {
    let len = s.toString().length;
    return '\u00A0'.repeat(2 - len).concat(s.toString());
}

// Listen to the enter press inside the input field
function listener(event, input, exercise) {
    if (event.key === 'Enter') {
        // Validate if an input is available
        if (input.value && input.value !== '') {
            let answer = getAnswer(operands[operandIndex], firstNumber, secondNumber);
            // Convert the answer to a string with a maximum of 3 decimals
            let answerAsString = answer % 1 === 0 ? answer.toString() : answer.toFixed(3);
            // Style the exercise green if it was correct and increase the right answer count
            if (answerAsString === input.value) {
                rightCount++;
                exercise.style.color = '#4dff4d';
            }
            else {
                // Style the exercise red if it was wrong
                exercise.style.color = '#ff4040';
                // Concat the input to the end of the exercise
                answerAsString = padRight(answerAsString, true).concat(" You've typed: ").concat(input.value);
            }

            // Increase the total exercise count and update the score
            count++;
            let score = document.getElementById('score');
            score.innerText = 'SCORE ' + rightCount + '/' + count;

            // Remove the input field and create a new exercise
            exercise.removeChild(exercise.lastChild);
            exercise.appendChild(document.createTextNode(answerAsString));
            createExercise();
        }
    }
}

// Generate a new exercise
function createExercise() {
    // Get the container div
    let container = document.getElementById('container');

    // Generate the first number between 0 and 99
    firstNumber = Math.ceil(Math.random() * 100);
    if (firstNumber === 100)
        firstNumber--;
    // Generate the second number between 0 and 99
    secondNumber = Math.ceil(Math.random() * 100);
    if (secondNumber === 100)
        secondNumber--;

    // Generate an operand
    operandIndex = Math.round(Math.random() * 3);

    // Define the exercise the the input field
    let exercise = document.createElement('div');
    exercise.appendChild(document.createTextNode(padLeft(firstNumber) + ' ' + operands[operandIndex] + ' ' + padRight(secondNumber) + ' = '));
    let input = document.createElement('input');
    input.type = 'number';
    exercise.appendChild(input);

    // Add a listener to the input field
    input.addEventListener('keydown', function (event) {
        listener(event, input, exercise)
    });

    // Add the exercise to the DOM and focus on the input field
    container.appendChild(exercise);
    input.focus();
}