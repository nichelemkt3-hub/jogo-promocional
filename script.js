const bola = document.getElementById("bola");
const goleiro = document.getElementById("goleiro");
const resultado = document.getElementById("resultado");
const btn = document.getElementById("btnChutar");
const barra = document.getElementById("forca");

let forca = 0;
let subindo = true;
let intervalo;
let jogando = false;

/* BARRA OSCILANDO */
function iniciarBarra() {
  intervalo = setInterval(() => {
    if (subindo) {
      forca += 2;
      if (forca >= 100) subindo = false;
    } else {
      forca -= 2;
      if (forca <= 0) subindo = true;
    }
    barra.style.width = forca + "%";
  }, 30);
}

iniciarBarra();

/* BOTÃO */
btn.addEventListener("click", () => {
  if (jogando) return;
  jogando = true;
  clearInterval(intervalo);
  chutar();
});

function chutar() {
  bola.style.transform = "translateX(-50%)";

  const direcao = Math.random();

  setTimeout(() => {
    let altura = -200 - forca;
    bola.style.transform = `translate(${direcao < 0.5 ? -80 : 80}px, ${altura}px)`;

    goleiro.style.left = direcao < 0.5 ? "30px" : "190px";

    if (forca > 40 && forca < 80 && direcao > 0.5) {
      resultado.innerText = "⚽ GOOOOL!";
    } else {
      resultado.innerText = "🧤 DEFESA!";
    }

    resetar();
  }, 100);
}

function resetar() {
  setTimeout(() => {
    bola.style.transform = "translateX(-50%)";
    goleiro.style.left = "110px";
    forca = 0;
    subindo = true;
    jogando = false;
    iniciarBarra();
  }, 1200);
}
