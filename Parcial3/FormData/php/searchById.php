<?php
include('./conexion.php');


$numero_ticket = $_POST['buscarNumeroTicket'];

//$numero_ticket = 1;

$consulta = "SELECT * FROM cita WHERE numero_ticket = $numero_ticket";

$registro = mysqli_query($con, $consulta) or die("No se puede hacer un SELECT");

$result = mysqli_fetch_array($registro, MYSQLI_ASSOC);

mysqli_close($con);

echo json_encode($result);
