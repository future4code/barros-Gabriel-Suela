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



console.log('Boas vindas ao jogo de Blackjack!')

let comecarJogo = confirm('Quer inciar uma nova rodada?')

let primeiraCartaUsuario = comprarCarta()
let segundaCartaUsuario = comprarCarta()
let primeiraCartaComputador = comprarCarta()
let segundaCartaComputador = comprarCarta()

let pontosUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   
let pontosComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor


if(comecarJogo){
   console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação ${pontosUsuario}`)

   console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - pontuação ${pontosComputador}`)
   if (pontosUsuario > pontosComputador){
      console.log('Você venceu!!!')
   } else if (pontosComputador > pontosUsuario){
      console.log('O computador venceu')
   } else if (pontosUsuario === pontosComputador){
      console.log('O jogo empatou!!!');
   }

} else {
   console.log('O jogo acabou')
}

