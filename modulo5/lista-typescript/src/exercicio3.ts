enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filmes = {
    nome:string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao? : number
}

function filmsList(nome:string, ano:number, genero:GENERO, pontuacao: number): Filmes{

    
}


