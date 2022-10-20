const minhaString: string = 5

// a) acusa um erro mostrando que um valor do tipo number não pode ser atribuido a variável tipada por string

const meuNumero: number | string = "oi"

//  b) utilizando o union types


type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const newObject: Pessoa =  {
    nome: "Gabriel",
    idade: 28,
    corFavorita: "Verde"
}

const newObject2: Pessoa = {
    nome: "Thays",
    idade: 29,
    corFavorita: "Azul"
}

const newObject3: Pessoa = {
    nome: "João",
    idade: 22,
    corFavorita: "Amarelo"
}