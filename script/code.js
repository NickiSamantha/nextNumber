let number = 1;

function generateNextNumber () {
    currentNumber++;
    document.getElementById("result").innerText = 'Next number: ${currentNumber}';
}
document.getElementById("generateBtn").addEventListener("click", generateNextNumber);
generateNextNumber ();