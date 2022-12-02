import express, {Request,Response} from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

dotenv.config();

app.listen(3003, () => {
    console.log('Servidor rodando');
    
})

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

