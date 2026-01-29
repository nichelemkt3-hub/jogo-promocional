const bola = document.getElementById("bola");
const goleiro = document.getElementById("goleiro");
const resultado = document.getElementById("resultado");
const btn = document.getElementById("btnChutar");

btn.addEventListener("click", chutar);

function chutar() {
  resultado.innerText = "";

  // reset
  bola.className = "bola";
  goleiro.style.left = "80px";

  const direcao = Math.random();

  setTimeout(() => {
    if (direcao < 0.33) {
      bola.classList.add("chute-esq");
      goleiro.style.left = "10px";
      resultado.innerText = "🧤 Defesa!";
    } else if (direcao < 0.66) {
      bola.classList.add("chute-centro");
      goleiro.style.left = "80px";
      resultado.innerText = "🧤 Defesa!";
    } else {
      bola.classList.add("chute-dir");
      goleiro.style.left = "150px";
      resultado.innerText = "🎉 GOOOOL!";
    }
  }, 100);
}
