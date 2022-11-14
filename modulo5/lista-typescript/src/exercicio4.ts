
type Pessoas = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}


const saldos = [
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

enum SETOR {
	MARKETING="marketing",
	VENDAS="vendas",
	FINANCEIRO="financeiro"
}



function verificarSaldo (saldos:Pessoas[]) {
    const saldoFiler = saldos.filter((item, index)=> {
        if (item.setor === "marketing"){
            return console.log(saldoFiler); 
        }
    })
}





