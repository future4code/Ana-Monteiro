//1
//Hoje conhecemos uma "nova linguagem", que é muito parecida com o Javascript, mas que tem alguns adicionais muito importantes para nós. Abaixo temos algumas perguntas e solicitações de escrita de código. Você pode responder as perguntas comentando no arquivo TS.
//O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
//O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

//const minhaString: string = 5

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

*/

// d)Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

/*

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

*/

// e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.

/*

enum Color {
    YELLOW = "Yellow",
    BLUE = "Blue",
    PINK = "Pink",
    BLACK = "Black",
    PURPLE = "Purple"
}

*/

// DÚVIDA: NÃO ESTOU CONSEGUINDO EXECUTAR OS COMANDOS ACIMA, TENTEI APAGAR OS NODE_MODULES E ELE NÃO FOI EXECUTADO