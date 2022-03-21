
// 1. Seleção do formulário
var formulario = document.querySelector("#formularioDeCadastro");

// 2. Captura o evento de envio do formulário e disparar a rotina
formulario.addEventListener("submit", function (evento) {

    // Captura o valor do input
    var item = evento.target.value;

    // Removi os espaços
    var itemSemEspacos = item.replace(/\D/g, "");

    // Removi os caracteres especiais e letras
    //var itemSemNumeros = itemSemEspacos.replace(/\d/g, "");

    // Apresento o valor a partir de um popup alert()
    alert(itemSemEspacos);
    //alert(itemSemNumeros);
    
    
});