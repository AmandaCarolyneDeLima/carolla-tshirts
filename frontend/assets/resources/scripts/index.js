'use strict';

/**-----Prompt-----
-----setTimeOut-----
-----Tradicional---onload-----
-----String template-----
-----LocalStorage-----
-----Leitura e escrita de dados simples (tipos primitivos)-----*/

let nome;
if (!localStorage.getItem('nome')) {
    nome = prompt('Digite seu nome, por favor:', 'nome');
    localStorage.setItem('nome', nome);

} else {
    nome = localStorage.getItem('nome');
}

//Leitura e escrita de JSON//

window.onload = function () {
    setTimeout(function () {
        window.alert(`Olá ${nome}, seja bem vinda a nossa página!`);
        if (localStorage.getItem('ultimoAcesso')) {
            let ultimoAcesso = JSON.parse(localStorage.getItem('ultimoAcesso'));
            window.alert(`Seu ultimo acesso foi dia ${ultimoAcesso.dia} do mês ${ultimoAcesso.mes} de ${ultimoAcesso.ano}, às ${ultimoAcesso.hora} horas e ${ultimoAcesso.minuto} minutos.`);
        }
    }, 100);
};

let agora = new Date();
let acesso = {
    dia: agora.getDate(),
    mes: agora.getMonth() + 1,
    ano: agora.getFullYear(),
    hora: agora.getHours(),
    minuto: agora.getMinutes()
};

localStorage.setItem('ultimoAcesso', JSON.stringify(acesso));

//----------

/**-----Evento de movimento do mouse-----
-----Funcão com nome-----
-----Via seletores CSS usados na função querySelector() ou querySelectorAll()-----*/

function mouseOver() {

    document.querySelector("#button").innerHTML = 'Clique aqui para ir para a tela de cadastros.';
}

//----------