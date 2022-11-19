const successToast = {
  type: 'bg-success',
  title: 'Agregado',
  text: 'La cita se agregó correctamente'
}

const failedToast = {
  type: 'bg-danger',
  title: 'Error',
  text: 'Se produjo un error'
}


document.querySelector('#capturarDatos').addEventListener("click", async () => {
  const respuesta = await fetch("conexion.php")
  const dato = await respuesta.json()

  document.querySelector('#cuerpoTabla').innerHTML = `
  <tr>
      <th>${dato.numeroTicket}</th>
      <td>${dato.nombreCliente + ' ' + dato.apellidoPaterno + ' ' + dato.apellidoMaterno}</td>
      <td>${dato.edad}</td>
      <td>${dato.nombreTatuador}</td>
      <td>${dato.fechaCitada + ' ' + dato.horaCitada}</td>
      <td>${dato.descripcion}</td>
      <td>${dato.tamaño}</td>
      <td>${dato.color}</td>
      <td>$${dato.precio}</td>
  </tr>
  `
  generarToast(successToast.type, successToast.title, successToast.text);

})

function generarToast(color, titulo, texto) {
  const toastTrigger = document.getElementById('liveToast');
  const toastColor = document.querySelector('#toast-header');
  const toastTitle = document.querySelector("#toast-title");
  const toastText = document.querySelector("#toast-text");

  const createToast = new bootstrap.Toast(toastTrigger);

  toastTitle.textContent = titulo
  toastText.textContent = texto
  toastColor.classList.add(color);

  createToast.show();
}

document.querySelector('#guardarEstilo').addEventListener("click", () => {
  const inputEstilo = document.querySelector('#estilo');

  const radioButtons = document.querySelectorAll('.checkEstilo');
  radioButtons.forEach(element => {
    if (element.checked) inputEstilo.value = element.value
  });

  if (!document.querySelector('input[name="opcionEstilo"]:checked')) {
    generarToast(failedToast.type, failedToast.title, "Seleccione un estilo");
    hasError = true;
  }
})

