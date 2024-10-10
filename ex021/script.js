const emailCadastrado = ["thiago@teste", "th@teste"];

const btnEnviar = document.getElementById("botao");

async function verificaEmail(email) {
  return emailCadastrado.includes(email);
}

async function enviarFeedback(dados) {
  const emailVerificado = await verificaEmail(dados.email);

  if (!emailVerificado) {
    exibirFeedback(false);
    return false;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Dados enviados para o Banco: ", dados);
      resolve(true);
    }, 2000);
  });
}

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  capturarEEnviarDados();
});

async function capturarEEnviarDados() {
  const nomeUsuario = document.getElementById("nome").value.trim();
  const emailUsuario = document.getElementById("email").value.trim();
  const feedbackUsuario = document.getElementById("descricao").value;

  const dados = {
    nome: nomeUsuario,
    email: emailUsuario,
    feedback: feedbackUsuario,
  };

  try {
    const resultadoFeedback = await enviarFeedback(dados);
    if (resultadoFeedback) {
      console.log(resultadoFeedback);
      exibirFeedback(true);
    }
  } catch (error) {
    console.error("Erro ao enviar o formulário");
  }
}

function exibirFeedback(validado) {
  const feedbackElement = document.getElementById("feedback");

  if (!validado) {
    feedbackElement.textContent = "Email não cadastrado";
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.textContent = "Feedback enviado";
    feedbackElement.style.color = "green";
  }
}
