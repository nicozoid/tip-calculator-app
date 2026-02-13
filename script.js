console.log('script loaded')

const billItem = document.getElementById('bill-item');
const billInput = document.getElementById('bill-input');

const fiveBtn = document.getElementById('five-btn');
const tenBtn = document.getElementById('ten-btn');
const fifteenBtn = document.getElementById('fifteen-btn');
const twentyFiveBtn = document.getElementById('twenty-five-btn');
const fiftyBtn = document.getElementById('fifty-btn');
const customBtn = document.getElementById('custom-btn');

const peopleItem = document.getElementById('people-item');
const peopleInput = document.getElementById('people-input');

const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('tip-total');

const resetBtn = document.getElementById('reset-btn');

const customItem = document.getElementById('custom-item');
const customInput = document.getElementById('custom-input');

let bill = 0.00;
let tip = 0;
let people = 0;

// array of tip buttons
const tipButtons = [fiveBtn, tenBtn, fifteenBtn, twentyFiveBtn, fiftyBtn, customBtn];




//RESET button
resetBtn.addEventListener('click', () => {
    bill = 0.00
    tip = 1.00;
    people = 0;
    billInput.value = '';
    peopleInput.value = '';
    clearButtonStyles();
    tipAmount.textContent = '$0.00';
    totalAmount.textContent = '$0.00';
    resetBtn.disabled = true;
    peopleItem.classList.remove('error');
})

// generic functionality of each tipbutton
tipButtons.forEach(button => {
    button.addEventListener('click', () => { // if button clicked
        clearButtonStyles();
        button.classList.add('selected'); // change this button's styling to 'selected' style
        resetBtn.disabled = false;
    })
}
);

// unique functionality of each button
fiveBtn.addEventListener('click', () => {
    tip = 0.05;
    updateResults();
});
tenBtn.addEventListener('click', () => {
    tip = 0.10;
    updateResults();
});
fifteenBtn.addEventListener('click', () => {
    tip = 0.15;
    updateResults();
});
twentyFiveBtn.addEventListener('click', () => {
    tip = 0.25;
    updateResults();
});
fiftyBtn.addEventListener('click', () => {
    tip = 0.5;
    updateResults();
});

customBtn.addEventListener('click', () => {
    tip = customInput.value/100;
    customItem.style.display = 'block';
    updateResults();
});

//clear button selection
function clearButtonStyles() {
    tipButtons.forEach(button => {
        button.classList.remove('selected'); // remove 'selected' style from all button
    })
    customItem.style.display = 'none';
}

// Number inputs
billInput.addEventListener('input', () => {
    bill = Number(billInput.value); // convert input value from string to number so that toFixed will work
    updateResults();
    resetBtn.disabled = false;
})
peopleInput.addEventListener('input', () => {
    people = Number(peopleInput.value);
    updateResults();
    resetBtn.disabled = false;
})

customInput.addEventListener('input', () => {
tip = customInput.value/100;
updateResults();
resetBtn.disabled = false;
})

// Results calculator
function updateResults() {
    if (inputsValid() === true) {
        populateResults();
    } 
}

function populateResults() {
        let num1 = (bill * tip) / people;
        tipAmount.textContent = `$` + num1.toFixed(2); //always have two decimal places


        let num2 = Number(billInput.value);
        num2 = num2 / people;
        num2 = num2 + num1;
        totalAmount.textContent = `$` + num2.toFixed(2);
}

function inputsValid() {
if ((typeof people !== 'number') || people === 0) {
        peopleItem.classList.add('error');
        tipAmount.textContent = '$0.00';
        totalAmount.textContent = '$0.00';
        return false;
    } else {
        peopleItem.classList.remove('error');
        return true;
    }
}

let num = 3.14159;
let result = Math.round(num * 100) / 100; // 3.14

