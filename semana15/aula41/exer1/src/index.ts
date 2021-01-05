// a) Ele não roda com número, porque o tipo é uma string e só aceita strings. O número é tipo number

/*
const minhaString: string = "ana-patricia"
console.log(minhaString)
*/

//b) Para aceitar os dois número e string colocar union type

/*
let meuNumero: number | string = 'tres'
console.log(meuNumero)
meuNumero = 3
console.log(meuNumero)
*/

//c) 

/*
const pessoa: {
    nome: string,
    idade: number,
    corFavorita: string
}= {
    nome: "Ana",
    idade: 5,
    corFavorita: "azul"
}
console.log(pessoa)

*/

// d) 

/*

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const astrodev: pessoa={
    nome: 'astroDEVS',
    idade: 70,
    corFavorita: 'cinza'
}

const astrodev2: pessoa={
    nome: 'astroDEVS2',
    idade: 70,
    corFavorita: 'blue'
}

const astrodev3: pessoa ={
    nome: 'astroDEVS3',
    idade: 50,
    corFavorita: 'white'
}
console.log('Objeto1', astrodev)
console.log('Objeto2', astrodev2)
console.log('Objeto3', astrodev3)

*/

// e) 

/*
enum corArcoIris{
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELHO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}

console.log(corArcoIris.ANIL)
console.log(corArcoIris.LARANJA)
console.log(corArcoIris.VERDE)

*/

