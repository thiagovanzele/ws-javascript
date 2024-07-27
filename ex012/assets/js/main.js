function meuRelogio() {
    function retornaHorarioAPartirDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return dataFormatada = data.toLocaleString('pt-br', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'UTC'
        })

    }

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    document.addEventListener('click', function (event) {
        const elemento = event.target;
        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = retornaHorarioAPartirDosSegundos(segundos);
            relogio.classList.remove('pausado');
        } else if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        } else if (elemento.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.remove('pausado');
        }
    })

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = retornaHorarioAPartirDosSegundos(segundos);
        }, 1000);
    }

}

meuRelogio();