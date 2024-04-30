let btnOrdernarPorPreco = document.querySelector('#btnOrdenarPorPreco')
btnOrdernarPorPreco.addEventListener('click', ordernarPorPreco)

function ordernarPorPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}