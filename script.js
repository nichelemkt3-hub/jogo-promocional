let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

bola.addEventListener("touchstart", e => {
  const touch = e.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;
});

bola.addEventListener("touchend", e => {
  const touch = e.changedTouches[0];
  endX = touch.clientX;
  endY = touch.clientY;

  processarSwipe();
});

function processarSwipe() {
  const dx = endX - startX;
  const dy = startY - endY; // pra cima

  if (dy < 50) return; // swipe fraco, ignora

  let forca = Math.min(dy, 250);
  let direcao = dx;

  chutarSwipe(direcao, forca);
}
