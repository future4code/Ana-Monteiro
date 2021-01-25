//1
//Hoje conhecemos uma "nova linguagem", que é muito parecida com o Javascript, mas que tem alguns adicionais muito importantes para nós. Abaixo temos algumas perguntas e solicitações de escrita de código. Você pode responder as perguntas comentando no arquivo TS.
//O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
//O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
//const minhaString: string = 5
// Erro: número não é do tipo string
//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?
// Colocar union type 
// let meuNumero: number | string  = "olar";
//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
//`nome`, que é uma string;
//`idade`, que é um número;
//`corFavorita`, que é uma string.
//Como você faria para garantir que o objeto só tenha as propriedades descritas acima? Faça a tipagem do objeto para que ele só aceite os valores acima.
/*

type dadosPessoas = {
    name: string,
    age: number,
    favoriteColor: string
}

const pessoa: dadosPessoas = {
    name: "Ana",
    age: 45,
    favoriteColor: "blue"
}

console.log(pessoa)

*/
// d)Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.
/*

type dadosPessoas = {
    name: string,
    age: number,
    favoriteColor: string
}

const pessoa: dadosPessoas = {
    name: "Rihana",
    age: 52,
    favoriteColor: "blue"
}

const pessoa2: dadosPessoas = {
    name: "Zé",
    age: 24,
    favoriteColor: "yellow"
}

const pessoa3: dadosPessoas = {
    name: "Ronaldinho",
    age: 50,
    favoriteColor: "black"
}

console.log(pessoa)
console.log(pessoa2)
console.log(pessoa3)

*/
// e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.
var Color;
(function (Color) {
    Color["YELLOW"] = "Yellow";
    Color["BLUE"] = "Blue";
    Color["PINK"] = "Pink";
    Color["BLACK"] = "Black";
    Color["PURPLE"] = "Purple";
})(Color || (Color = {}));
var pessoa = {
    name: "LALA",
    age: 15,
    favoriteColor: Color.BLACK
};
var pessoa2 = {
    name: "RONALDO",
    age: 25,
    favoriteColor: Color.PINK
};
console.log(pessoa);
console.log(pessoa2);
