// --- Exercícios de interpretação ---

// --- Exercícios de escrita ---

// Questão 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //Item A

const nomesDogs = pets.filter((item) => {
    console.log(item.nome)
})

//Item B

const nomeSalsicha = pets.filter((item)=>{
    if(item.raca === 'Salsicha'){
        return item.nome
    }  
})
console.log(nomeSalsicha)

// Item C

const nomePoodle = pets.filter ((item) =>{
    if(item.raca === 'Poodle'){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
    }
})


// Questão 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


//Item A
const nomeProdutos = produtos.filter((produto) => {
    console.log(produto.nome)
})

//Item B

// Item C
const nomeBebidas = produtos.filter ((item) => {
    if (item.categoria === 'Bebidas'){
        return item.nome
    }
})
console.log(nomeBebidas)

//Item D
const nomeYpe = produtos.filter ((item) =>{
    if (item.nome.includes('Ypê')){
        return item.nome
    }
})

console.log(nomeYpe)

//Item E
const fraseYpe = produtos.filter ((item) =>{
    if (item.nome.includes('Ypê')){
        console.log(`compre ${item.nome} por R$ ${item.preco}`)
    }
})

// --- Desafios ---

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const ordem = pokemons.sort()

const nomesOrdem = ordem.filter((item) => {
    return item.nome
})

console.log(nomesOrdem)

//Item B
for (tipos of pokemons){
    
}