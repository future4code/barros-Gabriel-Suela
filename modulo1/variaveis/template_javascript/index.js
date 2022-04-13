// Exercícios de interpretação de código

/*1 - no primeiro console.log irá ser exibido o valor da constante b que em primeiro momento é igual a 10. Já no segundo console.log irá exibir o valor das constantes a e b, sendo que o valor de b foi alterado para 5, Dessa forma teremos na exibição 10 e 5*/

/*2- No console.log irão aparecer os 3 valores das variáveis a, b e c como 10. Pois mesmo que em primeiro momento a variável b tenha tido o valor atribuido de 20, nas linhas seguintes existe uma lógica, onde o valor da variável C será igual o valor da variável A, e consequentemente o valor da variável b será igual ao valor da variável c. Fazendo desta forma todas as variáveis terem o mesmo valor de atribuição.*/

/*3- O programa em questão traz ao usuário a possibilidade de inserir os dados em pop up's por conta do comando "prompt". Ao coletar esses dados que foram digitados pelo usuário, o programa faz um calculo de dívisão entre o valor da variável 1 e o valor da variável 2, para poder achar uma média entre esses valores e exibir esse resultado.  Como sugestão de mudança de nomes de variáveis deixaria dessa forma: 

let horasTrabalho = prompt("Quantas horas você trabalha por dia?");
let valorRecebidoDia = prompt("Quanto você recebe por dia?");
alert(`Voce recebe ${horasTrabalho/valorRecebidoDia} por hora`);*/

//Exercícios de escrita de código

//Questão 1
let nome
let idade

console.log(typeof nome, idade)

//no console irá aparecer undefined pois não foi atribuído nenhum valor para as variáveis em questão.

let nomeUsuario = prompt('Qual o seu nome?');
let idadeUsuario = prompt('Qual a sua idade?');

//primeiramente ao usar o mesmo nome de variável ocorreu um erro pois a variável já havia sido declarada anteriormente. após isso, declarei a variável com outro nome e dessa forma o erro foi corrigido.

//alert(`Olá ${nomeUsuario}, você tem ${idadeUsuario} anos`);

// Questão 2

let roupaAzul = "sim"
let cansado = "sim"
let fome = "não"

let perguntaUm = prompt('Você está usando uma roupa azul hoje?  - SIM ');
let perguntaDois = prompt('Você está cansado hoje? - SIM ');
let perguntaTres = prompt('Você está com fome agora? - NÃO');

console.log(roupaAzul, cansado, fome);

// Questão 3

let a = 10
let b = 25


c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10