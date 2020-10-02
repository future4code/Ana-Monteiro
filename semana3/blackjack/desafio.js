/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Olá, seja bem-vindox(ax) ao jogo BLACKJACK! UHULLLL, É NÓS PARCERO(A)!")

let usuarioPontos

let pcPontos

const primeirissimaCartaUsuario = comprarCarta()
const segundissimaCartaUsuario = comprarCarta()
const primeirissimaCartaPc = comprarCarta()
const segundissimaCartaPc = comprarCarta()

if (confirm("Nova rodada, partiu?")) {
   // sorteando cartas usuario
   // sorteando cartas para o pc
   // resultado()


   usuarioPontos = primeirissimaCartaUsuario.valor + segundissimaCartaUsuario.valor
   pcPontos = primeirissimaCartaPc.valor + segundissimaCartaPc.valor

   if ((primeirissimaCartaUsuario === "A") && (segundissimaCartaUsuario === "A")) {

      const primeirissimaCartaUsuario = comprarCarta()
      const segundissimaCartaUsuario = comprarCarta()
      console.log(`${primeirissimaCartaUsuario.texto} + ${segundissimaCartaUsuario.texto} :pontuando: ${usuarioPontos}`)
      console.log("Sortear novamente! =( ")

   } else if ((primeirissimaCartaPc === "A") && (segundissimaCartaPc === "A")) {
      
      const primeirissimaCartaPc = comprarCarta()
      const segundissimaCartaPc = comprarCarta()
      console.log(`${primeirissimaCartaPc.texto} + ${segundissimaCartaPc.texto} :pontuando: ${usuarioPontos}`)
      console.log("Sortear novamente! =(")
   }
}

   confirm(
      (`Suas cartas são: ${primeirissimaCartaUsuario.texto} ${segundissimaCartaUsuario.texto}. A carta revelada do
      computador é ${ primeirissimaCartaPc.texto} "\n" Deseja comprar mais uma carta?`)
   )
   
   if (usuarioPontos > pcPontos) {
      console.log("PARABÉNS USUÁRIO(A), YOU WIN!")
   } else if (usuarioPontos < pcPontos) {
      console.log("Máquina WINS, SORRY :(")
   
   } else if ( usuarioPontos === pcPontos ){
      console.log("EMPATOUUUUUUUU")
   }
      else{
         console.log("O JOGO ACABOUU :( ")
      }
   
   
