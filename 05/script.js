// Parte I
// 1. Criar um elemento (tags html)
var botao = document.createElement("a");
// 2. Criar um texto
var botaoTexto = document.createTextNode("Ir ao Google");
// 3. Adicionar texto ao elemento
botao.appendChild(botaoTexto);
// 4. Adicionar o elemento ao documento
document.body.appendChild(botao);

// Parte II

// 5. Adicionar atributos e definir seus valores
botao.setAttribute("href", "http://www.google.com");

console.log(document.body);

//6. Revisar como adicionar estilos

botao.classList.add("botao");

/*
    Obs.: Existem outros métodos auxiliares para manipulação de atributos:
    - hasAttribute() -> Retorna se um atributo existe (true) ou não (false) no elemento.
    - getAttribute() -> Retorna o valor do atributo.
    - removeAttribute() -> Remove o atributo.
    - setAttribute() -> Adiciona um atributo e seu respectivo valor desejado.
*/ 