
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (!nome || !mensagem) {
        alert('Por favor, preencha seu nome e mensagem!');
        return;
    }
    
    const telefone = '5518981607700';
    const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url);

    window.open(url, '_blank');
}