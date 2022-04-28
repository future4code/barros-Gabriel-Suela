// -----Exercícios de interpretação de código-----

//a)

//Matheys Nachtergaele, Virginia Cavendish, canal: 'Globo', horario: '14h'

// Questão 2


//a)
//nome: 'Juca', idade: 3, raca: 'SRD'
//nome: 'Juba', idade: 3, raca: 'SRD'
//nome: 'Jubo', idade: 3, raca: 'SRD'



//Questão 3

//a) false, undefined

//b) o valor false está sendo retornado devido a atribuição false para o objeto backender, já o valor undefined está sendo retornado pois não existe o objeto altura dentro da const pessoa


//----Exercícios de escrita de código----

// Questão 1


const pessoa = {
    nome: 'Gabriel',
    apelidos: ['Suela ', 'Biel ', 'Gab ']
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`) 


 const novosApelidos = [...pessoa.apelidos]

novosApelidos.push('bielen ', 'suelito ', 'cabeça ')

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novosApelidos}`)

// Questão 2


const objeto1 = {
    nome:'Gabriel',
    idade: 25,
    profissao:'Programador',
}

const objeto2 = {
    nome: 'Thays',
    idade: 28,
    profissao: 'Professora'
}

function entregarArray(obj1, obj2){
    const arrayDeRetorno = [obj1.nome, obj1.nome.length, obj2.nome, obj2.nome.length, obj1.idade, obj2.idade, obj1.profissao, obj1.profissao.length, obj2.profissao, obj2.profissao.length]
    return arrayDeRetorno
}


console.log(entregarArray(objeto1, objeto2))



// Questão 3
const carrinho = []

const fruta1 = {
    nome:'Abacaxi',
    disponibilidade: true

}

const fruta2 = {
    nome:'Pêra',
    disponibilidade: false
}

const fruta3 = {
    nome: 'Laranja',
    disponibilidade: false
}

function sacolao (fruta){
    carrinho.push(fruta)
}

sacolao(fruta1)
sacolao(fruta2)
sacolao(fruta3)

console.log(carrinho);
