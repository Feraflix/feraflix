function entrar() {
  let usuario = document.querySelector('#usuario');
  let userLabel = document.querySelector('#userLabel');

  let senha = document.querySelector('#senha');
  let senhaLabel = document.querySelector('#senhaLabel');

  let msgError = document.querySelector('#msgError');
  let listaUser = [];

  let userValid = {
      nome: '',
      user: '',
      senha: ''
  };

  // Certificar-se de que listaUser não é nula e é um array
  listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

  if (Array.isArray(listaUser)) {
      listaUser.forEach((item) => {
          if (usuario.value == item.userCad && senha.value == item.senhaCad) {
              userValid = {
                  nome: item.nomeCad,
                  user: item.userCad,
                  senha: item.senhaCad
              };
          }
      });
  } else {
      console.error('A lista de usuários não é um array ou é nula.');
      return; // Sair da função se a lista de usuários não for válida
  }

  if (usuario.value == userValid.user && senha.value == userValid.senha) {
      window.location.href = '../../index.html';

      let mathRandom = Math.random().toString(16).substr(2);
      let token = mathRandom + mathRandom;

      localStorage.setItem('token', token);
      localStorage.setItem('userLogado', JSON.stringify(userValid));
  } else {
      userLabel.setAttribute('style', 'color: red');
      usuario.setAttribute('style', 'border-color: red');
      senhaLabel.setAttribute('style', 'color: red');
      senha.setAttribute('style', 'border-color: red');
      msgError.setAttribute('style', 'display: block');
      msgError.innerHTML = 'Usuário ou senha incorretos';
      usuario.focus();
  }
}


