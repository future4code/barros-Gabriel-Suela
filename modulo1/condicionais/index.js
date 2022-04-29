// Exercícios de interpretação de código

// Questão 1


/* a) O código verifica qual o resto da divisão de um número por outro, neste caso o código verifica se o resto da divisão do número informado pelo usuário dividido por 2 é igual a 0.

b) apenas múltiplos de 2

c) número que não são múltiplos de 2 */

// Questão 2 


 /* a) o código serve para verificar qual o preço da fruta indicada pelo usuário

b)  O preço da fruta  maçã  é  R$  5 

c) O preço da fruta Pêra é R$ 5 */

// Questão 3

/* a) a primeira linha está coletando um número digitado pelo usuário e armazenando em uma variável chamada 'numero'

b) Esse número passou no teste, sem mensagem no log

c) o console indicará erro na variável mensagem, pois ela foi declarada dentro da lógica de condição do if, ou seja, para que a mensagem dela fosse exibida ela deveria ter sido declarada no escopo global*/



// Exercícios de escrita de código

//Questão 1
const idade = Number (prompt('Qual é sua idade?'))

if (idade >= 18 ){
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir')
}


// Questão 2

const turno = prompt ('Digite M (matutino), V(vespertirno) ou N(Noturno) para nos contar em qual período você estuda')

if (turno === 'M'){
    console.log('Bom dia!')
} else if (turno === 'V'){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite')
}

// Questão 3

const turno2 =  prompt ('Digite M (matutino), V(vespertirno) ou N(Noturno) para nos contar em qual período você estuda')

switch (turno2){
    case 'M': 
    console.log('Bom dia!')
    break;
    case 'V':
    console.log('Boa tarde!')
    break;
    case 'N':
    console.log('Boa noite!')
    break;
}

// Questão 4

const filme = prompt ('Qual gênero de filme vocês irão assistir?')

const ingresso = Number (prompt('Qual o valor do ingresso?'))

if (filme === 'fantasia' && ingresso === 15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}

// Desafios

const filme = prompt ('Qual gênero de filme vocês irão assistir?')

const ingresso = Number (prompt('Qual o valor do ingresso?'))

const lanche = prompt('Qual lanche você vai comprar?')

if (filme === 'fantasia' && ingresso === 15) {
    console.log(`Bom filme!
Aproveite o seu ${lanche}`)
} else {
    console.log('Escolha outro filme :(')
}

//2

const nome = prompt('Qual o seu nome?')

const tipoJogo = prompt('Qual é o tipo de jogo? IN = internacional, DO = doméstico')

const etapa = prompt ('Qual etapa do jogo? DT = decisão de terceiro lugar, FI = final')

const categoria = Number(prompt('Qual a categoria?'))

const quantidadeIngressos = Number (prompt('Qual a quantidade de ingressos?'))

let valorIngresso = quantidadeIngressos * 

if(tipoJogo === 'IN' && etapa === 'SF' && categoria === 1){
    mensagem = (`Nome do Cliente: ${nome}
    Tipo do Jogo:${tipoJogo}
    Etapa do jogo:${etapa}
    Categoria:${categoria}
    Quantidade de ingressos: ${quantidadeIngressos} `)
}