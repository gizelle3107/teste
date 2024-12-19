function MostrarBoasVindas(){
    const nome = document.getElementById("nome").ariaValueMax;

    if (nome){
        document.getElementById("mensagem").textContent = `Olá,${nome}!Seja bem-vindo(a) ao nosso site!`;
    } else{
        document.getElementById("mensagem").textContent = `Por favor, digite seu nome!`;
    }
}