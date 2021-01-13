import knex from "knex";   // biblioteca para acessar banco de dados
import express, { Request, Response } from "express";  // criar endpoints para fazer a requisição 
import dotenv from "dotenv";  // Usar o .env, serve para ocultar informações no gitHub
import { AddressInfo } from "net";

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


/*const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0]
  
}

app.get('/actor/:id', async (req: Request, res: Response) =>{     // é um endpoint
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

})*/

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

/*********************************Letra C******************************** */

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

  getActorByGender('female')

/***************************************************************** */


const server = app.listen(process.env.PORT || 3003, () => {                // Criar o servidor   
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});