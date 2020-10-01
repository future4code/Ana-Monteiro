/*Exercício interpretação de código 1

Código:

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) 

O1) que o código abaixo está fazendo? Qual o resultado impresso no console?

No código ele está dizendo que o valor inicial é zero, ai no for ele está criando o laço. O laço começa com o i=0, e vai
até o momento que o ir for menor que 5, vai até 4. Ele começa com i=0, o valor que está inicialmente valendo 0 = da 0. Essa 
é a primeira volta. Ai depois o i vai para o arranjo, e ai fica i+1. Logo o novo i=1 , com valor 0, fica como resultado 1.
E vai seguindo esse raciocínio..
Ao final, o resultado imprime todas as somas de todos os valores e fica sendo o valor 10 */

/*Exercício interpretação de código 2 */

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) Vai ser impresso todos os números, um embaixo do outro, acima do valor 18 da const lista 

b) Sim, seria suficiente se fizessemos assim: assim mostraríamos o índice e o número/*

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
	let i = 0
	for (let indice of lista) {
	    console.log("Indice: ", i) 
	  if (indice > 0){
	    console.log(indice)
	    }
	    i++
	 }


/*3- Exercício de escrita de código*/


/* letra a :
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

console.log(arrayOriginal)*/


/* letra b:
const divisaoOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 

for( let i = 0; i < divisaoOriginal.length ; i= i +1 ){
    console.log(divisaoOriginal[i]/ 10)
}*/


/* letra C

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let numPar =[];

for (let numerosPares of arrayOriginal){
    if (numerosPares % 2 === 0){
        numPar.push(numerosPares)
    }
}

console.log(numPar); */

/*letrad const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let i = 0
let texto = ""

for (let numero of arrayOriginal){
    texto = "O elemento do índex" + i + "é" + numero
    i++
    console.log(texto)
}*/

