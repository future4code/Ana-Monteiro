//Exercício de interpretação 1 //

//function conversorDeMoeda(ValorEmDolar){
// const cotacao = Number(prompt("Informe o valor da cotação do dólar"));
// return "R$" + (valorEmDolar * cotacao);
//}
// const meuDinheiro = conversorDeMoeda(100);
//console.log(meuDinheiro)

// Essa função inicialmente te faz uma pergunta "Informe a cotação do Dólar", 
// no valor que vc responder, que inicialmente é um prompt, ele coloca um Number para
// transformar do valor que vc colocar, de string em number. Após isso ele pede para vc 
//retornar o "R$" junto com o valorEmDolar (que inserimos no código, no exemplo é o valor 100),
// esse número é multiplicado pela cotação em dólar que vc inseriu inicialmente no prompt, transformado em number posteriormente. 
//Ai embaixo nós criamos a constante meuDinheiro para guardar o valor, e converter o valor que inserimos
//(100), e embaixo imprimimos no console com o console.log a multiplicação de 100 pelo valor inserido no prompt da cotação do dólar.

//Exercício 2 de interpretação

// A função investeDinheiro tem 3 variáveis inicialmente, o elemento : tipoDeInvestimento, e o valor.
//Primeiramente eu crio uma variável let valorAposInvestimento;
//depois fazemos um switch case, com as possibilidades do elemento : tipoDeInvestimento
//Caso o tipoDeInvestimento seja ===" Poupança", o valorAposInvestimento se torna valor inserido no código * 1.03
//Caso seja tipoDeInvestimento === "Renda fixa", essa variável valorAposInvestimento se torna valor * 1.05
//Caso seja tipoDeInvestimento ==="CDB", essa variável valorAposInvestimento se torna valor * 1.06
// Caso seja tipoDeInvestimento ==="Ações", essa varíavel criada valorAposInvestimento se torna valor * 1.1
//Caso não seja ações, nem CDB e nem poupança e rendaFixa, ele retorna default com uma mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO"
//Sem esquecer que o break, no final de cada tipo de case, quebra o código e ele vai direto ao return, ele não fica mais rodando dentro dele
//mesmo, e vai direto ao return
//Na primeira const que inserimos após o return : consNovoMontante, inserimos na função investeDinheiro a case "Ações", e o valor de
//150 reais -> o que acontece aqui é que ele vai rodar no caso "Ações" citado acima, e logo, seu valorAposInvestimento será de valor, no caso 150 *1.1
//logo quando damos um primeiro console.log(novoMontante) estamos imprimindo : Ações 165.
//Logo após fazemos uma constante, const segundoMontante, e ela quer puxar da função investeDinheiro o case "Tesouro Direto", só que
//não temos a case "Tesouro Direto", logo ela cai no defaut, e quando ela quebra no break e vai ao retorno, ela retorna essa mensagem
//"Tipo de investimento informado incorreto". Só que quando tentamos imprimir no console esse caso, ele retorna undefined, pois o valorAposInvestimento
//não está definido ele está assim em cima: let valorAposInvestimento;

//Exercício 3 de interpretação

//Temos uma constante de números [25,12,55,64,121,44,11,84,51,48,14,73,11,283]
//Fazemos nessa função um const array1, e um const array2 que vai armazenar os valores que passarem pelo for
//Nessa função o for, ele varre por todo o array, e vai vendo elemento por elemento
//primeiro if , varrendo numero por numero, ele pega o primeiro número, se esse número dividido por 2 tiver resto zero,
//o número é incluído na array1 dos números pares. Caso, ele dividindo por 2, seu resultado for diferente de 0, no else
//ele é puxado para o array2. Precisamos nos atentar que os valores puxados para o array 2, não necessariamente serão só
//ímpares, incluem-se os ímpares, mas strings por exemplo, entre outros casos.
//Após isso, vamos imprimir no console na primeira linha : Quantidade total de números 14 (numeros.length retorna o tamanho da array)
//No console.log(array1.length) : 6 (temos 6 números pares que puxaremos do const numeros)
// No console.log(array2.length) : 8 (temos 8 números que não são pares)/*

