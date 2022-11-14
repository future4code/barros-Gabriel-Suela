import express, {Request, Response} from "express"
import cors from "cors"
import {produtos} from "../src/data"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, ()=>{
    console.log("Servidor rodando em localhost:3003");
    
})

//1
app.get("/test", (req:Request, res:Response) => {
    return console.log('Servidor rodando na porta 3003');
})

//4)

app.post('/produto', (req:Request, res:Response)=>{
    
})