let listaUsuarios = [
    { id:1, email: "admin@mail.com", senha: "123456" }
];
let autoIncrement = 2;

function listar() {
    return Promise.resolve(listaUsuarios);
}

function buscarPorId(id) {
    return Promise.resolve(listaUsuarios.find(
        function(usuario) {
            return (usuario.id == id);        
        }
    ));
}

function inserir(usuario) {
    if(!usuario || !usuario.email || !usuario.senha) {
        return Promise.resolve(undefined);
    }

    usuario.id = autoIncrement++;
    listaUsuarios.push(usuario);
    return Promise.resolve(usuario);
}

function buscarPorEmail(email) {
    return Promise.resolve(listaUsuarios.find(
        function(usuario) {
            return (usuario.email == email)
        }
    ));
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    buscarPorEmail
}