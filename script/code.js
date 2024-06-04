let currentNumber = 0;

document.getElementById('nextNumberButton').addEventListener('click', function() {
    currentNumber++;
    document.getElementById('number').textContent = currentNumber;
});

document.getElementById('clearButton').addEventListener('click', function() {
    currentNumber = 0;
    document.getElementById('number').textContent = currentNumber;
});
