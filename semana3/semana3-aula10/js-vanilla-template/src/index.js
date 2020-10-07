/* Exercício 1 de interpretação

O const bool1 = true, o const bool2 = false, e o const bool3 = !bool2, que significa que ele é o negativo do bool2,
logo true

const bool1 = true
const bool2 = false
const bool3 = true

let resultado = bool1 && bool2
console.log("a. ", resultado) : significa que let resultado = true && false = false. Logo com o console.log ele
imprime a.(fica um espaço aqui) false

resultado = bool1 && bool2 && bool3 -> resultado = true && false && true = retorna false
console.log("b. ", resultado) -> ele imprime b.(fica um espaço aqui) false

resultado = !resultado && (bool1 || bool1) -> negativa do resultado anterior : true
                                           -> resultado = true && ( true || false)
                                           -> resultado = true && true
                                           -> resultado = true


console.log ("e. ", typeof resultado) -> ele imprime e. booleano

/* Exercício 2 de interpretação

let array
console.log('a. ', array) -> aqui não ficou definido um valor, logo imprime undefined

array = null
console.log('b. ', array) -> ele imprime b.(fica um espaço aqui) null logo, fica assim:
                          -> b. null

array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c. ', array.length) -> imprime c.(espaço) 11 : logo fica assim: c. 11

let i = 0
console.log('d. ', array[i]) -> aqui ele imprime d. 3 ( ele imprime o primeiro index do elemento que é 3)

array[i+1] = 19 -> array [0+1] -> array [1] = 19 
console.log ('e. ', array) -> ele imprime uma lista [3, 19, 4, 5, 6,...]

const valor = array[i+6] -> const valor = array [6]
console.log('f. ', valor) -> ele imprime f. 9

/*Executando exercício1*/

/*let idade = prompt ("Qual a sua idade?")

let idadeMelhorAmiga = prompt ("Qual a idade da sua melhor amiga?")

const maior = Number(idade) > Number(idadeMelhorAmiga)

const diferenca = Number(idade) - Number(idadeMelhorAmiga)

console.log("Sua idade é maior que a da sua melhor amiga?", maior)

console.log(diferenca)*/

/*Exercício 2*/

/*let par = prompt("Insira um número par, por favor")

let numero = Number(par)

console.log(numero%2)*/

/* Quando eu insiro o número par, ele dá o valor 0 como resto, isso não muda, e só aparece o 0*/
/* Quando eu insiro o número impar, ele dá sempre valor 1 como resto, e aparece sempre o 1*/

/*Exercício 3*/

let listaDeTarefas = []

let tarefa1 = prompt("Cite uma tarefa do seu dia")
let tarefa2= prompt ("Cite sua segunda tarefa do dia")
let tarefa3 = prompt("Cite a terceira tarefa do seu dia")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let digite = prompt ("Digite o índice de uma tarefa que você realizou")

listaDeTarefas.splice(Number(digite),1)

console.log(listaDeTarefas)

/*Exercício 4*/

let nome = prompt ("Qual o seu nome?")

let email = prompt("Qual seu email?")

console.log ("O e-mail " + email + " foi cadastrado com sucesso.Seja bem-vinda(o) " + nome + "!")







