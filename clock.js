const x = 256;
const y = 300;
clock = document.getElementById("canvas");
ctx = clock.getContext("2d");

function loop() {
  date = new Date();
  h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  const centerX = clock.width / 2;
  const centerY = clock.height / 2;
  function drawNumber() {
    for (n = 0; n < 12; n++) {
      d = -60;
      num = new Number(n + 1);
      str = num.toString();
      dd = (Math.PI / 180) * (d + n * 30);
      tx = Math.cos(dd) * 120 + centerX;
      ty = Math.sin(dd) * 120 + centerY;
      ctx.clearRect(0,0,512,512);
    }
  }
  drawNumber();

  drawPointer(360 * (h / 12) + (m / 60) * 30 - 90, 100, "black", 5);
  drawPointer(360 * (m / 60) + (s / 60) * 6 - 90, 150, "black", 5);
  drawPointer(360 * (s / 60) + x + 14, 160, "red", 2);
}

function drawPointer(deg, len, color, w) {
  let rad = (Math.PI / 180) * deg;
  let x1 = x + Math.cos(rad) * len;
  let y1 = y + Math.sin(rad) * len;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = w;
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.stroke();
}
setInterval(loop, 500);
