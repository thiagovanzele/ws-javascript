const btnEnviar = document.getElementById("botao");
const nomesCadastrados = ['thiago', 'tamires', 'miguel'];

function verificaNome(nome) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(!nomesCadastrados.includes(nome));
        }, 1000);
    })
}

const feedback = document.querySelector(".feedback");

document.getElementById("nome").addEventListener("blur", async (e) => {
    const username = e.target.value;

    if (username.trim() != "") {
        try {
            const usernameDisponivel = await verificaNome(username);
            exibirFeedback(username, usernameDisponivel);
        } catch (error) {
            console.error('Erro ao verificar disponibilidade do nome');
        }
    }

})

function exibirFeedback(usuario, disponibilidade) {
    const feedbackElement = document.querySelector(".feedback");

    if (disponibilidade) {
        feedbackElement.style.color = 'green';
        feedbackElement.textContent = `O usuário ${usuario} está disponível`;
    } else {
        feedbackElement.style.color = 'red';
        feedbackElement.textContent = `O usuário ${usuario} não está disponível`;
    }
}