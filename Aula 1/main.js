// var pessoa = prompt('Digite seu nome!')

//  var confirmacao = confirm('Posso mostrar o seu nome na tela?')

//  if (confirmacao === true) {
//     alert(`Seu nome é ${pessoa}`)
//  } else {
//     alert("Você não autorizou!")
//  }

var email = prompt("Digite o seu email!")

var senha = prompt("Digite a sua senha!")

var show = confirm(`esta correto o seu email: ${email} e a sua senha: ${senha}?`)

if (show === true) {
   document.write("Bem vindo a o Mundo!")
} else (
   alert("Tente novamente!")
)