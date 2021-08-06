'use strict';

/**-----Prompt-----
-----setTimeOut-----
-----Função aninhada/local-----
-----Tradicional---onload-----
-----String template-----*/

let nome = prompt('Digite seu nome, por favor:", "nome');

window.onload = function () {
    setTimeout(function () {
        window.alert(`Olá ${nome}, seja bem vinda a nossa página!`);
    }, 100);
};

//----------

/**-----Evento de movimento do mouse-----
-----Funcão com nome-----
-----Função sem argumento-----
-----Via seletores CSS usados na função querySelector() ou querySelectorAll()-----*/

function mouseOver() {

    document.querySelector("#button").innerHTML = 'Clique aqui para ir para a tela de cadastros.';
}

//----------