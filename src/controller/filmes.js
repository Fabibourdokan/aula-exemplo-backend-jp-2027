import ServiceFilmes from '../service/filmes.js'

class ControllerFilmes {

    Buscar(req, res) {
        try {
            const filmes = ServiceFilmes.Buscar()

            res.send({ filmes })
        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const filme = ServiceFilmes.BuscarUm(id)

            res.send({ filme })
        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    Criar(req, res) {
        try {
            const { titulo, classificacao, descricao, lancamento } = req.body

            ServiceFilmes.Criar(titulo, classificacao, descricao, lancamento)

            res.send({ mensagem: "Filme criado com sucesso!" })
        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const { titulo, classificacao, descricao, lancamento } = req.body

            ServiceFilmes.Alterar(id, titulo, classificacao, descricao, lancamento)

            res.send({ mensagem: "Filme alterado com sucesso!" })
        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    AlterarStatus(req, res) {
        try {
            const id = req.params.id

            ServiceFilmes.AlterarStatus(id)

            res.send({ mensagem: "Filme alterado com sucesso!" })
        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id

            ServiceFilmes.Deletar(id)

            res.send({ mensagem: "Filme deletado com sucesso!" })

        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

}

export default new ControllerFilmes()