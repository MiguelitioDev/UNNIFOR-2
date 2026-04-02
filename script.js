// Seleciona o botão pelo ID
const botao = document.getElementById('btn-alert');

// Adiciona um evento de clique
botao.addEventListener('click', function() {
    alert('O JavaScript externo está funcionando corretamente!');
    
    // Exemplo de manipulação do header via JS
    const header = document.getElementById('main-header');
    header.style.backgroundColor = '#007bff';
});
