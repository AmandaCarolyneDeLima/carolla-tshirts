//-----setTimeOut-----
//-----Função auto-executável-----
//-----Passagem de função como parâmetro-----
//-----Onload-----

window.onload = function () {
    setTimeout(function () {
        window.alert("Não esqueça de preencher todos os campos!");
    }, 2000);
};

//----------

//-----Onfocus e Onblur-----
//-----getElementById()-----
//-----Função com argumento-----
//-----Função com retorno-----
//-----addEventListner-----
//-----Função flecha-----

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

//-----Laço de repetição-----

let enviar = $("button");
enviar.addEventListener("click", () => {
    let tamanhos = document.formCadastro.tamanho;
    let tamanhoEscolido;

    for (let i = 1; i < tamanhos.length; i++) {
        if (tamanhos.options[i].selected) {
            tamanhoEscolido = tamanhos.options[i].value;
        }
    }
    if (tamanhoEscolido == undefined) {
        window.alert("Selecione seu tamanho!")
    } else {
        window.confirm(`Seu tamanho escolhido foi: ${tamanhoEscolido}`);
    }
})

//----------