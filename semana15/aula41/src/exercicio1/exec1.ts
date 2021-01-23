//1
//Hoje conhecemos uma "nova linguagem", que é muito parecida com o Javascript, mas que tem alguns adicionais muito importantes para nós. Abaixo temos algumas perguntas e solicitações de escrita de código. Você pode responder as perguntas comentando no arquivo TS.
//O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
//O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

//const minhaString: string = 5

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?
// Colocar union type 

let meuNumero: number | string  = "olar";