//Exercício 4 de interpretação

//Nesse exercício, nós criamos uma constante chamada: const numeros, com um conjunto de números
// nós determinamos que a variável let numero1 = Infinity : colocamos o let para que possamos modificar
//porque vemos que depois, a const numero1 vai se modificando. E aqui, ele diz que o numero1 é igual a infinito.
//Depois criamos outra variável, let numero2 = 0, dizendo portanto que a variável numero2 é igual a zero
//Depois nós vamos varrer em cada número do array, varrendo um por um.. por exemplo, primeiro vamos passar o número
// 25 .Se 25 < infinity : logo numero1(o da constante let em cima) = 25. Depois passamos pelo outro if, se o numero, 25 é >
//que 0, logo o numero2=numero, logo 0=25, ou seja o valor zero passa a ser o número 25.
//Embaixo, nós damos o console.log nesses valores, o primeiro, console.log(numero1) = 25
//Embaixo, console.log(numero2) = 25
//Aqui nós percebemos que, o console.log(numero1) vai pegar sempre o menor valor, e o console.log(numero2) sempre os maiores valores
//

//Exercícios de lógica de programação

//Exercício 1

//Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

//Primeira forma : uso de for para retornar os valores do array

/*const bananinha = [10,30,40,50,60]

for (let i=0; i< 5; i++) {
    const banana = bananinha[i]
    console.log(banana)
}*/

// Segunda forma : uso de for..of : retorna os elementos da array cajuzinhos

/*const cajuzinhos = [20,10,18,50]

for (let caju of cajuzinhos) {
    console.log(caju)
}
*/

//Terceira forma: uso de splice : na posição de índice 1, remova 0 elementos e adicione 'não' a essa posição

 /*let array= ['oi','estou','muito','bem']

 array.splice(1,0,'não')
 console.log(array)*/

//Exercício 2

// const booleano1 = true
//const booleano2 = false
//const booleano3 = !booleano2 = true
//const booleano4 = !booleano3 = false

// a) booleano1 && booleano2 && !booleano4
// true && false && false
// false

// b) (booleano1 && booleano2) || !booleano3
// (true && false) || !true
//(true && false) || false
// false || false = false

//c) (booleano2 || booleano3) && (booleano4 || booleano1)
// (false || true) && (false || true)
// true && true = true

//d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
// !(false && true) || !(true && true)
// !(false) || !(true)
// true || false = true

//e)!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
// !(true) && !(true) || (true && true && true)
// false && false || true
// false || true = true

//Exercício 3

/*const quantidadeDeNumerosPares = Number(prompt('Digite a quantidade N de números pares que você quer ver'))

    let i = 1
	let numero = 0
	
	while(i <= quantidadeDeNumerosPares) {
	  if(numero % 2 === 0){
	    console.log(numero)
        i++
      }
      numero += 1
    }
    */
    
//O código não funciona porque preciso colocar o incremento do while i++, porque senão ele roda infinitamente e entra no loop infinito.
//Precisa ter uma variável para o index, o i, que o menino fez let i = 0, porém o let i = 0 não vai retornar os valores que queremos,
//quando digitarmos 5, ele retornarian 0,2,4,6,8 e 10 e queremos que retorne 0,2,4,6,8. Logo precisa ser let i = 1.
// E precisamos de outra variável, o número, para ele ir pegando
// os números pares : numero%2 ===0, e colocar o numero += 1 para ele ir pegando os valores pares que digitarmos


//Exercício 4 - lógica de programação

/*
let trigonometria = (a,b,c) => {
    if (a === b === c){
        console.log("É equilátero")
    } else if ((a === b) || (b === c) || (c === a)){
        console.log("É isósceles")
    } else { ((a !== b !== c)) 
        console.log("É escaleno")
    }
    return (a,b,c)
}

const resultado = trigonometria(9,9,9)

*/

//Exercício 5 - lógica de programação

