// -------------------------------------
//   Mountains
// -------------------------------------

var canvas = document.getElementById("hero-mountains");
var context = canvas.getContext('2d');

canvas.height = 300;
canvas.width = 2880;

function small(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

context.beginPath();
context.moveTo(0, small(100, 200));
context.lineTo(720, small(100, 200));
context.lineTo(1440, small(100, 200));
context.lineTo(2160, small(100, 200));
context.lineTo(2880, small(100, 200));
context.lineTo(2880, 400);
context.lineTo(0, 400);
context.closePath();
context.fillStyle = 'rgba(240, 241, 242, 1)';
context.fill();

context.beginPath();
context.moveTo(0, Math.floor(Math.random() * 200) + 50);
context.lineTo(720, Math.floor(Math.random() * 200) + 50);
context.lineTo(1440, Math.floor(Math.random() * 200) + 50);
context.lineTo(2160, Math.floor(Math.random() * 200) + 50);
context.lineTo(2880, Math.floor(Math.random() * 200) + 50);
context.lineTo(2880, 400);
context.lineTo(0, 400);
context.closePath();
context.fillStyle = 'rgba(240, 241, 242, 0.75)';
context.fill();

context.beginPath();
context.moveTo(0, Math.floor(Math.random() * 200));
context.lineTo(720, Math.floor(Math.random() * 200));
context.lineTo(1440, Math.floor(Math.random() * 200));
context.lineTo(2160, Math.floor(Math.random() * 200));
context.lineTo(2880, Math.floor(Math.random() * 200));
context.lineTo(2880, 400);
context.lineTo(0, 400);
context.closePath();
context.fillStyle = 'rgba(240, 241, 242, 0.5)';
context.fill();

// -------------------------------------
//   Drapes
// -------------------------------------

var cnvs = document.getElementById("hero-drapes");
var ctx = cnvs.getContext('2d');

cnvs.height = 300;
cnvs.width = 2880;

ctx.beginPath();
ctx.moveTo(0, Math.floor(Math.random() * 110) + 190);
ctx.lineTo(720, Math.floor(Math.random() * 110) + 190);
ctx.lineTo(1440, Math.floor(Math.random() * 110) + 190);
ctx.lineTo(2160, Math.floor(Math.random() * 110) + 190);
ctx.lineTo(2880, Math.floor(Math.random() * 110) + 190);
ctx.lineTo(2880, 400);
ctx.lineTo(0, 400);
ctx.closePath();
ctx.fillStyle = 'rgba(255, 255, 255, 1)';
ctx.fill();

ctx.beginPath();
ctx.moveTo(0, Math.floor(Math.random() * 200) + 50);
ctx.lineTo(720, Math.floor(Math.random() * 200) + 50);
ctx.lineTo(1440, Math.floor(Math.random() * 200) + 50);
ctx.lineTo(2160, Math.floor(Math.random() * 200) + 50);
ctx.lineTo(2880, Math.floor(Math.random() * 200) + 50);
ctx.lineTo(2880, 400);
ctx.lineTo(0, 400);
ctx.closePath();
ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
ctx.fill();

ctx.beginPath();
ctx.moveTo(0, Math.floor(Math.random() * 200));
ctx.lineTo(720, Math.floor(Math.random() * 200));
ctx.lineTo(1440, Math.floor(Math.random() * 200));
ctx.lineTo(2160, Math.floor(Math.random() * 200));
ctx.lineTo(2880, Math.floor(Math.random() * 200));
ctx.lineTo(2880, 400);
ctx.lineTo(0, 400);
ctx.closePath();
ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
ctx.fill();
