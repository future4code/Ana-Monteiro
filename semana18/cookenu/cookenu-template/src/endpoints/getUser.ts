import { Request, Response } from "express";
import { BaseDatabase} from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const getUser = async (req: Request, res: Response) =>{
    try {

        const token = req.headers.authorization as string;
        const id = req.params.id as any;

        const authenticator = new Authenticator();
        authenticator.verify(token);

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserById(id);

        res.status(200).send({
            userName: user.name,
            userEmail: user.email,
            userId: user.id
        })

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

    await BaseDatabase.destroyConnection();
 
};