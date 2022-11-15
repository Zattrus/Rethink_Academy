// Exercicio 3
const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda Nasciemento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
];
// Funcao que busca o nome da pessoa por parametro.
function buscarPessoa(name) {
    const pessoa = pessoas.find((pessoa) => {
        return pessoa.name === name;
    });

    return pessoa;
}
// Imprimindo no console
console.log(buscarPessoa("Fabiana Araújo"));
console.log(buscarPessoa("Gabriel Gomes"));

// =================================================================