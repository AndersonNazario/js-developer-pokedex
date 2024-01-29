console.log("Teste")

//let nome = document.getElementById("nome").value;

console.log(nome)
var info
document.getElementById("infoForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado normalmente

  // Captura a informação do campo de entrada
  info = document.getElementById("nome").value;

  console.log(info)

  document.getElementById("nome").value = "";
});


