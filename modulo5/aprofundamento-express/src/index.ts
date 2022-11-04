import  express , {Response, Request}from "express";

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


//1)

app.get("/ping", (req:Request, res:Response)=>{
    res.send('pong')
})

//2)

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//3)

const todoList:Todo[] = [
    {
        userId: 1,
        id: 11,
        title:'Lavar louça',
        completed: false
    },    {
        userId: 2,
        id: 22,
        title:'Lavar casa',
        completed: false
    },    {
        userId: 3,
        id: 33,
        title:'Estudar',
        completed: true
    },    {
        userId: 4,
        id: 44,
        title:'Trabalhar',
        completed: true
    },
]

//4)

app.get('/todos/completed/:isCompleted', (req:Request, res:Response)=>{

    let isCompleted:any = req.params.isCompleted

    if(isCompleted === 'true'){
        isCompleted = true
    } else if (isCompleted === 'false'){
        isCompleted = false
    } else {
        res.send('O path param deve ser true ou false')
    }

    const results = isCompleted.filter((todos:Todo)=>{
        const result = []
        if (todos.completed === isCompleted){
            result.push(todos)
        }
    })
    res.send(results)
})

//5)

app.post("/todos", (req:Request, res:Response)=>{
    const userId = req.body.userId
    const title = req.body.title

    const newTodo:Todo = {
        userId,
        id:Date.now(),
        title,
        completed:false
    }

    todoList.push(newTodo)

    res.send(todoList)
})

//6)

app.put("todos/:id/completed",(req:Request, res:Response)=>{
    const id = Number(req.params.id)

    for (let todo of todoList){
        if(todo.id === id){
            todo.completed = !todo.completed
        }
    }

    res.send(todoList)
})

//7

app.delete('/todos/:id', (req:Request, res:Response)=>{
    const id = Number(req.params.id)

    const todos = todoList.map((todo)=>{
        if(todo.id === id){
            todoList.splice(1)
        }
    })

    res.send(todos)
})

//8)

app.get("/todos/:id", (req:Request, res:Response)=>{
    const userId = Number(req.params.userId)

    const result = todoList.filter((todo)=>{
        if(todo.userId === userId){
            result.push(todo)
        }
    })

    res.send(result)
})