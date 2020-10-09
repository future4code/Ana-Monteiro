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
// No console.log(array2.length) : 8 (temos 8 números que não são pares)

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
