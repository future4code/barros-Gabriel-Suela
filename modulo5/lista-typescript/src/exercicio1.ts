
function data(nome:string, data:string ){
    let dados = data.split('/')
    console.log(`"Olá me chamo ${nome}, nasci no dia ${dados[0]} do mês de ${dados[1]} do ano de ${dados[2]}" `);
    
}

data("Gabriel", "28/07/1997")