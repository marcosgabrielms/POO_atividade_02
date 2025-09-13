function teste() {
    let x: number = 10;
    console.log("Início do Programa");
    if (x > 5) {
        console.log("X é maior que 5");
        return;
        console.log("Essa linha é inatingível!");
    }
    console.log("Fim do Programa")
}

// Explicação: Essa opção controla se o compilador deve te avisar sobre trechos de código que nunca
// poderão ser executados.