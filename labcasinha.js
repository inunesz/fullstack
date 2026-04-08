const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");



function desenhar_quadrado(x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}
function desenhar_linha(x1, y1, x2, y2, cor, largura = 2) {
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function desenhar_arco(x, y, raio, cor) {
    ctx.fillStyle = cor;
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, Math.PI * 2);
    ctx.fill();
}
function escrever(texto, x, y, cor, fonte = "12px Arial") {
    ctx.fillStyle = cor;
    ctx.font = fonte;
    ctx.fillText(texto, x, y);
}



desenhar_quadrado(0, 0, 300, 200, "#8fd3b6");
desenhar_quadrado(0, 200, 300, 100, "gray");
desenhar_arco(40, 260, 60, "#5c88da");
desenhar_arco(230, 60, 40, "yellow");
desenhar_quadrado(120, 150, 60, 50, "#8B4513");
desenhar_quadrado(145, 170, 15, 30, "#5a2d0c");
desenhar_quadrado(125, 160, 15, 15, "#87CEFA");
desenhar_quadrado(160, 160, 15, 15, "#87CEFA");
desenhar_linha(120, 150, 150, 120, "#e76f51", 4);
desenhar_linha(150, 120, 180, 150, "#e76f51", 4);
desenhar_linha(120, 150, 180, 150, "#e76f51", 4);
desenhar_quadrado(50, 170, 15, 40, "#8B4513");
desenhar_arco(57, 160, 20, "green");
desenhar_quadrado(240, 180, 15, 40, "#8B4513");
desenhar_arco(247, 170, 20, "green");
escrever("Canvas", 120, 20, "black", "14px Arial");