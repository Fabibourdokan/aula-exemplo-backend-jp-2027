const filmes = new Array(
    { titulo: "Planeta dos Macacos", classificacao: "12", descricao: "Ruim", lancamento: true },
    { titulo: "Poderoso Xefinho", classificacao: "18", descricao: "Esselente", lancamento: false },
    { titulo: "Branca de Neve", classificacao: "L", descricao: "Bom", lancamento: true },
)

class Filmes {

    Buscar() {
        return filmes
    }

    BuscarUm(id) {
        return filmes[id]
    }

    Criar(titulo, classificacao, descricao, lancamento) {
        filmes.push(
           { titulo, classificacao, descricao, lancamento }
        )
    }

    Alterar(id, titulo, classificacao, descricao, lancamento) {
        filmes[id].titulo = titulo
        filmes[id].classificacao = classificacao
        filmes[id].descricao = descricao
        filmes[id].lancamento = lancamento
    }

    AlterarStatus(id) {
        filmes[id].lancamento = !filmes[id].lancamento
    }


    Deletar(id) {
        filmes.splice(id, 1)
    }

}

export default new Filmes()