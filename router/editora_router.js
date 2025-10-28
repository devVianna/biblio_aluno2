const express = require("express");
const router = express.Router();

const editoraController = require("../controller/livro_controller")

//endpoint: /api/produtos
router.get('/', editoraController.listar);
router.post('/', editoraController.inserir);
router.get('/:id', editoraController.buscarPorId);
router.put('/:id', editoraController.atualizar);
router.delete('/:id', editoraController.deletar);

module.exports = router;