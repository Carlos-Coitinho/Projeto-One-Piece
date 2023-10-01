const botoes = document.querySelectorAll(".botao");

const personagem = document.querySelectorAll(".personagem");

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        botao.classList.add("selecionado");

        desselecionarPersonagem();
        personagem[i].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}