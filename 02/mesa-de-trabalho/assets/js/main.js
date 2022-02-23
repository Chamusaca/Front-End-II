var nomeDoUsuario = prompt("Digite o seu nome completo, por favor");

if (nomeDoUsuario == "" || nomeDoUsuario == null) {
    alert("É obrigatório digitar o seu nome");
    var nomeDoUsuario = prompt("Digite o seu nome completo, por favor");
}

var telDoUsuario = prompt("Digite o seu telefone, por favor");

if (telDoUsuario == "" || telDoUsuario == null) {
    alert("É obrigatório digitar o telefone");
    var telDoUsuario = prompt("Digite o seu telefone, por favor");
}

var whatsapp = confirm("O telefone possui whatsapp?");

alert(`Muito obrigado ${nomeDoUsuario}, um de nossos consultores entrará em contato contigo através do número ${telDoUsuario}.`);

console.log(`nome: ${nomeDoUsuario} telefone: ${telDoUsuario} aceita receber mensagem por WhatsApp: ${whatsapp}`);

console.log("Grupo: Pedro Oliveira, Vinicius Evandro, Thalles Denner, Edmar, Taynan Vitor");

