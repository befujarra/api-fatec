// Função para fazer login//
function logar() {
    var email = document.getElementById('login-email').value;

   
    // Recuperar o usuário salvo do localStorage//
    var usuarioSalvo = localStorage.getItem('usuario');

    // Verificar se o usuário está cadastrado
    if (usuarioSalvo) {
        // Converter a string JSON de volta para um objeto JavaScript//
        var usuario = JSON.parse(usuarioSalvo);

        // Verificar se o email fornecido corresponde ao email cadastrado//
        if (email === usuario.email) {
            // Redirecionar para a página home.html//
            window.location.href = 'home.html';
        } else {
            alert("E-mail não encontrado. Por favor, cadastre-se primeiro.");
        }
    } else {
        alert("E-mail não encontrado. Por favor, cadastre-se primeiro.");
    }
}
