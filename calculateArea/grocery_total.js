let grocery1;
let grocery2;
let grocery3;

function calculateTotal () {
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    grocery3 = parseFloat(document.getElementById("grocery3").value);
    let total = 0;
    if (grocery1) {
        total += grocery1;
    }
    if (grocery2) {
        total += grocery2;
    }
    if (grocery3) {
        total += grocery3;
    }

    document.getElementById('result').innerText = `The total amount is:$ ${total}`;
}