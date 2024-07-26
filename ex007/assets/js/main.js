const elementos = [
    {tag: 'p', texto: 'Uma outra frase'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    const elemento = document.createElement(tag);
    elemento.textContent = texto;
    div.appendChild(elemento);
}

container.appendChild(div);