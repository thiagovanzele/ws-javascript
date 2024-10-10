const btnEnviar = document.getElementById("botao").addEventListener("click", (e) => {
    e.preventDefault();
    capturarEEnviarDados();
});

function enviarDadosParaBanco(dados) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Dados enviado para o banco de dados: ', dados);
            resolve('Sucesso');
        }, 3000);
    })
}

async function capturarEEnviarDados() {
    const nomeDoProjeto = document.getElementById("nome").value.trim();
    const descricaoProjeto = document.getElementById("descricao").value;

    if (!nomeDoProjeto || !descricaoProjeto) {
        feedback.textContent = 'Nome do projeto e descrição são obrigatórios';
        feedback.style.color = 'red';
        return;
    }

    const dados = {
        nome: nomeDoProjeto,
        descricao: descricaoProjeto,
    }

    try {
        const resultado = await enviarDadosParaBanco(dados);
        feedback.textContent = 'Dados enviados para o banco';
        feedback.style.color = 'green';
        console.log(resultado);
    } catch (error) {
        feedback.textContent = "Erro ao enviar os dados.";
        feedback.style.color = "red";
    }

    document.getElementById("nome").value = '';
    document.getElementById("descricao").value = '';

}

