import  express, { Request, Response} from 'express'

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())




//1)
app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//2)
type Users = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}

// 3)

const users:Users[]= [
    {
        id: 'dsaklç3i21',
        name: 'Carlos',
        phone: 21994074027,
        email:'carlos.bolinha@gmail.com',
        website: 'carlos.com'
    },
    {
        id: '3043u28423uj',
        name: 'Gabriel',
        phone: 214447776609,
        email:'gbriel@gmail.com',
        website: 'gabriel.com'
    },   {
        id: '4jksladsjklw',
        name: 'João',
        phone: 167775556663,
        email:'joão@gmail.com',
        website: 'joão.com'
    },   {
        id: '3rtafdsafd',
        name: 'Lula',
        phone: 131313131313,
        email:'lula.presidente@gmail.com',
        website: 'lula13.com'
    },
]

//4)

app.get('/users', (req:Request, res:Response)=>{
    if(!users.length){
        res.status(401).send('Não foram encontrados usuários')
    }

    res.status(200).send(users)
})

// 5)

type Posts = {
    id: string,
    title: string,
    body: string,
    userId: string 
}

//6

const posts: Posts[] = [
{
    id:'3e12koeskalç',
    title:'Como se tornar um ótimo programador',
    body: 'Siga essas dicas e se torne o melhor programador do mundo',
    userId: '4jksladsjklw'
},
{
    id:'dfsajkej32jk234jk23l',
    title:'Como ficar rico',
    body: 'Siga essas dicas e se torne a pessoa mais rica do mundo',
    userId: '3043u28423uj'
},{
    id:'rhewufdshjfdsjk',
    title:'Como cozinhar bem',
    body: 'Siga essas dicas e se torne o melhor cozinheiro do mundo',
    userId: 'dsaklç3i21'
},{
    id:'3e12koeskalç',
    title:'Como se tornar um ótimo presidente',
    body: 'Siga essas dicas e se torne o melhor presidente do mundo',
    userId: '3rtafdsafd'
},
]

//7)

app.get('/posts', (req:Request, res:Response) =>{
    if(!posts.length){
        res.status(401).send('Não temos nenhum post')
    }

    res.status(200).send(posts)
})


//8)

app.get('/posts/:id', (req:Request, res:Response)=>{

    let user = req.params.userId

    const allPosts = posts.filter((post)=>{
        return post.userId == user
    })

    if(!user){
        return res.status(400).send('Digite um userId válido')
    } else if (posts.length === 0){
        return res.status(400).send('Este usuário não tem posts')
    }

    res.status(200).send(allPosts)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});