let livros = []
const endpointApi = `https://guilhermeonrails.github.io/casadocodigo/livros.json`

getBuscarLivrosApi()

async function getBuscarLivrosApi(){
  //espere por um promessa
  const res = await fetch(endpointApi)
  //pegando a resposa do endpoit 
  livros = await res.json()
  let livrosComDesconto = aplicarDesconto(livros)
  // console.table(livros)
  //passando a lista de livros como parametro
  exibirLivrosNaTela(livrosComDesconto)
}