/*const numA = Number(prompt("Digite um número"))
const numB = Number(prompt("Digite outro número"))

let numerosDigitados = () => {
    if (numA > numB){
        console.log (`O maior valor é ${numA}`)
    } else if ( numB > numA){
        console.log(`O maior valor é ${numB}`)
    } else{
        console.log("São iguais")
    }

    if (numA % numB === 0){
        console.log(`${numA} é divisível por ${numB}`)
    }else{
        console.log("Não são divisíveis entre si!")
    }
    
    let resultado1 = numA - numB
    if(resultado1 >= 0){
        console.log(`A diferença é ${resultado1}`)
    } else {
        console.log("Soma negativa1! não rola!")
    }

    let resultado2 = numB - numA
    if(resultado2 >= 0){
        console.log(`A diferença é ${resultado2}`)
    } else{
        console.log("Soma negativa2! não rola!")
    }
    return
}

numerosDigitados()*/


//Exercícios de funções

//Exercício 1

//Escreva uma função que receba um array de números e imprima na tela o segundo maior e o segundo menor número.
// Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)


/*
let array = [12,2,25,76,85,96]

let maiorValor = (array) =>{
    let maiorValor = 0
    for( let numero1 of array){
        if (numero1 > maiorValor){
            maiorValor = numero1
        }
        array.splice(5,1)
    }
    return maiorValor
    
}

const resultado1 = maiorValor(array)
console.log(`O segundo maior valor da array é ${resultado1}`)

let menorValor = (array) =>{
    let menorValor = Infinity
    for (let numero2 of array){
        if (numero2 < menorValor){
            menorValor = numero2
        }
        array.splice(1,1)
    }  
    return menorValor
}

const resultado2 = menorValor(array)
console.log(`O segundo menor valor da array é ${resultado2}`) 

*/


//Exercício 2 - funções

//Escreva uma função não nomeada que faça um alert("Hello Future4");. Em seguida, invoque essa função.

/*

let mandandoMensagem = () => {
    alert ("Hello Future4")
}

const recebendoMensagem = mandandoMensagem()
console.log(recebendoMensagem)

*/



//Exercícios de objetos

// Exercício 1

//Explique com suas palavras o que são e quando podemos/devemos utilizar arrays e objetos

// Objetos nos permite representar dados mais complexos, de forma mais organizada, como uma gaveta de cozinha bem separadinha
//com garfos, colheres e facas, uma gaveta subdividida e muito organizada. Podemos usar quando necessitamos que o código que
//estamos fazendo esteja muito bem organizadinho.

//Arrays é como uma matriz de valores, coleção de um ou mais objetos, do mesmo tipo e permite que acessemos o elemento pelo índice dele.
//Devemos criar arrays quando temos poucos, ou vários objetos, já que cada objeto é um elemento de uma array.

//Exercício 2 - Objetos

//Crie uma função chamada criaRetangulo que recebe como parâmetros dois lados (lado1 e lado2) 
//e retorna um objeto com 4 informações: largura (lado1), altura (lado2), perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2).



/*

let criaRetangulo = (lado1,lado2) =>{
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perímetro: (2*(lado1+lado2)),
        área: (lado1*lado2)
    }
    return retangulo
}


console.log(criaRetangulo(4,3))
/*

//--------------------------------------------------------------Exercício 3 - Objetos

//Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). 
//Imprima na tela a seguinte string, baseada nos valores do objeto:
//Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n.
//A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.*/

/*

const filmeFavorito = {
    Título: 'A procura da Felicidade',
    Ano: 2007,
    Diretora: 'Gabriele Muccino',
    Ator1: "Will Smith",
    Atriz: "Thandie Newton",
    Ator2: "Jaden Smith"
}

console.log(`Venha assistir ao filme ${filmeFavorito.Título}, de ${filmeFavorito.Ano}, dirigido pela ${filmeFavorito.Diretora} e estrelado por ${filmeFavorito.Ator1}, ${filmeFavorito.Atriz},${filmeFavorito.Ator2}`)

*/

//------------------------------------------------------------Exercício 4 - Objetos

