// Função para salvar um novo usuário//
function salvarUsuario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    // Criar um objeto para representar o usuário//
    var usuario = { nome: nome, email: email };

    // Converter o objeto para uma string JSON e salvar no localStorage//
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirecionar de volta para a página de login//
    window.location.href = 'login.html';
}
