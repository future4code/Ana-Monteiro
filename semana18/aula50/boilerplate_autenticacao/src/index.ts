import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { generate } from "./services/generateId";
import { generateToken } from "./authentication/authenticator"

dotenv.config();

const app = express();
app.use(express.json());

console.log("Chave "+ generate())

const id: string = generate()

const token = generateToken({id})

console.log(id)

console.log(token)


const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});