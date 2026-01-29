let tentativas = 3;

function chutar() {
  if (tentativas <= 0) {
    alert("Fim de jogo!");
    return;
  }

  tentativas--;
  document.getElementById("tentativas").innerText = tentativas;

  const ganhou = Math.random() < 0.3;

  if (ganhou) {
    document.getElementById("resultado").innerText =
      "GOOOOL! Você ganhou um cupom!";
  } else {
    document.getElementById("resultado").innerText =
      "Defesa! Tente de novo.";
  }
}

