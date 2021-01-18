import express, {Request, Response} from "express"
import cors from "cors"
import knex from "knex" // conexão com o banco de dados mysql
import dotenv from "dotenv" // conexão com o banco de dados que está no .env, proteger os seus dados
import {AddressInfo} from "net"
import { getAllNames, getAllOrder, getAllTypes, getAllUsers } from "./endpoint/Endpoint"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

app.get("/user/all", async(req: Request, res: Response) =>{
    getAllUsers(req, res)
})

app.get("/user", async(req: Request, res: Response) =>{
    const name: string = req.query.name as string
    getAllNames(req, res, name)
})

app.get("/user/:type", async (req: Request, res: Response) => {
    const type: string = req.params.type
    getAllTypes(req, res, type)
})

app.get("/order", async (req: Request, res: Response) =>{
    const order: string = req.query.order as string
    const type: string = req.query.type as string
    getAllOrder( req, res, type, order )
})

const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server.`)
    }
})