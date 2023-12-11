if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Bem-vindo(a) ${userLogado.nome}, acesse o FeraFlix clicando no botão abaixo`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "https://www.figma.com/proto/WVpiEAzhTxmH2iTQeAsWYj?node-id=0-1&mode=design&t=RT1egk7LGD3tu3gO-6";
}
