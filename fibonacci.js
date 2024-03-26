function pertenceAFibonacci (numero){
    let a = 0;
    let b = 1;

    while (a <= numero) {
        if (a === numero) {
            return true;
        }

        let total = b;
        b = a + b;
        a = total;
    }

    return false
}

let numero = 21;
if (pertenceAFibonacci (numero)) {
    console.log(numero + " pertence a tabela Fibonacci")
}
else {
    console.log(numero + " não pertence a tabela Fibonacci")
}