function checkarLetraA() {
    const inputString = document.getElementById("inputString").value;

    const lowerString = inputString.toLowerCase();

    const count = (lowerString.match(/a/g) || []).length;

    const resultElement = document.getElementById("result");

    if (count > 0) {
        resultElement.textContent = `A letra 'a' aparece ${count} vezes na string.`;
    } else {
        resultElement.textContent = "A letra 'a' não foi encontrada na string.";
    }
}
