var canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth= 6;
ctx.arc(220,200,45,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth= 6;
ctx.arc(275,250,45,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth= 6;
ctx.arc(335,200,45,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth= 6;
ctx.arc(395,250,45,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth= 6;
ctx.arc(455,200,45,0,2*Math.PI);
ctx.stroke();