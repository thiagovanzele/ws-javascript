const num = Number(prompt('Escolha um número:'));

let numEscolhido = document.getElementById('numero-escolhido');
numEscolhido.innerHTML += num;

let texto = document.getElementById('texto');
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(num)}</p>
<p>${num} é inteiro: ${Number.isInteger(num)}</p>
<p>É NaN: ${Number.isNaN(num)}</p>
<p>Arredondando para baixo: ${Math.floor(num)}</p>
<p>Arredondando para cima: ${Math.ceil(num)}</p>
<p>Com duas casas decimais: ${num.toFixed(2)}</p>`
