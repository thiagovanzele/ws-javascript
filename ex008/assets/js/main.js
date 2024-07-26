const paragrafos = document.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let valor of paragrafos) {
    valor.style.backgroundColor = backgroundColorBody;
    valor.style.color = 'white';
}