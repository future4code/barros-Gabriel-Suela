// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const index = function(a,b){
    return a - b
   }
    return array.sort(index)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numeroPar = []
    for (let numerosPares of array){
        if ((numerosPares % 2 === 0)){
            numeroPar.push(numerosPares)
        }
    }
    return numeroPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let parr = []
    for (let pares of array){
        if ((pares % 2 === 0)){
            parr.push(pares ** 2)
        }
    }
    return parr 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const arr = array
  const max = arr.reduce(function(a,b){
      return Math.max(a, b)
  })
  return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    //const maior = Math.max(num1, num2)
    //return maior
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const numeroPar = []
    for (let i = 0; numeroPar.length < n; i++){
        if (i % 2 == 0){
            numeroPar.push(i)
        }
    }
   return numeroPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)){
        if (ladoA == ladoB && ladoB == ladoC){
            return 'Equilátero'
        } else if ( ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
            return 'Isósceles'
        } else {
            return 'Escaleno'
        }
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const novoNome = {
      ...pessoa,
      nome: 'ANÔNIMO'
  }
  return novoNome
  
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const podemEntrar = []
    for (let pessoa of pessoas){
        if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
            podemEntrar.push(pessoa)
        }
    }
    return podemEntrar
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoPodemEntrar = []
  for (let pessoa of pessoas){
      if( pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60){
          naoPodemEntrar.push(pessoa)
      }
  }
  return naoPodemEntrar
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}