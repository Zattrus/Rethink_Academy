// Exercicio 7
const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda Nasciemento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
];
// Funcao que retorna a media de idade das pessoas.
function calcularMediaIdade() {
    const somaIdades = pessoas.reduce((soma, pessoa) => {
        return soma + pessoa.age;
    }, 0);

    const mediaIdades = somaIdades / pessoas.length;

    return mediaIdades.toFixed(2);
}

// Imprimindo no console
console.log(calcularMediaIdade());
// =================================================================