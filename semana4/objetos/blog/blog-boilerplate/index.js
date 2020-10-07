//Usando OBJETO + DOM

function apertandoBotao() { // função que executa quando aperta o botão
    const introduzirTitulo = document.getElementById("titulo-post") //variável que pega o título do post do html escrito no input
    const introduzirAutor = document.getElementById("autor-post")  // variável que pega o autor do post do html escrito no input
    const introduzirConteudo = document.getElementById("conteudo-post") // variável que pega o conteúdo do posto do html inserido no input
    

    let enviandoFormulario = { // Criando um objeto
        titulo: introduzirTitulo.value, // chave que pega a variável introduzirTitulo
        autor: introduzirAutor.value, //chave que pega a variável introduzirAutor
        conteudo: introduzirConteudo.value // chave que pega o valor da variável introduzirConteudo 
    }

    let listaFormulario = [introduzirTitulo.value + introduzirAutor.value + introduzirConteudo.value]

    let imprimindo = document.getElementById("container-de-posts") //local para imprimir posts
    imprimindo.innerHTML += `<p>${listaFormulario}</p>` // imprime o conteúdo inserido no array

    introduzirTitulo.value = "" // fazendo zerar o campo valor introduzir título quando aperto enter
    introduzirAutor.value = "" //fazendo zerar o campo valor introduzir autor quando aperto enter
    introduzirConteudo.value = "" // fazendo zerar o campo valor introduzir conteúdo quando aperto enter

    //console.log(listaFormulario)
}