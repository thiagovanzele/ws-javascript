const btnEnviar = document.querySelector(".btn-enviar");

function verificaEmail(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const emailsCadastrados = ['thiago@teste.com', 'tamires@teste.com'];
            resolve(!emailsCadastrados.includes(email));
        }, 2000);
    })
}

btnEnviar.addEventListener("click", async (e) => {
    const emailEnviado = document.querySelector(".email").value;
    e.preventDefault();

    if (emailEnviado.trim() !== "") {
        try {
            const emailDisponivel = await verificaEmail(emailEnviado);
            exibirFeedback(emailDisponivel, emailEnviado);
        } catch (error) {
            console.error('Erro ao veririficar disponibilidae do email');
        }
    }
})

function exibirFeedback(disponibilidade, email) {
    const feedbackElement = document.getElementById("feedback");
    if (disponibilidade) {
        feedbackElement.innerText = `O email ${email} está disponível para uso`;
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.innerText = `O email ${email} não está disponível para uso`;
        feedbackElement.style.color = 'red';
    }
}