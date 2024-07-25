function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');

        const pessoa = criaPessoa(nome.value, sobrenome.value, idade.value, peso.value);

        pessoas.push(pessoa);

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${idade.value} ${peso.value}</p>`
    }


    form.addEventListener('submit', recebeEventoForm);
}

function criaPessoa(nome, sobrenome, idade, peso) {

    return {
        nome,
        sobrenome,
        idade,
        peso
    }
}

meuEscopo();