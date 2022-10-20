type Estatistica = {
    number: number
}

type amostraDeDados = {
    numeros: number,
    obterStatistica: any
}

function obterEstatisticas(numeros:number):Estatistica => {
	maior:number,
	menor:number,
	media:number
}

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//a) entradas são dois números e a saída é um array