const countries = require("../countries.js") // sintaxe antiga para importar 

// process.argv ->  acessa os argumentos passados no terminal para execução do programa
// node caminho-para-o-arquivo terceiro-argumento quarto-argumento
//  [0]        [1]                  [2]               [3]

const countryName = process.argv[2] // Termo de busca passado no terminal

const searchResults = countries.filter(
   country => country.name.includes(countryName)
)

console.table(searchResults);