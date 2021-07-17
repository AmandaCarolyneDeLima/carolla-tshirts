//-----Confrm-----

let mensagem;
let retorno = confirm("Que bom ter você aqui!");

if (retorno == true) {
    mensagem = "Fique a vontade para escolher a t-shirt que mais lhe agradou :)"
} else {
    mensagem = "Ainda tem chances de escolher a sua! Fica a vontade!"
}

document.write(mensagem);

//----------


//-----Alert-----
//-----setInterval-----

setInterval(function () {
    window.location.reload();
    window.alert(" A página foi recarregada, confira as atualizações!");
}, 900000); //15min

//----------


//-----inline-----

function load() {
    alert("Uma dica: não esqueça de anotar o código da(s) t-shirt(s) escolhida(s).")
}

//----------