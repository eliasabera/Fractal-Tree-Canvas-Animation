window.addEventListener('load', function () {
  const canvas = document.querySelector("canvas");
  const btn = document.querySelector(".btn")
  const spreads = document.getElementById(".spread");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext('2d');
  const maxleve = 6
  const size = canvas.width<canvas.height ? canvas.width*.3 : canvas.height*.3
  const branches = 2
  let spread = .4
  let scale = .5
  let sides=11

  let color='hsl('+Math.random()*360+',100%,50%)'
  
  ctx.lineWidth = 10;
  ctx.lineCap='round'
  ctx.strokeStyle = "gold"
  ctx.shadowColor = 'rgb(0,0,0,0.7)'
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 10
  



  function drawline(level) {
    if (level > maxleve) return;
    ctx.beginPath();
    ctx.moveTo(0, 0)
    ctx.lineTo(size, 0);
    ctx.stroke()
    for (let i = 0; i < branches; i++){
      ctx.save()
      ctx.translate(size-(size/branches)*i, 0)
      ctx.rotate(spread)
      ctx.scale(scale, scale)
      drawline(level+1)
      ctx.restore()
      ctx.save()
      ctx.translate(size-(size/branches)*i, 0)
      ctx.rotate(-spread)
      ctx.scale(scale, scale)
      drawline(level+1)
      ctx.restore()
    }

    
  }
  btn.addEventListener("click", () => {
    spread = Math.random() * 2.9 + 0.1;
    scale = Math.random() * 0.2 + 0.4;
    sides = Math.floor(Math.random() * 7 + 2);
    color = 'hsl(' + Math.random() * 360 + ',100%,50%)';
    drawFractal()
  });
  
  spreads.addEventListener('change', function(e) {
    console.log(e.target.value)
    spread = e.target.value
    drawFractal()
  })

  function updateSlider() {
    spreads.value = spread;
   
  }

  function drawFractal() {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.save();
      ctx.strokeStyle=color
      ctx.translate(canvas.width / 2, canvas.height / 2); 
      for (let i = 0; i < sides; i++){
        ctx.rotate((Math.PI * 2) / sides)
        drawline(0);
     
      }
      ctx.restore();
    }
    drawFractal()

})