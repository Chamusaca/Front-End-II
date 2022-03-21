// Grupo - Alexandre de Oliveira, Vinicius Evandro, Wellington Siqueira, Thalles Denner, Pedro Oliveira

// 1. Seleção do formulário
var formulario = document.querySelector("#formularioDeCadastro");

// 2. Captura o evento de envio do formulário e disparar a rotina
formulario.addEventListener("submit", function (evento) {

    var item = evento.target[0].value;
    evento.preventDefault();

// 2.1. Remova todos os espaços vazios
    var itemSemEspacos = item.replace(/\s/g, "");

// 2.2. Remova todos os números permitindo apenas texto
    var itemSemNumeros = itemSemEspacos.replace(/\d/g, "");

// 3.1. Apresentar o item no elemento DOM `<li class="c-lista__item">`.
    var elemento = document.querySelector(".c-lista__item");
    elemento.innerText = itemSemNumeros;
    alert(itemSemNumeros);
});