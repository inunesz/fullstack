
    const canvas = document.getElementById("meuCanvas");
    const ctx = canvas.getContext("2d");

    const TAMANHO = 40; 
    const METADE  = TAMANHO / 2; 

   
    let posX = canvas.width  / 2; 
    let posY = canvas.height / 2; 

    function desenharPersonagem(x, y) {
     
      ctx.beginPath();
      ctx.arc(x, y, METADE, 0, Math.PI * 2); 
      ctx.fillStyle = "#ff032dff";
      ctx.fill();
      ctx.strokeStyle = "#ff042eff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();

      
      ctx.beginPath();
      ctx.arc(x - 10, y - 8, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#1a1a2e";
      ctx.fill();
      ctx.closePath();

      
      ctx.beginPath();
      ctx.arc(x + 10, y - 8, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#1a1a2e";
      ctx.fill();
      ctx.closePath();

      
      ctx.beginPath();
      ctx.arc(x, y + 5, 12, 0, Math.PI); 
      ctx.strokeStyle = "#1a1a2e";
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.closePath();
    }

   
    function animar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      
      desenharPersonagem(posX, posY);

      requestAnimationFrame(animar);
    }

    canvas.addEventListener("mousemove", function(evento) {
      const retangulo = canvas.getBoundingClientRect();

    
      let mouseX = evento.clientX - retangulo.left;
      let mouseY = evento.clientY - retangulo.top;

      
      posX = Math.max(METADE, Math.min(canvas.width  - METADE, mouseX));
      posY = Math.max(METADE, Math.min(canvas.height - METADE, mouseY));
    });

    
    canvas.addEventListener("mouseleave", function() {
    });
    animar();

