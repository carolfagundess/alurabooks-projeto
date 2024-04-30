const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', filtrarLivros))


function filtrarLivros(){
    //armazena o elemento button em uma variavel js
    const elementoButton = document.getElementById(this.id)
    //armazena o valor da variavel js
    const categoriaButton = elementoButton.value
    //realiza o filtro com base no value do button na lista de livros 
    let livrosFiltrados = categoriaButton == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoriaButton)
    exibirLivrosNaTela(livrosFiltrados)
    if (categoriaButton == 'disponivel') {
        const valorTotal = calcularValorLivrosDisponiveis(livrosFiltrados)
        exibirTotalLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoriaButton) {
    return livros.filter(livro => livro.categoria == categoriaButton)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirTotalLivrosDisponiveisNaTela(valorTotal){
    elementoTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}