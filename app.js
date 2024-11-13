let counter = 0;

const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const resetButton = document.getElementById('resetButton');
const toggleModeButton = document.getElementById('toggleModeButton');
const counterDisplay = document.getElementById('counter');
const body = document.body;
const counterContainer = document.querySelector('.counter-container');

function updateButtonColors() {
    const incrementColor = `rgb(${Math.min(255, counter * 25)}, 180, 50)`;
    const decrementColor = `rgb(255, ${Math.max(0, 255 - counter * 25)}, 50)`;

    incrementButton.style.backgroundColor = incrementColor;
    decrementButton.style.backgroundColor = decrementColor;
}

function updateCounter() {
    counterDisplay.textContent = counter;
    updateButtonColors();
}

incrementButton.addEventListener('click', function() {
    counter++;
    updateCounter();
});

decrementButton.addEventListener('click', function() {
    counter--;
    updateCounter();
});

resetButton.addEventListener('click', function() {
    counter = 0;
    updateCounter();
});

toggleModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});

updateCounter();
