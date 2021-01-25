// Exercicio 2
/*

Observe a função a seguir, escrita em JavaScript:

*/
// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// Entrada vai ser um array de números, e a saída vai ser objeto com o maior valor, menor e a média 
function obterEstatisticas(numeros) {
    var numerosOrdenados = numeros.sort(//Colocando os números do array em ordem, do menor para o maior
    function (a, b) { return a - b; });
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) { //Aqui vou somando a soma 0, o novo valor do array de números
        var num = numeros_1[_i];
        soma += num;
    }
    var estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length // Faço a média
    };
    return estatisticas;
}
var amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: function (numeros) { console.log(numeros); }
};
amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros);
