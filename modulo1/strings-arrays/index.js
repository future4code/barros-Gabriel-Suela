// Exercicios de interpretação
//1 -
// a. Undefined
// b. null
// c. 11
// d. 3
// e. [3, 19,  5,  6,  7, 8,  9, 10, 11, 12, 13]
// f. 9

// 2 - SUBI NUM ONIBUS EM MIRROCOS

// Exercícios de escrita
const emailDoUsuario = prompt("Digite seu e-mail");
const nomeDoUsuario = prompt("Digite seu nome");

console.log(
  `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeDoUsuario}`
);

const listaComidas = ["arroz", "feijão", "farofa", "hamburger", "pizza"];

// a)
console.log(listaComidas);

//b)
console.log(`Essas são as minhas comidas preferidas: ${listaComidas}`);

//c)
const comidaUsuario = prompt("Qual sua comida preferida?");

const index = listaComidas.indexOf("feijão");
if (index !== -1) {
  listaComidas[index] = comidaUsuario;
}

console.log(listaComidas);

//3-

//a)
const listaDeTarefas = [];
const tarefas1 = prompt("Digite uma tarefa do dia a dia");
const tarefas2 = prompt("Digite uma tarefa do dia a dia");
const tarefas3 = prompt("Digite uma tarefa do dia a dia");
//b)
listaDeTarefas.push(tarefas1, tarefas2, tarefas3);
//c)
console.log(listaDeTarefas);
//d)
const index = prompt(
  "Digite o índice de uma tarefa que já realizou: 0, 1 ou 2"
);
//e)
const remover = listaDeTarefas.splice(index);
//f)
console.log(remover);

//Desafios

//  const frase = 'Que belo dia este'
//  const arr = Array.from(frase);
//  console.log(arr)

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const index = frutas.indexOf("Abacaxi");
console.log(`Index de Abacaxi = ${index}, Tamanho do array = ${frutas.length}`);
