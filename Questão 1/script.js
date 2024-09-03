function isFibonacciNumber(n) {
    let a = 0, b = 1;
    
    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === n || n === 0;
}

function main() {
    const number = parseInt(document.getElementById("numberInput").value);
    const resultElement = document.getElementById("result");

    if (isFibonacciNumber(number)) {
        resultElement.textContent = `O número ${number} pertence à sequência de Fibonacci.`;
    } else {
        resultElement.textContent = `O número ${number} NÃO pertence à sequência de Fibonacci.`;
    }
}
