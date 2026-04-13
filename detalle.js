const params = new URLSearchParams(window.location.search);

const nombre = params.get("nombre");
const precio = params.get("precio");
const imagen = params.get("imagen");

document.getElementById("nombre").innerText = nombre;
document.getElementById("precio").innerText = precio;
document.getElementById("imagen").src = imagen;

document.getElementById("descripcion").innerText =
  "Hermosa propiedad con excelente ubicación.";

document.getElementById("btn").onclick = () => {
  const numero = "18495328992";
  const mensaje = `Hola, quiero información sobre ${nombre}`;

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`);
};