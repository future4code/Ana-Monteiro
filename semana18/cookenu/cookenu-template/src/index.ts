import express from "express";
import {AddressInfo} from "net";
import { signUp } from "./endpoints/signUp";
import { login } from "./endpoints/login";
import { getUserProfile } from "./endpoints/getUserProfile";

const app = express();

app.use(express.json());

app.post('/signup', signUp);

app.post('/login', login)

app.get('/user/profile', getUserProfile)

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});