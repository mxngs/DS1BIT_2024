async function validarLogin(){

      const nome = document.getElementById('nomeInput').value
      const senha = document.getElementById('senhaInput').value
            
      if(nome === '' || senha === ''){
          alert('Por favor, preencha todos os campos!!')
          return false;
      }
  
      try {
  
          const users = await fetch('http://localhost:5080/usuario');
  
          const listUsers = await users.json();

          listUsers.forEach((user) => {
            console.log(user)
              if(nome == user.nome && senha == user.senha){
                 
                  alert('Usuário Logado com Sucesso !!');
                  window.location.href = '../telaTimeLine/timeLine.html'
              }
          })
      } catch (error) {
          alert('Erro ao acessar a API !')
          console.error(error);
      }
  
  }