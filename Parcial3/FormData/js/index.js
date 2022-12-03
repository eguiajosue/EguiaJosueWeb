const successToast = {
  type: "bg-success",
  title: "Agregado",
  text: "La cita se agregó correctamente",
};

const failedToast = {
  type: "bg-danger",
  title: "Error",
  text: "Se produjo un error",
};

function generarToast(color, titulo, texto) {
  const toastTrigger = document.getElementById("liveToast");
  const toastColor = document.querySelector("#toast-header");
  const toastTitle = document.querySelector("#toast-title");
  const toastText = document.querySelector("#toast-text");

  const createToast = new bootstrap.Toast(toastTrigger);

  toastTitle.textContent = titulo;
  toastText.textContent = texto;
  toastColor.classList.remove(successToast.type);
  toastColor.classList.remove(failedToast.type);
  toastColor.classList.add(color);

  createToast.show();
}

window.addEventListener("load", async function () {
  const tabla = document.getElementById("cuerpoTabla");
  const respuesta = await fetch("php/findAll.php");
  const datos = await respuesta.json();
  datos.forEach( dato => {
    
    tabla.innerHTML += `<tr>
      <th>${dato.nombre_cliente}</th>
      <td>${dato.apellido_paterno_cliente}</td>
      <td>${dato.apellido_materno_cliente}</td>
      <td>${dato.tatuador}</td>
      <td>${dato.fecha_citada }</td>

    </tr>`;
  } )
});

document.querySelector("#guardarEstilo").addEventListener("click", () => {
  const inputEstilo = document.querySelector("#estilo");

  const radioButtons = document.querySelectorAll(".checkEstilo");
  radioButtons.forEach((element) => {
    if (element.checked) inputEstilo.value = element.value;
  });

  if (!document.querySelector('input[name="opcionEstilo"]:checked')) {
    generarToast(failedToast.type, failedToast.title, "Seleccione un estilo");
    hasError = true;
  }
});

document.querySelector("#btnBuscar").addEventListener("click", async () => {
  const inputBuscar = document.querySelector("#buscarNumeroTicket").value;

  if (inputBuscar == "") {
    generarToast(
      failedToast.type,
      failedToast.title,
      "Los datos de la cita no se encontraron"
    );
  } else {
    let datosFormulario = new FormData(document.getElementById("formulario"));
    let respuesta = await fetch("php/searchById.php", {
      method: "POST",
      body: datosFormulario,
    });

    let dato = await respuesta.json();

    document.getElementById("nombre").value = dato.nombre_cliente;
    document.getElementById("apellidoPaterno").value =
      dato.apellido_paterno_cliente;
    document.getElementById("apellidoMaterno").value =
      dato.apellido_materno_cliente;
    document.getElementById("edad").value = dato.edad;
    document.getElementById("numeroTicket").value = dato.numero_ticket;
    document.getElementById("nombreTatuador").value = dato.tatuador;
    document.getElementById("fechaCitada").value = dato.fecha_citada;
    document.getElementById("nombreTatuador").value = dato.tatuador;
    document.getElementById("descripcion").value = dato.descripcion_tatuaje;
    document.getElementById("estilo").value = dato.estilo;
    document.getElementById("tamano").value = dato.size;
    document.getElementById("precio").value = dato.precio;

    generarToast(
      successToast.type,
      "Cita encontrada",
      "Los datos de la cita se encontraron correctamente"
    );
  }
});
