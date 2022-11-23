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

// document.querySelector('#capturarDatos').addEventListener("click", async () => {
//   const respuesta = await fetch("conexion.php")
//   const dato = await respuesta.json()

//   document.querySelector('#cuerpoTabla').innerHTML = `
//   <tr>
//       <td>${dato.numero_ticket}</td>
//       <td>${dato.nombre_cliente + ' ' + dato.apellido_paterno_cliente + ' ' + dato.apellido_materno_cliente}</td>
//       <td>${dato.edad}</td>
//       <td>${dato.tatuador}</td>
//       <td>${dato.fecha_citada + ' ' + dato.hora_citada}</td>
//       <td>${dato.descripcion_tatuaje}</td>
//       <td>${dato.size}</td>
//       <td>${dato.estilo}</td>
//       <td>${dato.color == 1 ? "Si" : "No"}</td>
//       <td>$${dato.precio}</td>
//   </tr>
//   `
//   generarToast(successToast.type, successToast.title, successToast.text);

// })

function generarToast(color, titulo, texto) {
  const toastTrigger = document.getElementById('liveToast');
  const toastColor = document.querySelector('#toast-header');
  const toastTitle = document.querySelector("#toast-title");
  const toastText = document.querySelector("#toast-text");

  const createToast = new bootstrap.Toast(toastTrigger);

  toastTitle.textContent = titulo
  toastText.textContent = texto
  toastColor.classList.remove(successToast.type);
  toastColor.classList.remove(failedToast.type);
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

document.querySelector('#btnBuscar').addEventListener("click", async () => {
  const inputBuscar = document.querySelector('#buscarNumeroTicket').value;

  if (inputBuscar == "") {
    generarToast(failedToast.type, failedToast.title, "Los datos de la cita no se encontraron");
  } else {
    let datosFormulario = new FormData(document.getElementById('formulario'));
    let respuesta = await fetch('conexion.php', {
      method: 'POST',
      body: datosFormulario
    });
    let dato = await respuesta.json();

    document.getElementById('nombre').value = dato.nombre_cliente;
    document.getElementById('apellidoPaterno').value = dato.apellido_paterno_cliente;
    document.getElementById('apellidoMaterno').value = dato.apellido_materno_cliente;
    document.getElementById('edad').value = dato.edad;

    generarToast(successToast.type, "Cita encontrada", "Los datos de la cita se encontraron correctamente");
  }
})