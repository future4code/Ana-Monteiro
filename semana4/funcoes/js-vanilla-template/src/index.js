/* Exercício 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


a. O que vai ser impresso no console?

a. Vai ser impresso o valor 10 (2*5) e 50(10*5)

b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?/*

b. Guardaríamos o valor de 10 e 50, porém não imprimiríamos nada no console. O que faz imprimir o valor no console é o console.log*/


/* Exercício 2

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)


a. Explicite quais são as saídas impressas no console

a. É impresso  os nomes com índice menor que 2, no caso o index[0] e o index[1]: Darvas e Caio

b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?

b.Seriam impressos todos os nomes, Amanda e Caio no console.*/

/*Exercício 3

O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    arrayFinal.push(x * x)
		}
  }

  return arrayFinal;
}

Resposta: 
Sugiro um nome diferente como : const numPares. A função pega todos os números pares, e multiplica o valor por ela mesma, se colocarmos após o return arrayFinal,
const resultado = metodo([1,2,3]) e embaixo console.log (resultado), retornaremos por exemplo o valor 4 */


/* Exercício 4

a.A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você:

Eu fiz dessa forma...

let dadosPessoais = () => {
  console.log("Meu nome é Ana, tenho 29 anos, sou carioca")
}

dadosPessoais()

b.Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e um boolean que representa se é estudante ou não.
Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:*/


/*let dadosPessoais = (nome, idade, cidade, estudante) => {
    if (estudante){
        estudante = "sou estudante"
    } else {
    estudante = "não sou estudante"
    }
    console.log(`Eu sou a ${nome}, tenho ${idade}, moro na ${cidade} e ${estudante}`)
}

  let nome = "Ana"
  let idade = "29 anos"
  let cidade = "Rio de Janeiro"
  let estudante = true

  
  const resultado = dadosPessoais(nome, idade, cidade, estudante)
console.log(resultado)*/

/* Exercício 5

a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)*/

/*

a.let somaDoisNumeros = (a,b) => {
    const soma = a + b
    return a + b
}

const resultado = somaDoisNumeros (3,2)
console.log(resultado)*/


/* b.
  let maiorIgual = (a,b) => {
  let resultado
  if (a >= b){
    resultado = "é maior, ou igual"
  } else{
    resultado = "é menor"
  }
  return resultado
}

const result = maiorIgual(3,5)
console.log(result) */

/*c.

function fraseRepetida(a) {
  for (let i = 1; i <= 10; i++) {
      console.log(i,a)        
  }
}
fraseRepetida("Repetindo essa frase ai..")
console.log(fraseRepetida) */

/* Exercício 6

a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

const somaNumeros = (a,b) => {
  for (let i = 0; i= array.length; i++){
    console.log(somaNumeros)
  }
  return somaNumeros
}

const array = [10, 23, 45, 78, 90, 52]
const tamanhoDoArray = (array)
console.log(tamanhoDoArray) /*

b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não 

const numPar = (a) => {
  if (a % 2 === 0){
    return true
  }else{
    return false
  }
}

const resultado = numPar(57)
console.log(resultado) /*

c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele */

/*const numPar = (array) => {
  let novoArray = [];
 
   for( let i of array){
       if (i % 2 === 0){
         novoArray.push(i)
        }
   }  
    return novoArray
}


const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const resultado = numPar(array)
console.log(resultado)/*

/*d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

const numPar = (a) => {
  if (a % 2 === 0){
    return "é par"
  }else{
    return "é impar"
  }
}

const resultado = numPar(58)
console.log(resultado) 

/*


/* Desafio Exercício 1 

EXERCÍCIO 1

Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções: 

1.  Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro.
2. Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimí-lo.

Resposta:

/*
let imprimirConsole = (parametro) => {
  console.log(parametro)
}

imprimirConsole("Olá, eu sou o xunda!")

let somaNumeros = (a,b) => {
  let somando = a + b
  imprimirConsole(somando)
}

somaNumeros(20,3)*/


/*Desafio Exercício 2 */

/*

a. Escreva uma função que receba um array como parâmetro e retorne um array com apenas os números pares e multiplicados por 2.

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let numParPorDois = (array) => {
  let arrayParesPorDois = []
  for (let numero of array){
   if (numero % 2 === 0){
     arrayParesPorDois.push(numero * 2)
   }
  }
  return arrayParesPorDois
}
  
const resultado = numParPorDois(numeros)
console.log(resultado) */


/*

b. Escreva uma função que receba um array como parâmetro e retorne o maior número deste array.

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

let checandoMaiorValor = (array) =>{
  let maxValor = 0
  for (let numero of array){
    if (maxValor < numero){
      maxValor = numero
    }
  }
  return maxValor
}

const resultado = checandoMaiorValor(numeros)
console.log(resultado) */

/*c. Escreva uma função que receba um array como parâmetro e retorne o índice do maior número deste array.

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let checandoMaiorValor = (array) => {
  let maxValor = 10
  let index = 0
  for(let i = 0; i < array.length; i++){
    if(maxValor < array[i])
    index = i
    }
  }
  return index
}


const indiceMaxValor = checandoMaiorValor(numeros)
console.log(indiceMaxValor) */


/*

d. Escreva uma função que recebe um array como parâmetro e retorne este array invertido.

let invertendoArray = (array) =>{
  return array.reverse()
}

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
const arrayInvertido = invertendoArray(array)
console.log(arrayInvertido) */













