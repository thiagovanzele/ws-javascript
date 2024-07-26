function meuEscopo() {

    const horaContainer = document.querySelector('.container-titulo');
    const dataAtual = new Date();

    let horaFormatada = formataData(dataAtual);

    horaContainer.innerHTML = horaFormatada;

}

function defineDiaSemana(diaDaSemana) {
    switch (diaDaSemana) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-Feira';
        case 2:
            return 'Terça-Feira';
        case 3:
            return 'Quarta-Feira';
        case 4:
            return 'Quinta-Feira';
        case 5:
            return 'Sexta-Feira';
        case 6:
            return 'Sabado-Feira';
    }
}

function defineMes(mesDoAno) {
    switch (mesDoAno) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 1:
            return 'Dezembro';
    }
}

function formataData(data) {
    let diaSemana = defineDiaSemana(data.getDay());
    let mesAno = defineMes(data.getMonth());
    let minutos = data.getMinutes();
    let horas = data.getHours();

    if (minutos < 10) {
        minutos = `0${minutos}`;
    }

    if (horas < 10) {
        horas = `0${horas}`;
    }
    

    return `${diaSemana}, ${data.getDate()} de ${mesAno} de ${data.getFullYear()}, ${horas}:${minutos}`;
}

meuEscopo();
