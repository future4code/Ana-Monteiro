import express from "express";
import {AddressInfo} from "net";
import { signUp } from "./endpoints/signUp";
import { login } from "./endpoints/login";
import { getUserProfile } from "./endpoints/getUserProfile";
import { getUser} from "./endpoints/getUser";
import { createRecipe } from "./endpoints/createRecipe";
import { getRecipe } from "./endpoints/getRecipe";

const app = express();

app.use(express.json());

app.post('/signup', signUp);

app.post('/login', login)

app.get('/user/profile', getUserProfile)

app.get('/user/:id', getUser)

app.post('/recipe', createRecipe)

app.get('/recipe/:id', getRecipe)

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});