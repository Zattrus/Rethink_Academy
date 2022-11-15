// Exercicio 6
const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda Nasciemento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
];
// Funcao que retorna pessoas maiores de 18 anos, se for maior elas podem ter habilitacao.
function buscarPessoasParaHabilitacao() {
    const pessoasParaHabilitacao = pessoas.filter((pessoa) => {
        return pessoa.age >= 18;
    });

    return pessoasParaHabilitacao;
}

// Imprimindo no console
console.log(buscarPessoasParaHabilitacao());
// =================================================================