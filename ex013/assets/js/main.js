const tarefas = document.querySelector('.tarefas');
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})


function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaLi() {
    return document.createElement('li');
}

function criaButton() {
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'apagar');
    return botaoApagar;
}

function criaTarefa(tarefa) {
    const li = criaLi();
    const botao = criaButton();

    li.textContent = tarefa;
    botao.textContent = 'Apagar';

    li.appendChild(botao);
    tarefas.appendChild(li);
    limpaInput();
    salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e) {
    const elemento = e.target;
    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

