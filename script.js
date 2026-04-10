document.getElementById('registrarDados').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Pega valores ATUALIZADOS dentro do listener
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    
    // Como objeto (mais fácil acessar .nome)
    const dados = {
        nome: nome,
        email: email,
        telefone: telefone
    };
    
    document.getElementById('resultado').textContent =
        `Adicionado - Nome: ${dados.nome} | Email: ${dados.email} | Telefone: ${dados.telefone}`;
    
    // Limpa o form
    document.getElementById('registrarDados').reset();
});