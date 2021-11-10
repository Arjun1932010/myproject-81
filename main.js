<canvas id="myCanvas" width="800" height="600" style=" "></canvas>
canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.LineWidth= 1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.LineWidth= 2;
ctx.rect(220,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.LineWidth= 3;
ctx.rect(300,218,40,0,2*Math.PI);
ctx.stroke();