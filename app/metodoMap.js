//recebe livros como parametro
function aplicarDesconto(livros){
    const desconto = 0.3
    //aplicando um desconto par cada um dos livros
    //retorna todos os livros com desconto alterando apenas o valor do livro
    livrosComDesconto = livros.map(livro => {   

        //faz uma copia de tudo que tem de livro e altera o preco dele
        return {...livro, preco: livro.preco - (livro.preco*desconto)}     
    })
    return livrosComDesconto
}