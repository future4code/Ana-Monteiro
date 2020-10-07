
/*Exercício Obrigatório e desafio 1 -> Desafio do alert

function adicionaTarefa() {
    const minhaTarefa = document.getElementById("tarefa")
    const diaEscolhido = document.getElementById("dias-semana").value
    const minhaLista = document.getElementById(diaEscolhido)

    if (minhaTarefa.value === ""){
        alert ("Tarefa inválida!")
    }

    minhaLista.innerHTML += `<li onclick="riscarTarefa1(this)">${minhaTarefa.value}</li>`
    minhaTarefa.value = ""
   

    console.log(diaEscolhido)
}/*

/*Desafios 

1. Incluso no exercício obrigatório

2.

function riscarTarefa1(id) {
    const minhaTarefa = document.getElementById("tarefa")
    const diaEscolhido = document.getElementById("dias-semana").value
    const minhaLista = document.getElementById(diaEscolhido)

    id.style.textDecoration="line-through"
}

3.

function apagarLista(){
    const minhaTarefa = document.getElementById("tarefa")
    const diaEscolhido = document.getElementById("dias-semana").value
    const minhaLista = document.getElementById(diaEscolhido)

    const apagandoLista = document.getElementsByClassName("nome-da-class")
    for (let i=0; i < apagandoLista.length; i++){
        apagandoLista[i].innerHTML = ""
    }
    return
}/*





