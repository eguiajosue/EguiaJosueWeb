const idTituloStatus = document.querySelector("#idTituloStatusAlumno");
const idMensajeStatus = document.querySelector("#idMensajeStatusAlumno");
const toastHeader = document.querySelector("#idHeaderToast");

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

// Abrir toast
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

// Validar formulario
const btn = document.querySelector("#registrarAlumno")
btn.addEventListener("click", (event) => {
  event.preventDefault();
  validarFormulario();
})

// document.addEventListener("DOMContentLoaded", function(event) {
//   document.getElementById("registrarAlumno").addEventListener('click', validarFormulario);
// });

function validarFormulario() {


  let numeroControl = document.querySelector("#numeroControl").value
  let nombre = document.querySelector("#nombre").value
  let apellidoPaterno = document.querySelector("#apellidoPaterno").value
  let apellidoMaterno = document.querySelector("#apellidoMaterno").value
  let especialidad = document.querySelector("#especialidad").value
  let semestre = document.querySelector("#semestre").value
  let isRegular = document.querySelector("#regular")
  // Correo
  let prefijo = document.querySelector("#prefijo").value

  if (numeroControl.length != 8 || nombre.length == 0 || apellidoPaterno.length == 0 || apellidoMaterno.length == 0 || especialidad.length == 0 || (semestre < 0 || semestre > 15) ){
    const errorToast = new bootstrap.Toast(toastLiveExample);
    errorToast.show();

    idTituloStatus.textContent = statusError.titulo
    idMensajeStatus.textContent = statusError.mensaje
    toastHeader.classList.add(statusError.clase)

  } else {
    const successToast = new bootstrap.Toast(toastLiveExample);
    successToast.show();

    idTituloStatus.textContent = statusSuccess.titulo
    idMensajeStatus.textContent = statusSuccess.mensaje
    toastHeader.classList.add(statusSuccess.clase)
  }
}

// Clase
class Mensaje {
  constructor(titulo, mensaje, clase) {
    this.titulo = titulo
    this.mensaje = mensaje
    this.clase = clase
  }
}

// Objetos Mensajes
const statusSuccess = new Mensaje("AGREGADO", "El alumno se agregó correctamente", "bg-success");
const statusError = new Mensaje("ERROR", "El alumno no se pudo agregar correctamente", "bg-danger")

document.getElementById("capturarDatos").addEventListener("click", async () => {
  const respuesta = await fetch("GetRegistro.php")
  const registro = await respuesta.json()

  document.getElementById("table").innerHTML = `
  <tr>
					<td id="setNumeroControl">${registro.numeroControl}</td>
					<td id="setNombre">${registro.nombre}</td>
					<td id="setApellidoPaterno">${registro.apellidoPaterno}</td>
					<td id="setApellidoMaterno">${registro.apellidoMaterno}</td>
					<td id="setSemestre">${registro.semestre}</td>
  </tr>`
})