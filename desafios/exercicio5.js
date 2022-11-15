// Exercicio 5
const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda Nasciemento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
];
// Funcao que coloca ID unico aos nomes de cada pessoa.
function inserirId() {
    const pessoasComId = pessoas.map((pessoa, index) => {
        return {
            id: index,
            name: pessoa.name,
            age: pessoa.age,
        };
    });

    return pessoasComId;
}

// Imprimindo no console
console.log(inserirId());
// =================================================================