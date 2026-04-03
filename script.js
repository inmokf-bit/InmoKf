const lista = document.getElementById("lista");

const propiedades = [
  {
    nombre: "Casa en Miami",
    precio: "$350,000",
    imagen: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
  },
  {
    nombre: "Apartamento moderno",
    precio: "$220,000",
    imagen: "https://images.unsplash.com/photo-1507089947367-19c1da9775ae"
  }
];

propiedades.forEach(prop => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${prop.imagen}">
    <h3>${prop.nombre}</h3>
    <p>${prop.precio}</p>
    <button onclick="reservar('${prop.nombre}', '${prop.precio}')">
      Reservar
    </button>
  `;

  lista.appendChild(card);
});

function reservar(nombre, precio) {
  const numero = "+18495328992"; // 🔥 CAMBIA ESTE NÚMERO POR EL TUYO

  const mensaje = `Hola, estoy interesado en la propiedad: ${nombre} con precio ${precio}. ¿Está disponible?`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}