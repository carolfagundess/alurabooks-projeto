const elementoInserirLivro = document.querySelector('#livros')
const elementoTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

//funcation para mostrar os livros na tela
function exibirLivrosNaTela(listaDeLivros){
  elementoTotalLivrosDisponiveis.innerHTML = ''
  elementoInserirLivro.innerHTML = ''
    listaDeLivros.forEach(livro => {
      //verificando disponibilidade do item
      let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'
        //codigo para inserir o livro
        elementoInserirLivro.innerHTML+=`
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    ` 
    });
}

