const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const profissao = document.getElementById("profissao");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const dataPreenchiemnto = document.getElementById("dataPreenchiemnto");

const enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {

    alert(`Cadastro realizado com sucesso! \n
    Nome: ${nome.value} \n
    Idade: ${idade.value} \n
    Profissão: ${profissao.value} \n
    Email: ${email.value} \n
    Telefone: ${telefone.value} \n
    Data de preenchimento: ${dataPreenchiemnto.value}`);
});

