function subirPropiedad() {
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const imagen = document.getElementById("imagen").value;

  const nueva = {
    nombre,
    precio,
    imagen
  };

  console.log("Propiedad:", nueva);
}