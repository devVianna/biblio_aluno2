const editoraService = require('../service/editora_service')

async function listar(req, res) {
    res.json(await editoraService.listar());
}

async function inserir (req, res) {
    let editora = req.body;
    try { 
        editora = await editoraService.inserir(editora);
        res.status(201).json(editora);
    }
    catch(err) {
        res.status(err.id).json(err);
    }
}

async function buscarPorId(req, res) {    
    const id = +req.params.id;
    try {
        res.json(await editoraService.buscarPorId(id));
    } catch(err) {
        res.status(err.id).json(err);
    }
}

async function atualizar(req, res) {
    const id = +req.params.id;
    let editora = req.body;
    try{
        res.json(await editoraService.atualizar(id, editora));
    } catch(err) {
        res.status(err.id).json(err);
    }
}

async function deletar (req, res) {
    const id = +req.params.id;
    try {
        res.json(await editoraService.deletar(id));
    } catch(err) {
        res.status(err.id).json(err);
    }
}

module.exports = {
    listar, inserir, buscarPorId, atualizar, deletar
}