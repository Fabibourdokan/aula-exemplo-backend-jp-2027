import Filmes from '../model/filmes.js'

class ServiceFilmes {

    Buscar() {
        return Filmes.Buscar()
    }

    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Informe um id válido")
        }

        return Filmes.BuscarUm(id)
    }

    Criar(titulo, classificacao, descricao, lancamento) {
        if(!titulo || !classificacao || !descricao || lancamento == undefined) {
            throw new Error("Favor informar os dados corretamente")
        }

       Filmes.Criar(titulo, classificacao, descricao, lancamento)
    }

    Alterar(id, titulo, classificacao, descricao, lancamento) {
        if(!id || isNaN(id) || !titulo || !classificacao || !descricao || lancamento == undefined) {
            throw new Error("Favor informar os dados corretamente")
        }

        Filmes.Alterar(id, titulo, classificacao, descricao, lancamento)
    }

    AlterarStatus(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar os dados corretamente")
        }

        Filmes.AlterarStatus(id)
    }

    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Informe um id válido")
        }

        Filmes.Deletar(id)
    }

}

export default new ServiceFilmes()