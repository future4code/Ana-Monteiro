// Exercicio 2

/*

Observe a função a seguir, escrita em JavaScript:

*/

// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// Entrada vai ser um array de números, e a saída vai ser objeto com o maior valor, menor e a média 



function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(  //Colocando os números do array em ordem, do menor para o maior
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {             //Aqui vou somando a soma 0, o novo valor do array de números
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1], // Pego o tamanho do array, e tiro o último valor que vai ser o maior
        menor: numerosOrdenados[0],                  // Pego o menor valor que está na posição 0
        media: soma / numeros.length                // Faço a média
    }

    return estatisticas
}


/*

b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas 
 
// As outras variáveis que compõem são: "numerosOrdenados" (tipagem: array de números ), com variável fixa const e "soma" (tipagem: número) variável let, que permite mudança. E "let num" (tipagem: número) variável
criada dentro do for, para varrer os valores do array. E "estatisticas" variável const fixa (tipagem: objeto que contem maior, menor, e média todos são do tipo number)

*/ 

//c. Crie um *type* para representar uma **amostra** de dados, isto é, um objeto com as chaves **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

/*

type dados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => void
}

const amostraDeIdades: dados = {

		numeros: [21, 18, 65, 44, 15, 18],

		obterEstatisticas: (numeros) => {console.log(numeros)}
}

amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros)

*/

