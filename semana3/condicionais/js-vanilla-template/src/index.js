/* Exercício 1 interpretação de código

const respostaDoUsuario = prompt ("Digite o número que você quer testar") -> Aqui ele pede para vc digitar o número que vc quer testar, 
 e vc digita o número que vc quer testar, como string..
const numero = Number( respostaDoUsuario) -> aqui ele transforma a string que foi digitada em número, com o Number

if (número % 2 === 0){    -> se o número tiver resto 0 em uma divisão feita por 2, ele retorna que passou no teste
    console.log("Passou no teste.") 
}else{
    console.log("Não passou no teste.") -> se o número não tiver resto 0, nessa divisão feita por 2, ele retorna que não
                                           passou no teste
}


/* Exercício 2 interpretação de código

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Fazer uma switch case, que é uma estrutura de condição que define o código a ser executado com base em uma comparação
de valores. Na linha do switch(variável ou valor), definimos a variável ou valor que desejamos comparar. Quando damos um case, vemos se 
o que foi declarado é igual ao switch, ai se for, a fruta do "case" o preço é declarado.

b) preco = 2.25

c) O break, dá uma pausa, um stop no código. Se tirarmos o break da "Perâ", o que retorna é o default com o preço = 5


/*Exercício 3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) A primeira linha ele está pedindo para digitar o seu primeiro número, em que aparece primeiro essa mensagem na tela "Digite o seu primeiro número", 
assim que vc digita o número, nessa linha ele já transforma em string o valor que vc digitou em número.

b) Se ele for 10, ele imprime dizendo que "Esse número passou no teste". Se for -10, ele não imprime nada porque, ele não deu um else para
caso não seja 10, no caso um valor negativo -10.

c)Vai ter um erro no console sim, porque ele dá erro porque o if não está declarado no escopo global.*/

/*Exercício 4*/

/*let idade = Number(prompt("Qual a sua idade?"))
    if (idade >= 18)
    console.log("Pode dirigir")
    else
    console.log("Você não pode dirigir")*/

/*Exercício 5*/

/*let turno = prompt ("Qual turno você estuda? (Digite m, v ou n)" ).toLowerCase()
    if (turno === "m"){
        console.log ("Bom dia!")
    } else if (turno === "v"){
        console.log ("Boa tarde!!")
    } else{
        console.log ("Boa noite!")
    }*/


/*Exercício 6*/

/*let turno = prompt ("Qual turno você estuda? (Digite m, v ou n)")
    switch(turno){
        case "m":
            console.log("Bom dia!")
        break;
        case "v":
            console.log("Boa tarde!")
        break;
        case "n":
            console.log("Boa noite!")
        break;
    }*/

/*Exercício 7*/

/*let genero = prompt ("Qual filme você vai assistir?").toLowerCase()
let valor = Number(prompt("Qual o preço do ingresso?"))

if (genero === "fantasia" && valor <= 15){
    console.log("Bom filme!")
} else {
    console.log ("Escolha outro filme!")
}*/


   


