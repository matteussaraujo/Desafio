function calculateSum() {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

   
    document.getElementById("result").textContent = `O valor de SOMA é ${SOMA}.`;
}


calculateSum();
