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

