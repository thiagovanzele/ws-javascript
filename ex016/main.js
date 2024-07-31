function validaCpf(cpf) {

    let cpfLimpo = cpf.replace(/\D+/g, '');
    let cpfTeste = cpfLimpo.slice(0, -2);
    const primeiroDigito = criaPrimeiroDigito(cpfTeste);
    cpfTeste += primeiroDigito;
    const segundoDigito = criaSegundoDigito(cpfTeste);
    cpfTeste += segundoDigito;

    return cpfTeste === cpfLimpo;
}

function criaPrimeiroDigito(valor) {
    let soma = realizaSoma(10, valor);
    
    let penultimoDigito = 11 - (soma % 11);
    return penultimoDigito > 9 ? 0 : penultimoDigito;
}

function criaSegundoDigito(valor) {
    let soma = realizaSoma(11, valor);

    let ultimoDigito = 11 - (soma % 11);
    return ultimoDigito > 9 ? 0 : ultimoDigito;
}

function realizaSoma(quantidade, valor) {
    let soma = 0;
    let indice = 0;

    for (let i = quantidade; i >= 2; i--) {
        soma += valor[indice] * i;
        indice ++;
    }

    return soma;
}

console.log(validaCpf('42477414895'));