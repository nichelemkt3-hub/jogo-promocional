let tentativas = 3;

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnChutar");

  btn.addEventListener("click", chutar);
});

function chutar() {
  const resultado = document.getElementById("resultado");
  const spanTentativas = document.getElementById("tentativas");

  if (tentativas <= 0) {
    resultado.innerText = "❌ Fim de jogo!";
    return;
  }

  tentativas--;
  spanTentativas.innerText = tentativas;

  const ganhou = Math.random() < 0.3;

  if (ganhou) {
    resultado.innerText = "🎉 GOOOOL! Você ganhou um cupom!";
  } else {
    resultado.innerText = "🧤 Defesa! Tente novamente.";
  }
}
