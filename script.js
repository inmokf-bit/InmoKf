let imagenes = [];
let index = 0;
let propiedad = "";

function abrir(img) {
  imagenes = Array.from(img.parentElement.children);
  index = imagenes.indexOf(img);
  document.getElementById("visor").style.display = "flex";
  document.getElementById("imgGrande").src = img.src;
}

function cerrar() {
  document.getElementById("visor").style.display = "none";
}

function siguiente() {
  index = (index + 1) % imagenes.length;
  document.getElementById("imgGrande").src = imagenes[index].src;
}

function anterior() {
  index = (index - 1 + imagenes.length) % imagenes.length;
  document.getElementById("imgGrande").src = imagenes[index].src;
}

function abrirFormulario(p) {
  propiedad = p;
  document.getElementById("formulario").style.display = "flex";
}

function cerrarFormulario() {
  document.getElementById("formulario").style.display = "none";
}

function enviarWhatsApp() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;

  if(nombre === "" || correo === "") {
    alert("Llena todos los campos");
    return;
  }

  let mensaje = "Hola, mi nombre es " + nombre +
                ", mi correo es " + correo +
                " y estoy interesado en: " + propiedad;

  let url = "https://wa.me/18495328992?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}