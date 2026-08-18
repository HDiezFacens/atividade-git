let contador = 0;

document.getElementById("botao").onclick = () => {
    contador++;

    document.getElementById("contadorTexto").textContent =
        `Você clicou ${contador} vez${contador === 1 ? "" : "es"}!`;
};