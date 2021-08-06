'use strict';

/**-----setTimeOut-----
-----Função auto-executável-----
-----Passagem de função como parâmetro-----
-----Onload-----*/

window.onload = function () {
    setTimeout(function () {
        window.alert('Não esqueça de preencher todos os campos!');
    }, 2000);
};

//----------

/**-----Onfocus e Onblur-----
-----getElementById()-----
-----Função com argumento-----
-----Função com retorno-----
-----addEventListner-----
-----Função flecha-----*/

let $ = function (id) {
    return document.getElementById(id);
}

function entrar() {
    $("inputName").style.backgroundColor = "#F5DEB3";
}

let sair = () => {
    $("inputName").style.backgroundColor = "";
}

$("inputName").addEventListener("blur", sair);

//----------

//-----Laço de repetição - forEach-----

let enviar = $("button");
enviar.addEventListener("click", () => {
    let tamanhos = document.formCadastro.tamanho;
    let tamanhoEscolido;

    Array.apply(null, tamanhos.options).forEach((element) => {
        console.log(element.selected);
        if (element.selected) {
            tamanhoEscolido = element.value;
        }
        console.log(tamanhoEscolido);
    })

    if (tamanhoEscolido.length > 1) {
        window.alert("Selecione seu tamanho!")
    } else {
        window.confirm(`Seu tamanho escolhido foi: ${tamanhoEscolido}`);
    }
});

//----------


//-----Customização de mensagens-----

function preencherCodigo() {
    $('inputCodigo').setCustomValidity('Esse campo precisa ser preenchido!');
}

//----------


//-----Ler e escrever em elementos input com a propriedade value-----

$('inputEndereco').value = 'Rua: ';

//----------


//-----Validação de formulário com onsubmit usando metodo tradicional-----
//-----Ler e escrever em elementos input com a propriedade value-----

$('form-cadastro').addEventListener('submit', (event) => {
    if (!event.target[0].value) alert('O campo NOME precisa ser preenchido!');
})

//----------


//-----Alterar conteudo de elementos usando innerHTML-----
//-----Manipulação de elemento de listagem-----
//-----Acesso aos elementos via hierarquia-----

$('form-cadastro').addEventListener('change', (event) => {
    let form = $('form-cadastro');
    $('revisaoDoCadastro').innerHTML = `
    Revisão do cadastro: <br>
    Nome do cliente: ${form[0].value} <br>
    Tamanho do item: ${form[1].value.length > 1 ? "Não selecionado" : form[1].value} <br>
    Código da t-shirt escolhida: ${form[2].value} <br>
    Endereço para entrega: ${form[3].value} <br>
    `
});

//----------