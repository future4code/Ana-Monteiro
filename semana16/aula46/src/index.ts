import knex from "knex";   // biblioteca para acessar banco de dados
import express, { Request, Response } from "express";  // criar endpoints para fazer a requisição 
import dotenv from "dotenv";  // Usar o .env, serve para ocultar informações no gitHub
import { AddressInfo } from "net";
import { IdentifierTypePredicate } from "typescript";

/**************************************************************/

dotenv.config(); //usar o dotenv

let errorCode = 400

/**************************************************************/

const connection = knex({           // Acessando o banco de dados aqui no typescript
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/


const app = express();  // usar o express para criar os endpoints

app.use(express.json()); // transforma em json as informações passadas pela requisição



/**************************************************************/



/***************************************************************** */



/*app.get('/actor', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}*/

/*************************Letra B**************************************** */

/*
const getActorByName = async (name: string): Promise<any> => {

  try { const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

  console.log(result[0])

  return result[0]

  } catch (error) {
      console.log(error.sqlMessage || error.message)
    }
  }

getActorByName("Dinho Mamonas")

*/

/*********************************Letra C******************************** */

/*
const getActorByGender = async (gender: string): Promise<any> => {
  try { const result = await connection.raw(`
    SELECT COUNT('${gender}') FROM Actor WHERE gender = '${gender}'
  `)
  console.log(result[0])
  return result[0]
  } catch (error) {
      console.log(error.sqlMessage || error.message)
    }
  }

  getActorByGender('female')*/

/******************************Exercício 2************************* */

/******Letra A************************* */

/*
const updateActor = async (
  id: string,
  salary: number

): Promise<void> => {
  await connection("Actor").update({
    salary: salary
  })
  .where("id", id)
}

updateActor("003", 5000000)

*/

/****Letra B********************* */

/*

const deleteActor = async (
  id: string

): Promise<void> => {
  await connection("Actor").delete()
  .where("id", id)
}

deleteActor("005")

*/

/****Letra C********************* */

/*
const calcAverage = async (
   gender: string

): Promise<any> => {
  const result = await connection("Actor").avg("salary as salary")
  .where({gender})

  console.log(result[0])

  return result[0].average
}

calcAverage("female")

*/


/**************************Exercicio 3******************************** */

/*
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0]
  
}

app.get('/actor/:id', async (req: Request, res: Response) =>{     
  try{
    const actors = await getActorById(req.params.id)
    if(!actors.length){
      errorCode = 404
      throw new Error('Nenhum ator encontrado')
    }
    res.status(200).send(actors)
  }
  catch(error){
    console.log(error)
    res.send(error.message)
  }

})

*/

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(
     `SELECT COUNT(*) FROM Actor WHERE gender = ${gender}`
     )
}

app.get("/actor?gender=", async (req: Request, res: Response) => {

  try{
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    })
  } catch (err){
    res.status(400).send({
      message: err.message,
    })
  }
})


/***************************************************************** */



const server = app.listen(process.env.PORT || 3003, () => {                // Criar o servidor   
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});