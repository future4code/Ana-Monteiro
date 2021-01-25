import express from "express";
import cors from "cors";
import {countries, country} from "./countries";

const App = express(); // pegando uma instância de express : recebendo todas as funções dentro de express

App.use(cors());       // cors conseguir fazer requisições na api

App.listen(3000, () => {                        // listen serve para dar inicio ao servidor da API
    console.log("servidor rodando 3000")
})

//Primeiro endpoint 

App.get('/', (req, res)=> {
    res.send('minha primeira API');
})

// Primeiro endpoint do exercicio 1

/*

App.get('/countries/all', (req, res) => {
    const result = countries.map((row)=>{
        return {
            id: row.id,
            name: row.name
        }
    })

    res.status(200).send(result);  // status 200, requisição bem sucedida. A função send manda os dados, e o navegador exibe para vc ou o postman
})

*/

//Segundo endpoint exercício 2

/*

App.get('/countries/:id', ( req, res) => {
    const result = countries.find((row) => row.id === Number(req.params.id))
    if (result) {
        res.status(200).send(result)
    }else{
        res.status(404).send("Country não encontrado")
    }
})

*/

// Terceiro endpoint exercício 3

/*

App.get('/countries/search', (req, res) => {
    const name = req.query.name as string | undefined
    const capital = req.query.capital as string | undefined
    const continent = req.query.continent as string | undefined
     console.log(name + "nome pesquisa")
    if(!name && !capital && !continent){
       return res.status(404).send("Falta parâmetros")
    }
    let result: country[] = [];        // array de countries mas no momento está vazio
    if(name){
        result = countries.filter((row) => row.name.includes(name))
    }
    if(capital){
        result = countries.filter((row) => row.capital.includes(capital))
    }
    if(continent){
        result = countries.filter((row) => row.continent.includes(continent))
    }
    if(result.length === 0){
        return res.status(404).send("Nenhum country encontrado")
    }else{
        return res.status(200).send(result)
    }
})

*/

//Quarto Endpoint exercício 4
// Ver esse endpoint 4 que está com problema
/*

App.put('countries/edit/:id', (req, res)=>{
    console.log(req.body)
    if(!req.params.id || !req.body.name || !req.body.capital ){
        return res.status(404).send("Falta parâmetro")
    }
    const index: number = countries.findIndex((row)=>row.id === Number(req.params.id))
    countries[index].name = req.body.name
    countries[index].capital = req.body.capital

    return res.status(200).send(countries[index])
})

*/

