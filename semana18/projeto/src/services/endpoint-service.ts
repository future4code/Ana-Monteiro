import {Express} from "express";

import JWT from "jsonwebtoken";


export class EndpointService {
    private static instancia: EndpointService | undefined;

    public static pegarInstancia(): EndpointService {
        if (!EndpointService.instancia){
            EndpointService.instancia = new EndpointService();
        }
        return EndpointService.instancia
    } 

    public static destruirInstancia(): void {
        EndpointService.instancia = undefined;
    }

    public iniciarEndpoint(app: Express): void{
        this.testEndpoint(app);
        this.signupEndpoint(app);
    }

    private testEndpoint(app: Express): void{  // Encapsulando o código
        app.get("/", (req, res)=>{
            return res.send("Webservice está online")
        })
    }

    private signupEndpoint(app: Express): void {
        app.post("/signup", (req, res)=> {

            if(!req.body.name || !req.body.email || !req.body.password){
                return res.status(401).send("Parâmetros ausentes, tente novamente")
            }
            if(String(req.body.password).length < 6){
                return res.status(401).send("Senha deve conter no mínimo 6 caracteres")
            }
            const token = JWT.sign({id: 1}, "banana", {  // Fazendo o token de autenticação
                expiresIn: 300
            })
            return res.json({access_token: token})
        })
    }
}