//Crie um objeto que represente uma pessoa qualquer, com as propriedades de nome, idade, email e endereco.
// Crie uma função chamada anonimizarPessoa, que deverá retornar um novo objeto com as mesmas propriedades, mas com a string ANÔNIMO no lugar do nome.
// O objeto original deve ser mantido com o nome da pessoa.

/*
const nomePessoa ={
    nome: "Bananinha",
    idade: 25,
    email:"ilovebanana@gmail.com",
    endereço: "Rua dos bananais, 286"
}

let anonimizarPessoa = () =>{
    const novaPessoa= {
    ...nomePessoa,
    nome: "anônimo"
    }
    console.log(novaPessoa)
}

anonimizarPessoa()

*/

//Exercícios - Funções de Array

//Exercício 1

/*
const pessoas = [
    { nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
*/


//a) Faça uma função que retorne um novo array só com os adultos (pessoas com idade igual ou superior a 20)/*

/*
const somenteAdultos = pessoas.filter((adulto) =>{
    if(adulto.idade >= 20){
        return true
    }
})

console.log(somenteAdultos)

*/

//b) Faça uma função que retorne um novo array só com as crianças/adolescentes (pessoas com idade inferior a 20)

/*
const somenteCrianças = pessoas.filter((criança)=>{
    if(criança.idade < 20){
        return true
    }
})

console.log(somenteCrianças)

*/


//-----------------------------------------------------------------------------Exercício 2 - Funções de Array

//const array = [1, 2, 3, 4, 5, 6]

//a) Escreva uma função que retorne um array com as entradas multiplicadas por 2. Isto é [2, 4, 6, 8, 10, 12]

/*
const arrayVezesDois = array.map((numero) => {  
        return numero * 2

})

console.log(arrayVezesDois)
*/

//b) Escreva uma função que retorne um array com as entradas multiplicadas por 3 e como strings. Isto é: ["3", "6", "9","12","15", "18"] 

/*
const arrayVezesTres = array.map((numero)=>{
    return String(numero*3) // a string aqui precisa estar em maiúsculo, para funcionar!!!
})

console.log(arrayVezesTres)

*/

//c) Escreva uma função que retorne um array de strings dizendo: "${número} é par/impar". Isto é: ["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"] 

/*
const arrayStrings = array.map((numero)=>{
        if (numero % 2 === 0){
            console.log (`${numero} é par`)
        }else{
            console.log (`${numero} é ímpar`)
        }
})

console.log (arrayDeStrings)

*/

//Exercício 3 - Funções de Array

/*
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

*/

//a) Escreva uma função que receba este array e devolva outro array somente com as pessoas que tem permissão de entrar no brinquedo:


/*
const permissãoBrinquedo = pessoas.filter((pessoas)=>{
    if(pessoas.altura >= 1.50 && pessoas.idade > 14 && pessoas.idade < 60){
        return true
    }
})

console.log(permissãoBrinquedo)

*/



//b) Escreva uma função que receba este array e devolva outro array somente com as pessoas que não podem entrar no brinquedo.*/


/*
const semPermissãoBrinquedo = pessoas.filter((pessoas)=>{
    if(pessoas.altura < 1.50 || pessoas.idade < 14 || pessoas.idade > 60){
        return true
    }
})

console.log(semPermissãoBrinquedo)

*/

//Exercício 4 - Funções de Array

/*
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const mensagemConsulta = consultas.map((pessoas)=>{
    let senhor
    let lembrar
    if(pessoas.genero === "masculino"){
        senhor = "Sr."
        lembrar = "lembrá-lo"
    }else{
        senhor ="Sra."
        lembrar="lembrá-la"
    }

    if (pessoas.cancelada === true){
        return(`Olá ${senhor} ${pessoas.nome}. Infelizmente sua consulta marcada para o dia ${pessoas.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
    } else if  (pessoas.cancelada === false){
        return(`Olá, ${senhor} ${pessoas.nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${pessoas.dataDaConsulta}. Por favor, acuse o recebimento deste email`)
    }
})

console.log(mensagemConsulta)

*/













