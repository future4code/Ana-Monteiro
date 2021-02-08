import { request, Request, Response } from "express";
import selectUserById from "../data/selectUserById";

export default async function getUserById(
    req: Request,
    res: Response
){
    try {
        // Consultar banco de dados

        const user = await selectUserById(req.params.id)

        // Validar as saídas
       
        if(!user){
            res.status(404).send({
                message: "Usuário não encontrado"
            })
        }

        res.status(200).send({
            message: "Sucesso",
            id: user.id,
            nickname: user.nickname
        })


        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}