let listaEditoras = [];
let autoIncrement = 1;

function listar() {
    return Promise.resolve(listaEditoras);
}

function inserir(editora) {
    editora.id = autoIncrement++;
    listaEditoras.push(editora);
    return Promise.resolve(editora);
}

function buscarPorId(id) {
    return Promise.resolve(listaEditoras.find(
        function(editora) {
            return (editora.id == id);        
        }
    ));
}

function buscarIndicePorId(id) {
    return listaEditoras.findIndex((editora) => editora.id === id);
}

function atualizar(id, editoraAtual) {
    let indice = buscarIndicePorId(id);
    if(indice >= 0) {
        editoraAtual.id = id; 
        listaEditoras[indice] = editoraAtual;
        return Promise.resolve(listaEditoras[indice]);
    }
    return Promise.resolve(undefined);
}

function deletar(id) {
    let indiceEditora = buscarIndicePorId(id);
    if(indiceEditora >= 0) {
        let editoraRemovida = listaEditoras.splice(indiceEditora, 1)[0];
        return editoraRemovida;
    }
    return Promise.resolve(undefined);

}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}