// Responsável por encapsular funções express : 

// Typescript usa classes, orientação a objetos

// Classe do servidor

// Na função de definirConfig() caso seja necessário adicionar mais alguma configuração, basta ir na mesma
// e adicionar a configuração ali, assim ele muda para o sistema todo

import { Express } from "express"; // é tipo de express

import express from "express"; // aqui é uma função express

// Esses imports acima é para dividir as funcionalidades em blocos 
// e encapsular(ter controle de cada função)

import cors from "cors";

import bodyParser from "body-parser" // pegar o que vier e converter o json(texto) em objeto em typescript/javascript( nesse caso para typescript )
import { EndpointService } from "./endpoint-service";

export class ServerService {
    private static instancia: ServerService | undefined;

    public static pegarInstancia(): ServerService {
        if (!ServerService.instancia){
            ServerService.instancia = new ServerService();
        }
        return ServerService.instancia
    } 

    public static destruirInstancia(): void {
        ServerService.instancia = undefined;
    }

    public iniciarServer(): void {
        const app = this.definirConfig(); // Configurando o servidor

        app.listen(3000, ()=>{
            console.log("Servidor rodando na porta 3000")
        })
        EndpointService.pegarInstancia().iniciarEndpoint(app)
    }

    private definirConfig(): Express {
        const app = express();

        app.use(cors());

        app.use(bodyParser.json({limit: '100mb'}));

        app.use(bodyParser.urlencoded({limit: '100mb', extended: false})) //urlencoded: limita a url do encode do json : ver depois onde fica
                                                                          // o extended é para dizer que não pode mais que 100 mb

        return app

    }
}
  
// Instância ela é estática pois nunca pode ser alterada
// Nessa classe só temos uma instância, pois se trata singleton

