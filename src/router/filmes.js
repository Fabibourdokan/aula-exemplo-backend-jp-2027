import express from 'express'
import ControllerFilmes from '../controller/filmes.js'

const router = express.Router()

// padrao é: endpoint - controller.funcao
// Busca Todos 
router.get("/buscar", ControllerFilmes.Buscar)
// Busca um - ID
router.get("/buscarUm/:id", ControllerFilmes.BuscarUm)
// Criar
router.post("/criar", ControllerFilmes.Criar)
// Alterar
router.put("/alterar/:id", ControllerFilmes.Alterar)
// AlterarStatus
router.put("/alterarstatus/:id", ControllerFilmes.AlterarStatus)
// Deletar
router.delete("/deletar/:id", ControllerFilmes.Deletar)

export default router