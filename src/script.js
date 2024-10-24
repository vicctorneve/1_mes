function createHeart() {
   const heart = document.createElement('div');
   heart.classList.add('heart');
 
   // Posição inicial aleatória
   heart.style.left = Math.random() * 100 + 'vw';
   heart.style.animationDuration = Math.random() * 2 + 3 + 's';
 
   document.getElementById('heart-container').appendChild(heart);
 
   // Remove o coração após a animação terminar
   setTimeout(() => {
     heart.remove();
   }, 5000); // Tempo da animação em 5s
 }
 
 // Cria um coração a cada 500ms
 const intervalId = setInterval(createHeart, 500);
 
 // Para a animação após um tempo específico (por exemplo, 10 segundos)
 setTimeout(() => {
   clearInterval(intervalId); // Para a criação de novos corações
 }, 5000); // Duração total da animação em milissegundos (10 segundos)
 