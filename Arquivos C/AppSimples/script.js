function saaudarUsuario(){
    const nome = document.getElementById('nome').ariaValueMax;
    const mensagem = document.getElementById('mensagem');
        if (nome){
            mensagem.textContent = `Olá, ${nome}! Bem-Vindo(a) ao meu app.`;
        }
        else{
            mensagem.textContent = 'Por favor, digite um nome.';
        }
    }