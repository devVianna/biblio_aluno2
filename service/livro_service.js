const livroRepository = require("../repository/produto_repository")

async function listar() {
    return await livroRepository.listar();
}

async function inserir(livro) {
    //Validar se livro tem nome e preço
    if(livro && livro.nome && livro.autor){
        return await livroRepository.inserir(livro);
    }
    else {
        //Erro
        throw { id: 400, msg: "Livro sem dados corretos"};
    }


}

async function buscarPorId(id) {
    let livro = await livroRepository.buscarPorId(id);
    if(livro) {
        return livro;
    }
    else {
        throw { id: 404, msg: "Livro não encontrado!"};
    }
}
async function atualizar(id, livro) {
    if(livro && livro.nome && livro.editora && livro.autor) {
        const produtoAtualizado = await livroRepository.atualizar(id, livro);
        if(produtoAtualizado) {
            return produtoAtualizado;
        }        
        else {
            throw {id:404, msg: "Produto não encontrado"};
        }
    }
    else {
        throw {id:400, msg: "Produto sem dados corretos"};
    }
}

async function deletar(id) {
    let livro = await livroRepository.deletar(id);
    if(livro) {
        return livro;
    }
    else {
        throw { id: 404, msg: "Livro não encontrado!" }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}