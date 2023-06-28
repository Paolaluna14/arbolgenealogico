/*CÓDIGO JAVASCRIPT*/

const runClock = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const fullYear = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const clock = document.getElementById('clock');
  clock.innerHTML = `${day}/${month}/${fullYear} ${hours}:${minutes}:${seconds}`;
};
setInterval(runClock, 1000);

/*bienvenida*/

alert("¡Bienvenido a mi árbol genealógico!");
