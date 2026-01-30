const bola = document.getElementById("bola");
const goleiro = document.getElementById("goleiro");
const resultado = document.getElementById("resultado");
const contador = document.getElementById("contador");

const somChute = document.getElementById("somChute");
const somGol = document.getElementById("somGol");
const somDefesa = document.getElementById("somDefesa");

let tentativas = 3;

// TOUCH
let startX = 0;
let startY = 0;

bola.addEventListener("touchstart", e => {
  const t = e.touches[0];
  startX = t.clientX;
  startY = t.clientY;
});

bola.addEventListener("touchend", e => {
  if (tentativas <= 0) return;

  const t = e.changedTouches[0];
  const dx = t.clientX - startX;
  const dy = startY - t.clientY;

  if (dy < 50) return;

  tentativas--;
  contador.innerText = tentativas;

  chutar(dx, dy);

  if (tentativas <= 0) {
    setTimeout(() => {
      document.getElementById("modalCompra").style.display = "flex";
    }, 1200);
  }
});

function chutar(dx, dy) {
  somChute.play();

  const x = Math.max(-100, Math.min(100, dx));
  const y = -200 - Math.min(dy, 200);

  bola.style.transform = `translate(${x}px, ${y}px) rotate(720deg)`;
  goleiro.style.left = x < 0 ? "30px" : "190px";

  const gol = dy > 120 && Math.abs(x) > 30;

  setTimeout(() => {
    if (gol) {
      resultado.innerText = "⚽ GOOOOL!";
      somGol.play();
    } else {
      resultado.innerText = "🧤 DEFESA!";
      somDefesa.play();
    }
  }, 300);

  setTimeout(resetar, 1200);
}

function resetar() {
  bola.style.transform = "translateX(-50%)";
  goleiro.style.left = "110px";
}

function comprar() {
  tentativas = 3;
  contador.innerText = tentativas;
  document.getElementById("modalCompra").style.display = "none";
}
