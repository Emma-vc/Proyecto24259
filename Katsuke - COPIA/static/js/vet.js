// script.js
document.getElementById("formulario1").addEventListener("submit", function(event) {
  event.preventDefault();

  let Nombre = document.getElementById("Nombre").value;
  let apellido = document.getElementById("apellido").value;
  let Wsp = document.getElementById("Wsp").value;
  let email = document.getElementById("email").value;
  let localidad = document.getElementById("localidad").value;
  let provincia = document.getElementById("Provincia").value;

  let errorMessage = "";

  if (Nombre.trim() === "") {
      errorMessage += "Por favor, ingresa un nombre.\n";
  }

  if (apellido.trim() === "") {
      errorMessage += "Por favor, ingresa un apellido.\n";
  }

  if (Wsp.trim() === "") {
      errorMessage += "Por favor, ingresa un número de teléfono.\n";
  } else if (!/^\d+$/.test(Wsp)) {
      errorMessage += "El teléfono debe contener solo números.\n";
  }

  if (email.trim() === "") {
      errorMessage += "Por favor, ingresa un email.\n";
  } else if (!isValidEmail(email)) {
      errorMessage += "Por favor, ingresa un email válido.\n";
  }

  if (localidad.trim() === "") {
      errorMessage += "Por favor, ingresa una localidad.\n";
  }

  if (provincia.trim() === "") {
      errorMessage += "Por favor, ingresa una provincia.\n";
  }

  if (errorMessage !== "") {
      alert(errorMessage);
      document.getElementById("mensajeForm").classList.add("form-input-error-activo");
      return false;
  }

  document.getElementById("mensajeForm").classList.remove("form-input-error-activo");
  document.getElementById("envio_exito").classList.add("envio_exito-activo");

  return true;
});

function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


























