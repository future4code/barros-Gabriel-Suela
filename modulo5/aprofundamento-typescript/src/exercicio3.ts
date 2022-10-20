type Post = {
    autor: string,
    texto: string
}

const posts:Post[]  =  [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

//b) as entradas são 2 strings e a saida também

  function buscarPostsPorAutor(posts:any, autorInformado:string) {
    return posts.filter(
      (post:Post) => {
        return post.autor === autorInformado
      }
    )
  }