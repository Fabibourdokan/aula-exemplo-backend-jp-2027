import Pessoa from '../model/pessoa.js'

class ServicePessoa {

    async Buscar() {
        return Pessoa.findll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Pessoa.BuscarUm(id)
    }
    
    Criar(nome, idade) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
        Pessoa.Criar(nome, idade)
    }
    
    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        
        const PessoaAlterar = await Pessoa.findByPk(id)
        
        if(!PessoaAlterar) {
            throw new Error("Pessoa não encontrada")
        }

        PessoaAlterar.nome = nome
        await PessoaAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        
        const pessoa = await Pessoa.findByPk(id)

        if(!pessoa) {
            throw new Error("Pessoa não encontrada")
        }
        await pessoa.destroy()
    }
}

export default new ServicePessoa()