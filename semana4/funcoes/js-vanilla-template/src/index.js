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









