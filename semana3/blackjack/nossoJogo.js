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

 /*Resposta
 
 console.log("Olá, seja bem-vindox(ax) ao jogo BLACKJACK! UHULLLL, É NÓS PARCERO(A)!")

 let usuarioPontos

 let pcPontos

 if ( confirm("Nova rodada, partiu?")){
    // sorteando cartas usuario
    // sorteando cartas para o pc
    // resultado()

    const primeirissimaCartaUsuario = comprarCarta()
    const segundissimaCartaUsuario = comprarCarta()
    const primeirissimaCartaPc = comprarCarta()
    const segundissimaCartaPc = comprarCarta()

    usuarioPontos = primeirissimaCartaUsuario.valor + segundissimaCartaUsuario.valor
    console.log(`Você usuário tirou: ${primeirissimaCartaUsuario.texto} ${segundissimaCartaUsuario.texto} : pontuando: ${usuarioPontos}`)

    pcPontos = primeirissimaCartaPc.valor + segundissimaCartaPc.valor
    console.log(`Pc : Cartas tiradas - ${primeirissimaCartaPc.texto} ${segundissimaCartaPc.texto} - pontuando: ${pcPontos}`)

    if ( usuarioPontos > pcPontos ){
       console.log("PARABÉNS USUÁRIO(A), YOU WIN!")
    } else if ( usuarioPontos < pcPontos ){
       console.log("Máquina WINS, SORRY :(")
    } else {
       console.log("EMPATOUUUUUUUU")
    }
 } else{
    console.log("O JOGO ACABOUU :( ")
 }*/