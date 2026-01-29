function chutar() {
  resultado.innerText = "";
  bola.className = "bola";

  const chance = Math.random();

  setTimeout(() => {
    bola.classList.add("chute");

    if (chance < 0.5) {
      bola.style.transform = "translate(-80px, -260px)";
      goleiro.style.left = "20px";
      resultado.innerText = "🧤 DEFESA!";
    } else {
      bola.style.transform = "translate(80px, -260px)";
      goleiro.style.left = "180px";
      resultado.innerText = "⚽ GOOOOL!";
    }
  }, 100);
}
