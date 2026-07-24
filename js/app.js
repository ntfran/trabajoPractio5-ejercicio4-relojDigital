const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let ultimoDiaRegistrado = null;

function actualizarFecha() {
  const fechaHora = new Date();
  const diaSemana = fechaHora.getDay();

  if (diaSemana === ultimoDiaRegistrado) return;

  ultimoDiaRegistrado = diaSemana;

  const fecha = String(fechaHora.getDate()).padStart(2, "0");
  const mes = fechaHora.getMonth();
  const anio = fechaHora.getFullYear();

  document.getElementById("fecha").textContent =
    `${diasSemana[diaSemana]} ${fecha} de ${meses[mes]} de ${anio}`;
}

function actualizarReloj() {
  const fechaHora = new Date();
  const horas24 = fechaHora.getHours();
  const minutos = fechaHora.getMinutes();
  const segundos = fechaHora.getSeconds();
  const ampm = horas24 < 12 ? "AM" : "PM";
  const horas12 = horas24 % 12 || 12;
  /* Aqui utilizo % 12 que me devuelve el resto de la division y
  agrego || 12 para que cuando el resultado sea 0 se convierta en 12 */
  const horasFormato = String(horas12).padStart(2, "0");
  const minutosFormato = String(minutos).padStart(2, "0");
  const segundosFormato = String(segundos).padStart(2, "0");

  document.getElementById("horas").textContent = horasFormato;
  document.getElementById("minutos").textContent = minutosFormato;
  document.getElementById("segundos").textContent = segundosFormato;
  document.getElementById("ampm").textContent = ampm;

  actualizarFecha();
}

actualizarReloj();
setInterval(() => {
  actualizarReloj();
}, 1000);
