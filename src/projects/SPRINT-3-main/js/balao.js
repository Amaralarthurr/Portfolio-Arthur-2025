function toggleBalao() {
  const balao = document.getElementById("balao-cicquinho");
  balao.classList.toggle("mostrar");
}

setInterval(toggleBalao, 10000); // O balão vai aparecer e desaparecer a cada 10 segundos
