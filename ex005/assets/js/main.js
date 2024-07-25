function meuEscopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function formEvent(evento) {
        evento.preventDefault();

        const peso = Number(form.querySelector('.peso').value);
        const altura = Number(form.querySelector('.altura').value);

        const imc = calculaImc(peso, altura);
        const resultadoFinalImc = resultadoImc(imc);

        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${resultadoFinalImc}) `;
        resultado.style.display = 'block';

    }

    form.addEventListener('submit', formEvent)
}

function calculaImc(peso, altura) {
    return peso / (altura ** 2);
}

function resultadoImc(valor) {

    if (valor <= 18.5) {
        return 'Abaixo do peso';
    } else if (valor <= 24.9) {
        return 'Peso normal';
    } else if (valor <= 29.9) {
        return 'Sobrepeso';
    } else if (valor <= 34.9) {
        return 'Obesidade grau 1';
    } else if (valor <= 39.9) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
}

meuEscopo();
