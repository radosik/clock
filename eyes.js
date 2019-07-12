const eyes = document.getElementById("canvas2");
const ctx1 = eyes.getContext("2d");
let x1 = 170;
let x2 = 360;
let y1 = 256;
let dx = 3;
let ballRadius = 40;

const eye = () => {
  ctx1.clearRect(0, 0, 512, 512);
  ctx1.beginPath();
  ctx1.arc(x1, y1, ballRadius,0, Math.PI*2);
  ctx1.fill();
  ctx1.beginPath();
  ctx1.arc(x2, y1, ballRadius,0, Math.PI*2);
  ctx1.fill();
  x1 += dx;
  x2 += dx;
  if (x1 > 200 || x2 < 320) {
    dx = -dx;
  }

};

setInterval(eye, 60);
