document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');
    const resetButton = document.getElementById('resetButton');
    const valueIncrementButton = document.getElementById('incrementByValue');

    let count = 0;

    incrementButton.addEventListener('click', () => {
        count += 1;
        counterElement.textContent = count;
    });

    decrementButton.addEventListener('click', () => {
        count = --count;
        counterElement.textContent = count;
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        counterElement.textContent = count;
    });

    valueIncrementButton.addEventListener('click', () => {
        count = document.getElementById('numValue').value;
        parseFloat(count);
        counterElement.textContent += count;
    });
});