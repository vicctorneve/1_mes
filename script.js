function showLoveMessage() {
   var message = document.getElementById('loveMessage');
   message.classList.toggle("visible")
}

 
function startCronometro(dataInicio) {
   const startDate = new Date(dataInicio); 

   function updateCronometro() {
      const currentDate = new Date(); 
      const elapsedTime = currentDate - startDate; 

      const seconds = Math.floor((elapsedTime / 1000) % 60);
      const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
      const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
      const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
      let months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
      months -= startDate.getMonth();
      months += currentDate.getMonth(); 

      let formattedTime = `${days} dias, ${String(hours).padStart(2, '0')} horas, ${String(minutes).padStart(2, '0')} minutos e ${String(seconds).padStart(2, '0')} segundos`;

      console.log(months)

      if(days==30){
         formattedTime = `${months} mês  ${String(hours).padStart(2, '0')} horas ${String(minutes).padStart(2, '0')} minutos ${String(seconds).padStart(2, '0')} segundos`;
      } 


      document.getElementById("cronometro").innerText = formattedTime;
   }

   setInterval(updateCronometro, 1000);
}

const dataInicio = '2024-09-27T20:09:00';
startCronometro(dataInicio);
