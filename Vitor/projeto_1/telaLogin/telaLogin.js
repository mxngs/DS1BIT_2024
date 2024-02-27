const nome = document.getEelementById ('nome').value
const senha = document.getEelementById ('senha').value

async function validarLogin(){

      if(nome === '' || senha === ''){
            alert('Por favor, preencha todos os campos!!')
         return false
       }

      try { 
        
//ver a porta antes de colocar a porta - 8080
       const users =await fetch('http://localhost:8080/usuario')


const listUsers = await users.json();

listUsers.forEach((user) => {
 if(nome === user.nome && senha === user.senha){
alert('Usuário logado com sucesso !!')
return true;
}
console.log(user.nome)
})

alert('Usuário não encontrado !!')
return false;

console.log(listUsers);
return true;

} catch (error) {
     alert('Erro ao acessar a API!')
     console.error(error)
}



}