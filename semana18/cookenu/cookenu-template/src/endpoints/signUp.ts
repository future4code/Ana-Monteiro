import { Request, Response } from "express";
import { HashManager } from "../services/HashManager";
import { IdGenerator} from "../services/IdGenerator";
import {UserDatabase} from  "../data/UserDatabase";
import { Authenticator} from "../services/Authenticator";
import { BaseDatabase } from "../data/BaseDatabase";


export const signUp = async (req: Request, res: Response) => {
    try {

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        if(!name || !email || !password){
            throw new Error('Insira todas as informações para o cadastro')
        }

        if(password.length <6){
            throw new Error('A senha deve conter no mínimo 6 caracteres')
        }

        // Criando o id do usuário

        const idGenerator = new IdGenerator();
        const id = idGenerator.generateId();

        // Encriptografando a senha do password

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password);

        const userDatabase = new UserDatabase();
        await userDatabase.registerUser(
            id,
            name,
            email,
            hashPassword
        );

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({id});

        res.status(200).send({
            message: "Usuário criado com sucesso",
            token
        })
        
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

    await BaseDatabase.destroyConnection();
}