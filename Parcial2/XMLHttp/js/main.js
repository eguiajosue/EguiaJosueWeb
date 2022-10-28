$(document).ready( function() {
	$('#botonAjax').click(presionarBoton())

	function presionarBoton() {
		let parNum = $("#num").val();
		$.get("../data.php", {num: parNum}, llegadaDatos());
	}

	function llegadaDatos(datos) {
		$("#resultado").html(`<h3>El cuadrado es ` + datos + `</h3>`)
	}
})

