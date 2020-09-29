/* Exercício 1 de interpretação

O const bool1 = true, o const bool2 = false, e o const bool3 = !bool2, que significa que ele é o negativo do bool2,
logo true

const bool1 = true
const bool2 = false
const bool3 = true

let resultado = bool1 && bool2
console.log("a. ", resultado) : significa que let resultado = true && false = false. Logo com o console.log ele
imprime a.(fica um espaço aqui) false

resultado = bool1 && bool2 && bool3 -> resultado = true && false && true = retorna false
console.log("b. ", resultado) -> ele imprime b.(fica um espaço aqui) false

resultado = !resultado && (bool1 || bool1) -> negativa do resultado anterior : true
                                           -> resultado = true && ( true || false)
                                           -> resultado = true && true
                                           -> resultado = true


console.log ("e. ", typeof resultado) -> ele imprime e. booleano

/* Exercício 2 de interpretação

let array
console.log('a. ', array) -> aqui não ficou definido um valor, logo imprime undefined

array = null
console.log('b. ', array) -> ele imprime b.(fica um espaço aqui) null logo, fica assim:
                          -> b. null

array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c. ', array.length) -> imprime c.(espaço) 11 : logo fica assim: c. 11

let i = 0
console.log('d. ', array[i]) -> aqui ele imprime d. 3 ( ele imprime o primeiro index do elemento que é 3)

array[i+1] = 19 -> array [3+1] -> array [4] = 19 
console.log ('e. ', array) -> ele imprime uma lista [3, 19, 4, 5, 6,...]

