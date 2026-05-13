const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");


function desenharQuadrado(x, y, largura, altura, cor){
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function desenharLinha(x1, y1, x2, y2, cor){
    ctx.strokeStyle = cor;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function desenharArco(x, y, raio, inicio, fim, cor){
    ctx.strokeStyle = cor;

    ctx.beginPath();
    ctx.arc(x, y, raio, inicio, fim);
    ctx.stroke();
}

function desenharCirculo(x, y, raio, cor){
    ctx.fillStyle = cor;

    ctx.beginPath();
    ctx.arc(x, y, raio, 0, Math.PI * 2);
    ctx.fill();
}

function desenharTriangulo(x1, y1, x2, y2, x3, y3, cor){
    ctx.fillStyle = cor;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
}

desenharQuadrado(0, 0, 300, 300, "white");


desenharQuadrado(0, 0, 35, 35, "blue");
desenharQuadrado(265, 0, 35, 35, "red");

desenharQuadrado(0, 265, 35, 35, "yellow");
desenharQuadrado(265, 265, 35, 35, "black");


desenharLinha(35, 35, 150, 150, "blue");
desenharLinha(265, 35, 150, 150, "red");


desenharArco(150, 150, 55, Math.PI, 0, "green");
desenharArco(150, 150, 40, Math.PI, 0, "green");

desenharArco(150, 300, 55, Math.PI, 0, "green");
desenharArco(150, 300, 40, Math.PI, 0, "green");


desenharCirculo(150, 75, 12, "skyblue");
desenharCirculo(70, 235, 12, "yellow");
desenharCirculo(230, 235, 12, "yellow");


desenharQuadrado(120, 165, 30, 30, "red");


desenharQuadrado(0, 140, 20, 20, "turquoise");
desenharQuadrado(0, 160, 20, 20, "turquoise");

desenharQuadrado(280, 150, 20, 20, "turquoise");


desenharQuadrado(320, 0, 300, 300, "#8ee0c2");


desenharCirculo(550, 60, 35, "yellow");


desenharQuadrado(320, 230, 300, 70, "gray");


desenharCirculo(320, 300, 80, "#4a86e8");


desenharQuadrado(430, 160, 70, 70, "#8b4513");


desenharTriangulo(425, 160, 465, 125, 505, 160, "#d95d39");


desenharQuadrado(455, 185, 20, 45, "#5c3317");


desenharQuadrado(438, 172, 18, 18, "#87ceeb");
desenharQuadrado(474, 172, 18, 18, "#87ceeb");


desenharQuadrado(355, 185, 15, 45, "#8b4513");
desenharCirculo(362, 180, 20, "green");


desenharQuadrado(585, 200, 15, 45, "#8b4513");
desenharCirculo(592, 195, 20, "green");