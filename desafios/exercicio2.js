// Exercicio 2
const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda Nasciemento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
];

// Executando a funcao no console do navegador

// Adcionando pessoas
pessoas.push({ name: "João da Silva", age: 45 });
pessoas.push({ name: "Maria da Silva", age: 55 });

// Removendo pessoas
pessoas.splice(0, 1);

// Ordenando pessoas
pessoas.sort((a, b) => {
    return a.age - b.age;
});

// Filtrando pessoas
const pessoasMaiores = pessoas.filter((pessoa) => {
    return pessoa.age >= 18;
});

// Imprimindo no console
pessoas.forEach((pessoa) => {
    console.log(`Nome: ${pessoa.name} \nIdade: ${pessoa.age}`);
});
// =================================================================