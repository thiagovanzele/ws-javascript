function randon(max = 50, min = 1) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const comIds = pessoas.map(obj => {
    const newObj = {...obj};
    newObj.id = randon();
    return newObj;
});

console.log(pessoas);
