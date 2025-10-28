const editoraRepository = require("../repository/editora_repository")

async function listar() {
    return await editoraRepository.listar();
}

async function inserir(editora) {
    //Validar se editora tem nome e preço
    if(editora && editora.nome && editora.cidade){
        return await editoraRepository.inserir(editora);
    }
    else {
        //Erro
        throw { id: 400, msg: "Editora sem dados corretos"};
    }


}

async function buscarPorId(id) {
    let editora = await editoraRepository.buscarPorId(id);
    if(editora) {
        return editora;
    }
    else {
        throw { id: 404, msg: "Editora não encontrado!"};
    }
}
async function atualizar(id, editora) {
    if(editora && editora.nome && editora.email && editora.cidade) {
        const produtoAtualizado = await editoraRepository.atualizar(id, editora);
        if(produtoAtualizado) {
            return produtoAtualizado;
        }        
        else {
            throw {id:404, msg: "Editora não encontrado"};
        }
    }
    else {
        throw {id:400, msg: "Editora sem dados corretos"};
    }
}

async function deletar(id) {
    let editora = await editoraRepository.deletar(id);
    if(editora) {
        return editora;
    }
    else {
        throw { id: 404, msg: "Editora não encontrado!" }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}