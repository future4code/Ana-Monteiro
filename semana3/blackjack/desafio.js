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

let usuarioPontos = []

let pcPontos = []

console.log("Olá, seja bem-vindox(ax) ao jogo BLACKJACK! UHULLLL, É NÓS PARCERO(A)!")
/*inicia a rodada*/

if (confirm("Nova rodada, partiu?")) {
      /*Compra cartas*/

const primeirissimaCartaUsuario = comprarCarta()
const segundissimaCartaUsuario = comprarCarta()
const primeirissimaCartaPc = comprarCarta()
const segundissimaCartaPc = comprarCarta()


   usuarioPontos = primeirissimaCartaUsuario.valor + segundissimaCartaUsuario.valor
   pcPontos = primeirissimaCartaPc.valor + segundissimaCartaPc.valor

  /* Questão 8*/

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
  /*Questão 9 e 10*/

   if (confirm(
      (`Suas cartas são: ${primeirissimaCartaUsuario.texto} ${segundissimaCartaUsuario.texto}. A carta revelada do
      computador é ${ primeirissimaCartaPc.texto} "\n" Deseja comprar mais uma carta?`))

         let novaCarta = comprarCarta
         let cartasCompradasEscrita = [novaCarta.texto]
         let cartasCompradas = [novaCarta]

         while (usuarioPontos < 21 && confirm(`Suas cartas são ${primeirissimaCartaUsuario} ${segundissimaCartaUsuario.texto} ${cartasCompradas.texto}
         A carta revelada do pc é ${primeirissimaCartaPc.texto} Compra mais uma carta?`)){
            novaCarta = comprarCarta()
            cartasCompradasEscrita.push(novaCarta.texto)
            cartasCompradas.push(novaCarta)
            for (let cartaComprada of cartasCompradas)
            usuarioPontos += cartaComprada.valor
         }
      }
   
   /*Parte para imprimir se venceu ou ganhou*/

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
   
   
