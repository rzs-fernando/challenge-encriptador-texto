// Función para encriptar el texto ingresado.
function encriptarTexto() {
  var texto = document.getElementById("cifrarTexto").value;

  var cifrarTexto = texto.replace(/e/gm, "enter");
  var cifrarTexto = cifrarTexto.replace(/o/gm, "ober");
  var cifrarTexto = cifrarTexto.replace(/i/gm, "imes");
  var cifrarTexto = cifrarTexto.replace(/a/gm, "ai");
  var cifrarTexto = cifrarTexto.replace(/u/gm, "ufat");

//Mostrar notificación si no se ingreso texto.
  if (texto === "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "No ingresaste texto.",
      showConfirmButton: false,
      timer: 1000,
    });
    return;
  }

  // Ocultar y mostrar algunos elementos del encriptador. 
  document.getElementById("imagen").style.display = "none";
  document.getElementById("msj-entrada").style.display = "none";
  document.getElementById("descripcion").style.display = "none";

  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
  document.getElementById("areams").style.display = "block";

  document.getElementById("encriptadoTxt").innerHTML = cifrarTexto;
}

// Función desencriptar texto ingresado.
function desencriptarTexto() {
  var texto = document.getElementById("cifrarTexto").value.toLowerCase();

  var cifrarTexto = texto.replace(/enter/gim, "e");
  var cifrarTexto = cifrarTexto.replace(/ober/gim, "o");
  var cifrarTexto = cifrarTexto.replace(/imes/gim, "i");
  var cifrarTexto = cifrarTexto.replace(/ai/gim, "a");
  var cifrarTexto = cifrarTexto.replace(/ufat/gim, "u");

  document.getElementById("imagen").style.display = "none";
  document.getElementById("msj-entrada").style.display = "none";
  document.getElementById("descripcion").style.display = "none";

  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
  document.getElementById("areams").style.display = "block";


  document.getElementById("encriptadoTxt").innerHTML = cifrarTexto;
}

// Función para copiar contenido.
function copiarTexto() {
  var contenidoTxt = encriptadoTxt.value;
  navigator.clipboard.writeText(contenidoTxt);

//Mostrar notificación de boton copiar.
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Texto copiado al portapapeles",
    showConfirmButton: false,
    timer: 1100,
  });
}

// Botones para  encriptar y desencriptar.

var btn = document.querySelector("#btn-encriptar");
btn.onclick = encriptarTexto;

var btn2 = document.querySelector("#btn-desencriptar");
btn2.onclick = desencriptarTexto;

// Boton para copiar texto.
var btn3 = document.querySelector("#btn-copiar");
btn3.onclick = copiarTexto;
