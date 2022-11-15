// Exercicio 4
const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda Nasciemento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
];

// Nesta parte eu realizaei o bonus, retornando so o primeiro nome.
//Funcao que busca as pessoas e retorna so o primeiro nome delas.
function buscarNomes() {
    const nomes = pessoas.map((pessoa) => {
        return pessoa.name.split(" ")[0];
    });

    return nomes;
}
// Imprimindo no console
console.log(buscarNomes());
// =================================================================