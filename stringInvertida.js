function inverterString(str){
    let inverter = '';
    for (let i = str.length - 1; i >= 0; i--) {
        inverter +=str[i]
    }
    return inverter
}

const minhaString = "Olá mundo";
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida)